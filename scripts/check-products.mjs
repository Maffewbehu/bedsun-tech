import assert from 'node:assert/strict';
import { access, readdir, readFile } from 'node:fs/promises';
import { getProductCommerce } from '../src/lib/productCommerce.js';

const configured = { releaseReady: 'true', priceUsd: '12.50', checkoutUrl: 'https://checkout.example.test/budget' };
const closed = { available: false, checkoutUrl: null, priceLabel: null };
assert.deepEqual(getProductCommerce(), closed);
for (const field of Object.keys(configured)) {
  const incomplete = { ...configured };
  delete incomplete[field];
  assert.deepEqual(getProductCommerce(incomplete), closed, `${field} is required to open sales`);
}
for (const releaseReady of ['false', 'TRUE', '1', true]) {
  assert.deepEqual(getProductCommerce({ ...configured, releaseReady }), closed);
}
for (const priceUsd of ['', '0', '-1', '1.999', '12abc', '$12', 'NaN', 'Infinity', '1e2', '0x10']) {
  assert.deepEqual(getProductCommerce({ ...configured, priceUsd }), closed, `Invalid price ${priceUsd} must close sales`);
}
for (const checkoutUrl of ['', 'not a url', 'javascript:alert(1)', 'http://checkout.example.test', '//checkout.example.test', 'https://user:pass@checkout.example.test', 'https://example.test/bundle.zip', 'https://example.test/bundle.xlsx?download=true', 'https://example.test/report.pbit', 'https://example.test/report.pbix?download=true', 'https://example.test/project.pbip/']) {
  assert.deepEqual(getProductCommerce({ ...configured, checkoutUrl }), closed, `Invalid checkout ${checkoutUrl} must close sales`);
}
assert.deepEqual(getProductCommerce(configured), { available: true, checkoutUrl: configured.checkoutUrl, priceLabel: '$12.50' });
assert.equal(getProductCommerce({ ...configured, priceUsd: '0.01' }).priceLabel, '$0.01');
assert.equal(getProductCommerce({ ...configured, priceUsd: '9' }).priceLabel, '$9.00');

const root = 'dist/assets/products/simple-budget-debt';
for (const colorway of ['ocean', 'forest', 'rose', 'warm-sand', 'dark-lavender', 'high-contrast-ocean']) {
  for (const sheet of ['budget', 'debt', 'guide']) await access(`${root}/${colorway}-${sheet}.webp`);
}
for (const page of ['overview', 'sales', 'operating-expenses']) await access(`dist/assets/products/sales-expenses-dashboard/${page}.png`);
for (const path of ['products', 'products/simple-budget-debt', 'products/sales-expenses-dashboard']) {
  const html = await readFile(`dist/${path}/index.html`, 'utf8');
  assert(html.includes(path.endsWith('sales-expenses-dashboard') ? 'Sales &amp; Expenses' : 'Simple Budget'), `Missing product content at /${path}`);
  assert(!/href="[^"]+\.(?:xlsx?|zip|ods|csv|pbit|pbix|pbip)(?:[?#"][^>]*|$)/i.test(html), 'Paid files must not be linked from a product page');
}
async function checkPublicFiles(path) {
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const file = `${path}/${entry.name}`;
    if (entry.isDirectory()) await checkPublicFiles(file);
    else assert(!/\.(xlsx?|zip|ods|csv|pbit|pbix|pbip)$/i.test(entry.name), `Paid spreadsheet/template/archive must not be publicly served: ${file}`);
  }
}
await checkPublicFiles('public');
await checkPublicFiles('dist');
console.log('Verified checkout gating, prices, 18 workbook previews, 3 dashboard previews, product pages, and absence of public paid files.');
