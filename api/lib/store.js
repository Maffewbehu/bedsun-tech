const crypto = require('node:crypto');

const PRODUCTS = {
  'simple-budget-debt': {
    name: 'Simple Budget + Debt — Six-Colorway Bundle', prefix: 'BUDGET', cents: 900,
    productId: 'bedsun_simple_budget_debt_v1',
    filename: 'Bedsun-Tech-Simple-Budget-and-Debt-v1.0.zip',
  },
  'sales-expenses-dashboard': {
    name: 'Small Business Sales & Expenses Dashboard', prefix: 'DASHBOARD', cents: 2900,
    productId: 'bedsun_sales_expenses_dashboard_v1',
    filename: 'Bedsun-Tech-Sales-and-Expenses-Dashboard-v1.0.zip',
  },
};
const SESSION_ID = /^cs_(live|test)_[A-Za-z0-9]{8,240}$/;
const REQUEST_ID = /^[a-f0-9-]{36}$/i;
const SUPPORT_EMAIL = 'bedsun.tech@gmail.com';
const HEADERS = { 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer', 'X-Content-Type-Options': 'nosniff' };

class StoreError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
function requireSetting(env, key) {
  if (!env[key]) throw new StoreError(503, 'Purchases are not available yet.');
  return env[key];
}
function config(env) {
  const origin = new URL(requireSetting(env, 'STORE_SITE_ORIGIN')).origin;
  if (origin !== 'https://bedsuntech.tech' && !(env.STRIPE_LIVEMODE === 'false' && /^http:\/\/localhost:\d+$/.test(origin))) {
    throw new StoreError(503, 'Purchases are not available yet.');
  }
  if (!['true', 'false'].includes(env.STRIPE_LIVEMODE)) throw new StoreError(503, 'Purchases are not available yet.');
  const secret = requireSetting(env, 'STORE_DOWNLOAD_SIGNING_SECRET');
  if (Buffer.byteLength(secret) < 32) throw new StoreError(503, 'Purchases are not available yet.');
  return { origin, secret, live: env.STRIPE_LIVEMODE === 'true' };
}
function productFor(env, sku) {
  if (!Object.hasOwn(PRODUCTS, sku)) throw new StoreError(400, 'Unknown product.');
  const product = PRODUCTS[sku];
  return {
    ...product, sku,
    priceId: requireSetting(env, `STORE_${product.prefix}_PRICE_ID`),
    productId: env[`STORE_${product.prefix}_PRODUCT_ID`] || product.productId,
    blobName: requireSetting(env, `STORE_${product.prefix}_BLOB_NAME`),
    ready: env[`STORE_${product.prefix}_RELEASE_READY`] === 'true',
  };
}
function validateSessionId(id) {
  if (typeof id !== 'string' || !SESSION_ID.test(id)) throw new StoreError(400, 'Invalid purchase reference.');
  return id;
}
function tokenFor(cfg, order) {
  return crypto.createHmac('sha256', cfg.secret).update(`${order.sessionId}:${order.expiresAt}`).digest('hex');
}
function downloadPath(cfg, order) {
  return `/api/store/download?session_id=${encodeURIComponent(order.sessionId)}&expires=${order.expiresAt}&token=${tokenFor(cfg, order)}`;
}
function verifyToken(cfg, order, query, now) {
  const token = String(query.token || '');
  if (String(query.expires) !== String(order.expiresAt) || !/^[a-f0-9]{64}$/.test(token)
    || !crypto.timingSafeEqual(Buffer.from(token, 'hex'), Buffer.from(tokenFor(cfg, order), 'hex'))) {
    throw new StoreError(403, 'This download link is invalid.');
  }
  if (order.expiresAt <= now) throw new StoreError(410, `This download link has expired. Contact ${SUPPORT_EMAIL} for help.`);
}
async function paidPurchase(stripe, cfg, id, expected) {
  const session = await stripe.checkout.sessions.retrieve(id, { expand: ['payment_intent.latest_charge'] });
  if (session.livemode !== cfg.live || session.metadata?.app !== 'bedsun-store'
    || session.metadata?.sku !== expected.sku || session.mode !== 'payment'
    || session.status !== 'complete' || session.payment_status !== 'paid'
    || session.currency !== 'usd' || session.amount_subtotal !== expected.cents
    || session.amount_total < expected.cents) throw new StoreError(403, 'Payment has not been confirmed for this product.');
  const items = await stripe.checkout.sessions.listLineItems(id, { limit: 2 });
  if (items.has_more || items.data.length !== 1 || items.data[0].quantity !== 1
    || items.data[0].price?.id !== expected.priceId || items.data[0].price?.product !== expected.productId) {
    throw new StoreError(403, 'Payment has not been confirmed for this product.');
  }
  const intent = session.payment_intent;
  const charge = intent?.latest_charge;
  if (!intent || intent.status !== 'succeeded' || !charge || typeof charge !== 'object'
    || charge.paid !== true || charge.refunded || charge.amount_refunded > 0 || charge.disputed) {
    throw new StoreError(403, 'Download access is unavailable for this payment.');
  }
  return session;
}

// Inject dependencies so payment, replay and access-control behavior can be
// tested without charging a card, emailing a customer or publishing a file.
function createStore({ env, stripe, storage, mail, now = () => Math.floor(Date.now() / 1000) }) {
  const cfg = config(env);
  return {
    async checkout(req) {
      if (env.STORE_CHECKOUT_ENABLED !== 'true') throw new StoreError(503, 'Purchases are not available yet.');
      const origin = req.headers?.origin;
      if (origin && origin !== cfg.origin) throw new StoreError(403, 'Please begin checkout from the product page.');
      const { productId, requestId } = req.body || {};
      if (!REQUEST_ID.test(requestId || '')) throw new StoreError(400, 'Invalid checkout request.');
      const product = productFor(env, productId);
      if (!product.ready) throw new StoreError(503, 'This product is not available yet.');
      requireSetting(env, 'RESEND_API_KEY');
      requireSetting(env, 'STORE_FROM_EMAIL');
      requireSetting(env, 'STRIPE_WEBHOOK_SECRET');
      const account = await stripe.accounts.retrieve();
      if (account.id !== requireSetting(env, 'STRIPE_ACCOUNT_ID') || !account.charges_enabled) {
        throw new StoreError(503, 'Purchases are not available yet.');
      }
      const price = await stripe.prices.retrieve(product.priceId);
      if (!price.active || price.livemode !== cfg.live || price.type !== 'one_time' || price.currency !== 'usd'
        || price.unit_amount !== product.cents || price.product !== product.productId) {
        throw new StoreError(503, 'Purchases are not available yet.');
      }
      await storage.assertPrivate();
      await storage.assertFile(product.blobName);
      // Stable across retries with the same request ID; eight alphabetic letters.
      const suffix = [...crypto.createHash('sha256').update(requestId).digest().subarray(0, 8)]
        .map(byte => String.fromCharCode(97 + byte % 26)).join('');
      const session = await stripe.checkout.sessions.create({
        mode: 'payment', line_items: [{ price: product.priceId, quantity: 1 }],
        success_url: `${cfg.origin}/purchase-complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${cfg.origin}/products/${product.sku}?checkout=canceled`,
        metadata: { app: 'bedsun-store', sku: product.sku, release: 'v1.0' },
        integration_identifier: `bedsun_store_${suffix}`,
      }, { idempotencyKey: `bedsun-store-${product.sku}-${requestId}` });
      const url = new URL(session.url);
      if (url.protocol !== 'https:' || url.hostname !== 'checkout.stripe.com') throw new StoreError(503, 'Unable to start checkout.');
      return { status: 200, body: { url: url.href } };
    },
    async webhook(req) {
      const raw = req.rawBody;
      if (typeof raw !== 'string' && !Buffer.isBuffer(raw)) throw new StoreError(400, 'The unmodified webhook body is required.');
      let event;
      try { event = stripe.webhooks.constructEvent(raw, req.headers?.['stripe-signature'], requireSetting(env, 'STRIPE_WEBHOOK_SECRET')); }
      catch (error) { if (error instanceof StoreError) throw error; throw new StoreError(400, 'Invalid webhook signature.'); }
      if (event.livemode !== cfg.live) throw new StoreError(400, 'Incorrect payment environment.');
      if (!['checkout.session.completed', 'checkout.session.async_payment_succeeded'].includes(event.type)) return { status: 200, body: { received: true } };
      const data = event.data.object;
      if (data.metadata?.app !== 'bedsun-store' || data.payment_status !== 'paid') return { status: 200, body: { received: true } };
      const product = productFor(env, data.metadata.sku);
      const session = await paidPurchase(stripe, cfg, validateSessionId(data.id), product);
      const email = session.customer_details?.email;
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new StoreError(503, 'Buyer email is not available yet.');
      await storage.assertPrivate();
      await storage.assertFile(product.blobName);
      await storage.ensureOrder({
        sessionId: session.id, sku: product.sku, name: product.name,
        priceId: product.priceId, productId: product.productId, cents: product.cents,
        blobName: product.blobName, filename: product.filename, email,
        createdAt: now(), expiresAt: now() + 7 * 86400, emailSentAt: null,
      });
      await storage.withOrderLease(session.id, async (order, save) => {
        if (order.emailSentAt) return;
        const link = `${cfg.origin}${downloadPath(cfg, order)}`;
        await mail.send({
          from: requireSetting(env, 'STORE_FROM_EMAIL'), to: order.email,
          reply_to: SUPPORT_EMAIL, subject: `Your Bedsun Tech download: ${order.name}`,
          text: `Thank you for purchasing ${order.name}.\n\nYour confirmed purchase: $${(order.cents / 100).toFixed(2)} USD.\n\nDownload your ZIP:\n${link}\n\nThis link expires on ${new Date(order.expiresAt * 1000).toISOString().slice(0, 10)}. Save the ZIP after downloading. For help or an expired link, contact ${SUPPORT_EMAIL}.`,
        }, `bedsun-order-${session.id}`);
        order.emailSentAt = now();
        await save(order);
      });
      return { status: 200, body: { received: true } };
    },
    async order(req) {
      const id = validateSessionId(req.query?.session_id);
      const order = await storage.readOrder(id);
      if (!order) return { status: 202, body: { status: 'processing' } };
      if (order.expiresAt <= now()) throw new StoreError(410, `This download link has expired. Contact ${SUPPORT_EMAIL} for help.`);
      await paidPurchase(stripe, cfg, id, order);
      return { status: 200, body: { status: 'ready', productName: order.name, downloadUrl: downloadPath(cfg, order), expiresAt: order.expiresAt } };
    },
    async download(req) {
      const id = validateSessionId(req.query?.session_id);
      const order = await storage.readOrder(id);
      if (!order) throw new StoreError(404, 'Download not found.');
      verifyToken(cfg, order, req.query || {}, now());
      await paidPurchase(stripe, cfg, id, order);
      await storage.assertPrivate();
      const location = await storage.fileUrl(order.blobName, order.filename, Math.min(now() + 900, order.expiresAt));
      return { status: 302, headers: { Location: location }, body: '' };
    },
  };
}

function azureStorage(env) {
  const { BlobServiceClient, BlobSASPermissions, SASProtocol } = require('@azure/storage-blob');
  const service = BlobServiceClient.fromConnectionString(requireSetting(env, 'STORE_STORAGE_CONNECTION_STRING'));
  const files = service.getContainerClient(requireSetting(env, 'STORE_FILES_CONTAINER'));
  const orders = service.getContainerClient(requireSetting(env, 'STORE_ORDERS_CONTAINER'));
  const orderBlob = id => orders.getBlockBlobClient(`${id}.json`);
  const read = async id => {
    try { return JSON.parse((await orderBlob(id).downloadToBuffer()).toString('utf8')); }
    catch (error) { if (error.statusCode === 404) return null; throw error; }
  };
  return {
    async assertPrivate() {
      for (const container of [files, orders]) {
        if ((await container.getAccessPolicy()).blobPublicAccess) throw new StoreError(503, 'Private delivery is not configured.');
      }
    },
    async assertFile(blobName) { await files.getBlobClient(blobName).getProperties(); },
    readOrder: read,
    async ensureOrder(order) {
      try { await orderBlob(order.sessionId).uploadData(Buffer.from(JSON.stringify(order)), { conditions: { ifNoneMatch: '*' }, blobHTTPHeaders: { blobContentType: 'application/json' } }); }
      catch (error) { if (![409, 412].includes(error.statusCode)) throw error; }
    },
    async withOrderLease(id, callback) {
      const blob = orderBlob(id);
      const lease = blob.getBlobLeaseClient();
      try { await lease.acquireLease(60); }
      catch (error) { if (error.statusCode === 409) throw new StoreError(503, 'Delivery is already processing. Retry the event.'); throw error; }
      try {
        const order = await read(id);
        await callback(order, value => blob.uploadData(Buffer.from(JSON.stringify(value)), { conditions: { leaseId: lease.leaseId }, blobHTTPHeaders: { blobContentType: 'application/json' } }));
      } finally { await lease.releaseLease(); }
    },
    async fileUrl(blobName, filename, expiry) {
      await files.getBlobClient(blobName).getProperties();
      return files.getBlobClient(blobName).generateSasUrl({
        permissions: BlobSASPermissions.parse('r'), protocol: SASProtocol.Https,
        startsOn: new Date(Date.now() - 60000), expiresOn: new Date(expiry * 1000),
        contentDisposition: `attachment; filename="${filename}"`, contentType: 'application/zip',
      });
    },
  };
}

function runtime(env = process.env) {
  const StripeClient = require('stripe');
  const stripe = new StripeClient(requireSetting(env, 'STRIPE_API_KEY'), { maxNetworkRetries: 2, timeout: 10000 });
  const mail = {
    async send(payload, idempotencyKey) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST', signal: AbortSignal.timeout(15000),
        headers: { Authorization: `Bearer ${requireSetting(env, 'RESEND_API_KEY')}`, 'Content-Type': 'application/json', 'Idempotency-Key': idempotencyKey },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new StoreError(503, 'Delivery email failed. Retry the event.');
    },
  };
  return createStore({ env, stripe, storage: azureStorage(env), mail });
}
function handler(action, method) {
  return async (context, req) => {
    try {
      if (req.method?.toUpperCase() !== method) throw new StoreError(405, 'Method not allowed.');
      const result = await runtime()[action](req);
      context.res = { ...result, headers: { ...HEADERS, ...result.headers } };
    } catch (error) {
      context.log.error(`Store ${action} failed`, { name: error.name, code: error.code, status: error.status || 503 });
      context.res = { status: error.status || 503, headers: HEADERS, body: { error: error instanceof StoreError ? error.message : 'The store is temporarily unavailable. Please try again.' } };
    }
  };
}
module.exports = { createStore, handler, PRODUCTS, StoreError };
