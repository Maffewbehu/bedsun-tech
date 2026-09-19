import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const paths = [...sitemap.matchAll(/<loc>https:\/\/bedsuntech\.tech([^<]*)<\/loc>/g)].map(match => match[1]);
assert(paths.includes('/ai-consultant') && paths.includes('/about') && paths.includes('/'));
assert.equal(new Set(paths).size, paths.length, 'Duplicate sitemap URLs');
const config = JSON.parse(await readFile('dist/staticwebapp.config.json', 'utf8'));
assert.equal(config.navigationFallback, undefined, 'Unknown pages must not fall back to the homepage');
assert.deepEqual(config.responseOverrides['404'], { rewrite: '/404.html', statusCode: 404 });
const titles = new Set();
const descriptions = new Set();

for (const path of [...paths, '/404']) {
  const html = await readFile(path === '/404' ? 'dist/404.html' : `dist${path === '/' ? '' : path}/index.html`, 'utf8');
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
  const canonical = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/g)];
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: expected one visible page heading`);
  assert.equal((html.match(/<title>/g) || []).length, 1, `${path}: duplicate/missing title`);
  assert.equal((html.match(/name="description"/g) || []).length, 1, `${path}: duplicate/missing description`);
  assert.equal((html.match(/name="robots"/g) || []).length, 1, `${path}: duplicate/missing robots tag`);
  assert(!html.includes('<!--app-head-->') && !html.includes('<div id="root"></div>'));
  const title = head.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const description = head.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert(title && description, `${path}: metadata must be in the head`);
  assert(!titles.has(title), `${path}: reused title`);
  assert(!descriptions.has(description), `${path}: reused description`);
  titles.add(title);
  descriptions.add(description);
  if (path === '/404') {
    assert.equal(canonical.length, 0, '404 must not canonicalize to the homepage');
    assert(head.includes('content="noindex, nofollow"'));
  } else {
    assert.equal(canonical.length, 1, `${path}: expected one canonical URL`);
    assert.equal(canonical[0][1], `https://bedsuntech.tech${path}`);
    assert(head.includes('content="index, follow"'));
    if (path !== '/') {
      assert(config.routes.some(route => route.route === path && route.rewrite === `${path}/index.html`));
    }
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    assert(JSON.parse(match[1])['@type'], `${path}: invalid structured data`);
  }
  for (const match of html.matchAll(/(?:src|href|srcSet)="(\/assets\/[^" ]+)"/g)) {
    await access(`dist${match[1]}`);
  }
  for (const match of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const target = match[1];
    if (/\.[a-z\d]+$/i.test(target) || target.startsWith('/assets/')) continue;
    assert(paths.includes(target), `${path}: broken internal link ${target}`);
  }
}
console.log(`Verified ${paths.length} page documents, metadata, internal links, assets, and 404 configuration.`);
