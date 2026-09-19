import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM, VirtualConsole } from 'jsdom';

const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const paths = [...sitemap.matchAll(/<loc>https:\/\/bedsuntech\.tech([^<]*)<\/loc>/g)].map(match => match[1]);
const pause = () => new Promise(resolve => setTimeout(resolve, 10));
async function until(condition, message) {
  for (let attempt = 0; attempt < 100; attempt++) {
    if (condition()) return;
    await pause();
  }
  assert.fail(message);
}

async function open(path, file) {
  const errors = [];
  const requests = [];
  const console = new VirtualConsole();
  console.on('error', (...args) => errors.push(args.join(' ')));
  console.on('jsdomError', error => errors.push(error.message));
  const html = await readFile(file, 'utf8');
  const dom = new JSDOM(html, { url: `https://bedsuntech.tech${path}`, runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole: console });
  const { window } = dom;
  const { document } = window;
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.fetch = async (url, options) => {
    requests.push({ url, options });
    return { ok: true, json: async () => ({ reply: 'Test response', leadEmailSent: false }) };
  };
  const entry = document.querySelector('script[type="module"][src]').getAttribute('src');
  window.eval(await readFile(`dist${entry}`, 'utf8'));
  const menu = document.querySelector('[aria-controls="mobile-navigation"]');
  // Clicking immediately also verifies hydration event replay on static HTML.
  menu.click();
  await until(() => document.getElementById('mobile-navigation'), `${path}: menu did not hydrate`);
  document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  await until(() => !document.getElementById('mobile-navigation'), `${path}: Escape did not close menu`);
  assert.equal(document.activeElement, menu, `${path}: menu did not restore focus`);
  return { dom, window, document, errors, requests };
}

for (const path of [...paths, '/missing-page-check']) {
  const file = path === '/missing-page-check' ? 'dist/404.html' : `dist${path === '/' ? '' : path}/index.html`;
  const page = await open(path, file);
  const { document, errors, requests } = page;
  assert.equal(document.querySelectorAll('meta[name="description"]').length, 1, `${path}: duplicated description after hydration`);
  assert.equal(document.querySelectorAll('title').length, 1, `${path}: duplicated title after hydration`);
  const canonical = document.querySelectorAll('link[rel="canonical"]');
  assert.equal(canonical.length, path === '/missing-page-check' ? 0 : 1);
  if (canonical.length) assert.equal(canonical[0].href, `https://bedsuntech.tech${path}`);
  assert.deepEqual(requests, [], 'Hydration must not submit a lead or call the assistant');
  assert.deepEqual(errors, [], `${path}: hydration or runtime errors`);
  page.dom.window.close();
}

const page = await open('/', 'dist/index.html');
const { document, window, errors } = page;
assert.equal(document.getElementById('assistant-greeting'), null, 'Assistant must start collapsed');
document.querySelector('[aria-controls="assistant-greeting"]').click();
await until(() => document.getElementById('assistant-greeting'), 'Assistant launcher did not open');
document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
await until(() => !document.getElementById('assistant-greeting'), 'Assistant did not close');

async function navigate(path) {
  const link = document.querySelector(`a[href="${path}"]`);
  assert(link, `Missing navigation link to ${path}`);
  link.click();
  await until(() => window.location.pathname === path && document.querySelector('link[rel="canonical"]')?.href === `https://bedsuntech.tech${path}`, `Navigation metadata did not update for ${path}`);
  assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 1);
  assert.equal(document.querySelectorAll('meta[name="description"]').length, 1);
}
await navigate('/printer-setup-troubleshooting');
assert(document.title.includes('Printer'));
await navigate('/about');
assert(document.title.includes('Matthew Bedsun'));
await navigate('/contact');
assert.equal(document.querySelector('[aria-label="Quick contact"]'), null);
assert.equal(document.querySelector('input[name="from_email"]').autocomplete, 'email');
await navigate('/ai-consultant');
assert.equal(document.querySelector('[aria-label="Quick contact"]'), null);
assert(document.querySelector('label[for="assistant-message"]'));
window.history.pushState({}, '', '/missing-page-check');
window.dispatchEvent(new window.PopStateEvent('popstate'));
await until(() => document.querySelector('meta[name="robots"]')?.content === 'noindex, nofollow', 'Client-side 404 metadata did not update');
assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 0);
assert.deepEqual(errors, [], 'Runtime errors during navigation');
assert.deepEqual(page.requests, [], 'UI checks must not send real leads or assistant requests');
page.dom.window.close();
console.log(`Verified hydration for ${paths.length} pages and 404, navigation metadata, menu focus, and assistant controls.`);
