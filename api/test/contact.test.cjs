const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createContactHandler } = require('../contact');

function fixture(options = {}) {
  const sent = [];
  const handler = createContactHandler({ env: {}, sendEmail: async email => {
    sent.push(email);
    if (options.throws) throw new Error('provider failure with private data');
    return options.result || { data: { id: 'email_fixture' }, error: null };
  } });
  return { sent, async request(body, method = 'POST') {
    const context = { log() {} };
    await handler(context, { method, body });
    return context.res;
  } };
}

const base = { full_name: 'Taylor Customer', preferred_contact: 'email', from_email: 'taylor@example.test', message: 'My printer shows offline.' };

test('email inquiries send the selected service and optional context with a working reply address', async () => {
  const f = fixture();
  const res = await f.request({ ...base, service_type: 'Printer setup or troubleshooting', postal_code: '89101', help_type: 'On-site' });
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { success: true, id: 'email_fixture' });
  assert.equal(f.sent[0].replyTo, base.from_email);
  assert.match(f.sent[0].text, /Service: Printer setup or troubleshooting/);
  assert.match(f.sent[0].text, /ZIP code: 89101/);
});

test('phone-only requests are accepted without adding an invalid email reply header', async () => {
  const f = fixture();
  const res = await f.request({ full_name: 'Taylor Customer', preferred_contact: 'phone', phone: '(702) 555-0123', message: 'I need help setting up my phone.' });
  assert.equal(res.status, 200);
  assert.equal('replyTo' in f.sent[0], false);
  assert.equal('reply_to' in f.sent[0], false);
  assert.match(f.sent[0].text, /Preferred reply: Phone call/);
  assert.match(f.sent[0].text, /Phone: \(702\) 555-0123/);
});

test('legacy first/last-name email payloads remain supported', async () => {
  const f = fixture();
  const res = await f.request({ first_name: 'Taylor', last_name: 'Customer', from_email: base.from_email, phone: '+1 702 555 0123', subject: 'Old form request', message: base.message });
  assert.equal(res.status, 200);
  assert.match(f.sent[0].text, /Name: Taylor Customer/);
  assert.equal(f.sent[0].replyTo, base.from_email);
});

test('missing, malformed or wrong preferred-contact details never send a message', async () => {
  const badBodies = [
    null, [], 'invalid', { ...base, message: '   ' }, { ...base, from_email: '' },
    { ...base, from_email: 'taylor@example.test\nBcc: another@example.test' },
    { ...base, preferred_contact: 'phone', phone: '' },
    { ...base, preferred_contact: 'phone', phone: '123' },
    { ...base, preferred_contact: 'phone', phone: 'not-a-number' },
    { ...base, preferred_contact: 'text' }, { ...base, message: 'x'.repeat(5001) },
    { ...base, from_email: { injected: true } },
  ];
  for (const body of badBodies) {
    const f = fixture();
    assert.equal((await f.request(body)).status, 400);
    assert.equal(f.sent.length, 0);
  }
});

test('HTML details are escaped and subjects cannot add email headers', async () => {
  const f = fixture();
  await f.request({ ...base, full_name: '<img src=x> & "Taylor"', subject: 'Hello\r\nInjected', message: '<script>alert("x")</script>\nPrinter & scanner' });
  assert(!f.sent[0].html.includes('<script>'));
  assert(!f.sent[0].html.includes('<img'));
  assert.match(f.sent[0].html, /&lt;script&gt;/);
  assert.match(f.sent[0].html, /Printer &amp; scanner/);
  assert(!/[\r\n]/.test(f.sent[0].subject));
});

test('provider rejection, incomplete acceptance and exceptions never return success or private details', async () => {
  for (const options of [{ result: { error: { message: 'private upstream details' } } }, { result: { data: {} } }, { throws: true }]) {
    const f = fixture(options);
    const res = await f.request(base);
    assert.equal(res.status, 502);
    assert.equal(res.body.success, undefined);
    assert(!JSON.stringify(res.body).includes('private'));
  }
});

test('health and preflight work without email configuration; unconfigured POST fails clearly', async () => {
  const handler = createContactHandler({ env: {} });
  for (const [method, expected] of [['GET', 200], ['OPTIONS', 204], ['PUT', 405], ['POST', 503]]) {
    const context = { log() {} };
    await handler(context, { method, body: base });
    assert.equal(context.res.status, expected);
    assert.equal(context.res.headers['Cache-Control'], 'no-store');
  }
});
