// Run locally with server-only storage settings and the two approved ZIP paths.
const { readFile } = require('node:fs/promises');
const { createHash } = require('node:crypto');
const { BlobServiceClient } = require('@azure/storage-blob');

async function main() {
  const [budget, dashboard] = process.argv.slice(2);
  if (!budget || !dashboard) throw new Error('Usage: node api/scripts/upload-releases.cjs BUDGET_ZIP DASHBOARD_ZIP');
  const { STORE_STORAGE_CONNECTION_STRING, STORE_FILES_CONTAINER, STORE_ORDERS_CONTAINER } = process.env;
  if (!STORE_STORAGE_CONNECTION_STRING || !STORE_FILES_CONTAINER || !STORE_ORDERS_CONTAINER) throw new Error('Set the server-only storage settings first.');
  const service = BlobServiceClient.fromConnectionString(STORE_STORAGE_CONNECTION_STRING);
  for (const name of [STORE_FILES_CONTAINER, STORE_ORDERS_CONTAINER]) {
    if ((await service.getContainerClient(name).getAccessPolicy()).blobPublicAccess) throw new Error('Both containers must be private.');
  }
  const files = service.getContainerClient(STORE_FILES_CONTAINER);
  for (const [path, key] of [[budget, 'STORE_BUDGET_BLOB_NAME'], [dashboard, 'STORE_DASHBOARD_BLOB_NAME']]) {
    const name = process.env[key];
    if (!name || !name.startsWith('releases/') || !name.endsWith('.zip')) throw new Error(`Set ${key} to an immutable release ZIP path.`);
    const bytes = await readFile(path);
    if (bytes.readUInt32LE(0) !== 0x04034b50) throw new Error('The release must be a ZIP archive.');
    const sha256 = createHash('sha256').update(bytes).digest('hex');
    const blob = files.getBlockBlobClient(name);
    try {
      await blob.uploadData(bytes, { conditions: { ifNoneMatch: '*' }, metadata: { sha256 }, blobHTTPHeaders: { blobContentType: 'application/zip', blobCacheControl: 'private, no-store' } });
    } catch (error) {
      if (![409, 412].includes(error.statusCode)) throw error;
      if ((await blob.getProperties()).metadata?.sha256 !== sha256) throw new Error('A different release already exists at this path. Use a new versioned path.');
    }
    console.log(JSON.stringify({ blob: name, size: bytes.length, sha256 }));
  }
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
