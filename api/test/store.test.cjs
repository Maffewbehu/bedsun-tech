const { test } = require('node:test');
const assert = require('node:assert/strict');
const StripeClient = require('stripe');
const { createStore, PRODUCTS } = require('../lib/store');

const NOW = 1791714000;
const ID = 'cs_live_abcdefghijklmnop123456789';
const SIGNING = 'whsec_fixture_only_not_a_real_secret';
const realStripe = new StripeClient('rk_test_fixture_only');
function fixture(sku = 'simple-budget-debt') {
  const p = PRODUCTS[sku];
  const state = { orders: new Map(), email: [], calls: [], locks: new Set(), private: true, fileExists: true, emailFails: false, time: NOW };
  const env = {
    STORE_SITE_ORIGIN: 'https://bedsuntech.tech', STRIPE_LIVEMODE: 'true',
    STORE_DOWNLOAD_SIGNING_SECRET: 'fixture-download-secret-at-least-32-bytes',
    STORE_CHECKOUT_ENABLED: 'true', STRIPE_ACCOUNT_ID: 'acct_fixture',
    STRIPE_WEBHOOK_SECRET: SIGNING, RESEND_API_KEY: 're_fixture', STORE_FROM_EMAIL: 'Bedsun Tech <orders@example.test>',
    [`STORE_${p.prefix}_PRICE_ID`]: 'price_fixture', [`STORE_${p.prefix}_BLOB_NAME`]: `releases/${p.filename}`,
    [`STORE_${p.prefix}_RELEASE_READY`]: 'true',
  };
  const session = {
    id: ID, livemode: true, mode: 'payment', status: 'complete', payment_status: 'paid', currency: 'usd',
    metadata: { app: 'bedsun-store', sku }, amount_subtotal: p.cents, amount_total: p.cents,
    customer_details: { email: 'buyer@example.test' },
    payment_intent: { status: 'succeeded', latest_charge: { paid: true, refunded: false, amount_refunded: 0, disputed: false } },
  };
  const price = { id: 'price_fixture', active: true, livemode: true, type: 'one_time', currency: 'usd', unit_amount: p.cents, product: p.productId };
  const stripe = {
    accounts: { retrieve: async () => ({ id: 'acct_fixture', charges_enabled: true }) },
    prices: { retrieve: async () => price },
    checkout: { sessions: {
      retrieve: async () => session,
      listLineItems: async () => ({ has_more: false, data: [{ quantity: 1, price }] }),
      create: async (payload, options) => { state.calls.push({ payload, options }); return { url: 'https://checkout.stripe.com/c/pay/fixture' }; },
    } },
    webhooks: realStripe.webhooks,
  };
  const storage = {
    assertPrivate: async () => { if (!state.private) throw new Error('public container'); },
    assertFile: async () => { if (!state.fileExists) throw new Error('missing file'); },
    readOrder: async id => structuredClone(state.orders.get(id) || null),
    ensureOrder: async order => { if (!state.orders.has(order.sessionId)) state.orders.set(order.sessionId, structuredClone(order)); },
    withOrderLease: async (id, callback) => {
      if (state.locks.has(id)) throw new Error('lease already held');
      state.locks.add(id);
      try { await callback(structuredClone(state.orders.get(id)), async order => state.orders.set(id, structuredClone(order))); }
      finally { state.locks.delete(id); }
    },
    fileUrl: async (blobName, filename, expiry) => {
      state.calls.push({ blobName, filename, expiry });
      return 'https://private.example.test/release.zip?short_lived_signature=fixture';
    },
  };
  const mail = { send: async (email, idempotencyKey) => { if (state.emailFails) throw new Error('email provider unavailable'); state.email.push({ email, idempotencyKey }); } };
  const store = () => createStore({ env, stripe, storage, mail, now: () => state.time });
  const event = (type = 'checkout.session.completed', object = session, live = true) => {
    const rawBody = JSON.stringify({ id: 'evt_fixture', type, livemode: live, data: { object } });
    return { rawBody, headers: { 'stripe-signature': realStripe.webhooks.generateTestHeaderString({ payload: rawBody, secret: SIGNING }) } };
  };
  const checkout = { headers: { origin: 'https://bedsuntech.tech' }, body: { productId: sku, requestId: 'aba7519a-1383-4c02-b1ec-cd34372dbcf4' } };
  const order = { query: { session_id: ID } };
  const downloadRequest = result => ({ query: Object.fromEntries(new URL(result.body.downloadUrl, env.STORE_SITE_ORIGIN).searchParams) });
  return { state, env, session, price, stripe, storage, store, event, checkout, order, downloadRequest, sku };
}

