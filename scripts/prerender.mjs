import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { build } from 'vite';

// Build the same route components for Node; only dist is deployed to Azure.
await build({
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: 'dist-ssr',
    copyPublicDir: false,
    rollupOptions: { output: { entryFileNames: 'entry-server.js' } },
  },
});

const { paths, render } = await import('../dist-ssr/entry-server.js');
const template = await readFile('dist/index.html', 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('Missing prerender placeholders in the HTML shell.');
}

for (const path of [...paths, '/404']) {
  const rendered = render(path);
  const head = rendered.match(/<head>([\s\S]*?)<\/head>/)?.[1];
  const body = rendered.match(/<body>([\s\S]*?)<\/body>/)?.[1];
  if (head === undefined || body === undefined) throw new Error(`Could not render ${path}`);
  const html = template.replace('<!--app-head-->', () => head)
    .replace('<div id="root"></div>', () => body);
  const directory = path === '/' || path === '/404' ? 'dist' : `dist${path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/${path === '/404' ? '404.html' : 'index.html'}`, html);
}

const config = JSON.parse(await readFile('public/staticwebapp.config.json', 'utf8'));
config.routes.push(
  // Azure normalizes folder paths and their trailing-slash/index variants.
  // One rule covers each page; separate alias rules are rejected as duplicates.
  ...paths.filter(path => path !== '/').map(path => (
    { route: path, rewrite: `${path}/index.html` }
  )),
  { route: '/404.html', statusCode: 404 },
);
await writeFile('dist/staticwebapp.config.json', `${JSON.stringify(config, null, 2)}\n`);
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(path => `  <url><loc>https://bedsuntech.tech${path}</loc></url>`).join('\n')}
</urlset>
`);
console.log(`Prerendered ${paths.length} public pages plus a 404 page, sitemap, and Azure routes.`);
