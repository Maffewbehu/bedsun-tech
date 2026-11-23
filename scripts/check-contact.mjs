import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM, VirtualConsole } from 'jsdom';

const pause = () => new Promise(resolve => setTimeout(resolve, 10));
async function until(condition, message) {
  for (let attempt = 0; attempt < 100; attempt++) {
    if (condition()) return;
    await pause();
  }
  assert.fail(message);
}

async function open(query, responseBody = { success: true, id: 'mock_email' }, responseStatus = 200) {
  const errors = [];
  const requests = [];
  const events = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('error', (...args) => errors.push(args.join(' ')));
  virtualConsole.on('jsdomError', error => errors.push(error.message));
  const dom = new JSDOM(await readFile('dist/contact/index.html', 'utf8'), {
    url: `https://bedsuntech.tech/contact${query}`, runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole,
  });
  const { window } = dom;
  const { document } = window;
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.gtag = (...args) => events.push(args);
  window.fetch = async (url, options) => {
    requests.push({ url, body: JSON.parse(options.body) });
    return { ok: responseStatus >= 200 && responseStatus < 300, status: responseStatus, json: async () => responseBody };
  };
  const entry = document.querySelector('script[type="module"][src]').getAttribute('src');
  window.eval(await readFile(`dist${entry}`, 'utf8'));
  document.querySelector('[aria-controls="mobile-navigation"]').click();
  await until(() => document.getElementById('mobile-navigation'), 'Contact page did not hydrate');
  document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  await until(() => !document.getElementById('mobile-navigation'), 'Menu did not close');
  async function fill(name, value) {
    const input = document.querySelector(`[name="${name}"]`);
    assert(input, `Missing ${name} field`);
    const prototype = input.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(prototype, 'value').set.call(input, value);
    input.dispatchEvent(new window.Event('input', { bubbles: true }));
    await pause();
  }
  function finish() {
    assert.deepEqual(errors, [], 'Contact flow must not produce hydration or runtime errors');
    dom.window.close();
  }
  return { window, document, requests, events, fill, finish };
}

const phone = await open('?service=printer');
await until(() => phone.document.querySelector('[name="service_type"]').value === 'Printer setup or troubleshooting', 'Printer service was not selected');
assert.equal(phone.document.querySelector('button[aria-pressed="true"]').textContent, 'For home');
assert.equal(phone.requests.length, 0, 'Opening an inquiry must not send it');
phone.document.querySelector('input[name="preferred_contact"][value="phone"]').click();
await until(() => phone.document.querySelector('input[name="phone"]'), 'Phone reply did not show a callback field');
assert.equal(phone.document.querySelector('input[name="from_email"]'), null, 'Phone inquiries must not require an email');
await phone.fill('full_name', 'Taylor Phone');
await phone.fill('phone', '(702) 555-0123');
await phone.fill('message', 'My wireless printer says offline.');
await phone.fill('postal_code', '89101');
phone.document.querySelector('button[type="submit"]').click();
await until(() => phone.document.querySelector('[role="status"]')?.textContent.includes('Your request has been sent'), 'Phone inquiry was not confirmed');
assert.equal(phone.requests.length, 1);
assert.equal(phone.requests[0].url, '/api/contact');
assert.equal(phone.requests[0].body.preferred_contact, 'phone');
assert.equal(phone.requests[0].body.phone, '(702) 555-0123');
assert.equal(phone.requests[0].body.from_email, '');
assert.equal(phone.requests[0].body.service_id, 'printer');
assert.equal(phone.requests[0].body.postal_code, '89101');
const phoneLeads = phone.events.filter(args => args[0] === 'event' && args[1] === 'generate_lead');
assert.equal(phoneLeads.length, 1);
assert.equal(phoneLeads[0][2].service_id, 'printer');
assert(!JSON.stringify(phoneLeads).includes('Taylor') && !JSON.stringify(phoneLeads).includes('555-0123'), 'Lead analytics must exclude personal details');
phone.finish();

const business = await open('?service=opportunity-scan');
await until(() => business.document.querySelector('[name="service_type"]').value === 'Business Tech & AI Opportunity Scan', 'Opportunity Scan was not selected');
assert.equal(business.document.querySelector('button[aria-pressed="true"]').textContent, 'For business');
assert(business.document.querySelector('[name="business_name"]'));
assert.equal(business.document.querySelector('[name="postal_code"]'), null);
await business.fill('full_name', 'Taylor Business');
await business.fill('from_email', 'taylor@example.test');
await business.fill('message', 'We want a clearer process for website inquiries.');
await business.fill('business_name', 'Example Business');
await business.fill('website', 'example.test');
business.document.querySelector('button[type="submit"]').click();
await until(() => business.document.querySelector('[role="status"]'), 'Business inquiry was not confirmed');
assert.equal(business.requests[0].body.audience, 'business');
assert.equal(business.requests[0].body.business_name, 'Example Business');
assert.equal(business.requests[0].body.website, 'example.test');
assert.equal(business.events.filter(args => args[1] === 'generate_lead').length, 1);
business.finish();

for (const [body, status] of [[{ error: 'Email provider unavailable' }, 502], [{ success: false }, 200]]) {
  const failure = await open('', body, status);
  await failure.fill('full_name', 'Taylor Retry');
  await failure.fill('from_email', 'retry@example.test');
  await failure.fill('message', 'I need help connecting my Wi-Fi.');
  failure.document.querySelector('button[type="submit"]').click();
  await until(() => failure.document.querySelector('[role="alert"]'), 'Failed delivery must show an error');
  assert.equal(failure.document.querySelector('[name="message"]').value, 'I need help connecting my Wi-Fi.');
  assert.equal(failure.events.filter(args => args[1] === 'generate_lead').length, 0, 'Unaccepted inquiries must not count as leads');
  assert(failure.document.querySelector('[role="alert"] a[href^="mailto:"]'), 'Failed inquiry needs a usable email fallback');
  assert(failure.document.querySelector('[role="alert"] a[href^="tel:"]'), 'Failed inquiry needs a phone fallback');
  failure.finish();
}

console.log('Verified service-prefilled personal/business inquiries, phone-only and email submissions, successful-delivery lead analytics, preserved error details, and direct-contact fallbacks. All network requests were mocked.');