test('a closed store never starts checkout', async () => {
  const f = fixture(); f.env.STORE_CHECKOUT_ENABLED = 'false';
  await assert.rejects(f.store().checkout(f.checkout), { status: 503 }); assert.equal(f.state.calls.length, 0);
});
test('checkout uses the server price, stable idempotency and the correct product', async () => {
  const f = fixture(); f.checkout.body.price = 1; f.checkout.body.success_url = 'https://attacker.test';
  await f.store().checkout(f.checkout); await f.store().checkout(f.checkout);
  const { payload, options } = f.state.calls[0];
  assert.deepEqual(payload.line_items, [{ price: 'price_fixture', quantity: 1 }]);
  assert.equal(payload.metadata.sku, f.sku); assert(payload.success_url.startsWith('https://bedsuntech.tech/'));
  assert.equal(payload.payment_method_types, undefined); assert.match(payload.integration_identifier, /^bedsun_store_[a-z]{8}$/);
  assert.deepEqual(f.state.calls[1], { payload, options });
});
test('unknown products, invalid request IDs and cross-site checkout are rejected', async () => {
  const f = fixture();
  for (const request of [
    { ...f.checkout, body: { ...f.checkout.body, productId: '__proto__' } },
    { ...f.checkout, body: { ...f.checkout.body, requestId: 'bad' } },
    { ...f.checkout, headers: { origin: 'https://attacker.test' } },
  ]) await assert.rejects(f.store().checkout(request));
  assert.equal(f.state.calls.length, 0);
});
test('wrong Stripe account and unpublished release prevent checkout', async () => {
  const f = fixture(); f.env.STRIPE_ACCOUNT_ID = 'acct_wrong';
  await assert.rejects(f.store().checkout(f.checkout), { status: 503 });
  f.env.STRIPE_ACCOUNT_ID = 'acct_fixture'; f.env.STORE_BUDGET_RELEASE_READY = 'false';
  await assert.rejects(f.store().checkout(f.checkout), { status: 503 });
});
test('price, currency, product, mode and environment must match', async () => {
  for (const change of [{ unit_amount: 1 }, { currency: 'eur' }, { product: 'another_product' }, { type: 'recurring' }, { livemode: false }, { active: false }]) {
    const f = fixture(); Object.assign(f.price, change);
    await assert.rejects(f.store().checkout(f.checkout), { status: 503 }); assert.equal(f.state.calls.length, 0);
  }
});
test('public storage, missing archives and missing webhook configuration prevent checkout', async () => {
  for (const field of ['private', 'fileExists']) {
    const f = fixture(); f.state[field] = false;
    await assert.rejects(f.store().checkout(f.checkout)); assert.equal(f.state.calls.length, 0);
  }
  const f = fixture(); delete f.env.STRIPE_WEBHOOK_SECRET;
  await assert.rejects(f.store().checkout(f.checkout));
});
test('real SDK signature validation rejects mutations and reconstructed bodies', async () => {
  const f = fixture(); const request = f.event(); request.rawBody += ' ';
  await assert.rejects(f.store().webhook(request), { status: 400 });
  await assert.rejects(f.store().webhook({ body: f.session, headers: {} }), { status: 400 });
  assert.equal(f.state.orders.size, 0);
});
test('webhooks from the wrong payment environment are rejected', async () => {
  const f = fixture(); await assert.rejects(f.store().webhook(f.event('checkout.session.completed', f.session, false)), { status: 400 });
});
test('unpaid, unrelated and non-fulfillment events never unlock downloads', async () => {
  const f = fixture();
  await f.store().webhook(f.event('checkout.session.completed', { ...f.session, payment_status: 'unpaid' }));
  await f.store().webhook(f.event('checkout.session.completed', { ...f.session, metadata: { app: 'another-app' } }));
  await f.store().webhook(f.event('checkout.session.async_payment_failed'));
  assert.equal(f.state.orders.size, 0); assert.equal(f.state.email.length, 0);
});
test('the success page cannot fulfill a purchase, even when Stripe reports paid', async () => {
  const f = fixture();
  assert.deepEqual(await f.store().order(f.order), { status: 202, body: { status: 'processing' } });
  assert.equal(f.state.orders.size, 0); assert.equal(f.state.email.length, 0);
});
test('verified payment creates one durable order and emails its private link', async () => {
  const f = fixture(); await f.store().webhook(f.event());
  const order = f.state.orders.get(ID);
  assert.equal(order.sku, f.sku); assert.equal(order.expiresAt, NOW + 7 * 86400); assert.equal(order.emailSentAt, NOW);
  assert.equal(f.state.email.length, 1); assert.equal(f.state.email[0].email.to, 'buyer@example.test');
  assert.equal(f.state.email[0].email.reply_to, 'bedsun.tech@gmail.com');
  assert(f.state.email[0].email.text.includes('/api/store/download?')); assert(!f.state.email[0].email.text.includes('private.example.test'));
  const result = await f.store().order(f.order);
  assert.equal(result.body.status, 'ready'); assert.equal(result.body.email, undefined);
});
test('completed and async-success replay, including after provider dedup expiry, sends no extra email', async () => {
  const f = fixture(); await f.store().webhook(f.event());
  f.state.time += 2 * 86400;
  await f.store().webhook(f.event()); await f.store().webhook(f.event('checkout.session.async_payment_succeeded'));
  assert.equal(f.state.orders.size, 1); assert.equal(f.state.email.length, 1);
});
test('concurrent verified events serialize delivery', async () => {
  const f = fixture();
  const results = await Promise.allSettled([f.store().webhook(f.event()), f.store().webhook(f.event())]);
  assert(results.some(result => result.status === 'fulfilled'));
  await f.store().webhook(f.event()); assert.equal(f.state.email.length, 1);
});
test('email failure leaves the order retryable and retains its expiry and link', async () => {
  const f = fixture(); f.state.emailFails = true;
  await assert.rejects(f.store().webhook(f.event()));
  const original = await f.store().order(f.order); assert.equal(f.state.orders.get(ID).emailSentAt, null);
  f.state.emailFails = false; f.state.time += 60; await f.store().webhook(f.event());
  assert.equal((await f.store().order(f.order)).body.downloadUrl, original.body.downloadUrl); assert.equal(f.state.email.length, 1);
});
test('mismatched totals and wrong line items never create entitlements', async () => {
  for (const kind of ['amount', 'line-item']) {
    const f = fixture();
    if (kind === 'amount') f.session.amount_subtotal = 1; else f.price.id = 'price_wrong';
    await assert.rejects(f.store().webhook(f.event()), { status: 403 }); assert.equal(f.state.orders.size, 0);
  }
});
test('download verifies the token and redirects only to a short-lived private ZIP', async () => {
  const f = fixture(); await f.store().webhook(f.event());
  const request = f.downloadRequest(await f.store().order(f.order));
  const result = await f.store().download(request);
  assert.equal(result.status, 302); assert(result.headers.Location.startsWith('https://private.example.test/'));
  const delivered = f.state.calls.at(-1); assert.equal(delivered.expiry, NOW + 900);
  assert.equal(delivered.blobName, f.env.STORE_BUDGET_BLOB_NAME);
  for (const change of [{ token: '0'.repeat(64) }, { token: 'bad' }, { expires: NOW + 99999999 }]) {
    await assert.rejects(f.store().download({ query: { ...request.query, ...change } }), { status: 403 });
  }
});
test('expired download links are rejected', async () => {
  const f = fixture(); await f.store().webhook(f.event()); const request = f.downloadRequest(await f.store().order(f.order));
  f.state.time += 7 * 86400; await assert.rejects(f.store().download(request), { status: 410 });
});
test('refunds, disputes and payment reversals revoke access on the next check', async () => {
  for (const change of [{ refunded: true }, { amount_refunded: 100 }, { disputed: true }]) {
    const f = fixture(); await f.store().webhook(f.event()); const request = f.downloadRequest(await f.store().order(f.order));
    Object.assign(f.session.payment_intent.latest_charge, change);
    await assert.rejects(f.store().order(f.order), { status: 403 }); await assert.rejects(f.store().download(request), { status: 403 });
  }
});
test('both products deliver only their purchased archive', async () => {
  for (const sku of Object.keys(PRODUCTS)) {
    const f = fixture(sku); await f.store().webhook(f.event());
    await f.store().download(f.downloadRequest(await f.store().order(f.order)));
    assert.equal(f.state.calls.at(-1).filename, PRODUCTS[sku].filename);
  }
});
test('closing new purchases preserves existing paid downloads', async () => {
  const f = fixture(); await f.store().webhook(f.event()); f.env.STORE_CHECKOUT_ENABLED = 'false'; f.env.STORE_BUDGET_RELEASE_READY = 'false';
  assert.equal((await f.store().download(f.downloadRequest(await f.store().order(f.order)))).status, 302);
});
