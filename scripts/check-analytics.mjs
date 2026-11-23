import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import {
  analyticsUrl, initializeAnalytics, purchaseSessionReference,
  trackAnalyticsEvent, trackAnalyticsPage, trackCheckoutStarted, trackVerifiedPurchase,
} from '../src/lib/analytics.js';

const ID = 'cs_live_fixturepurchase123456';
function browser(url, state) {
  const dom = new JSDOM('<!doctype html><html><head><title>Test</title></head><body></body></html>', {
    url, referrer: 'https://bedsuntech.tech/contact?email=customer%40example.test&token=secret',
  });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  if (state) window.history.replaceState(state, '', url);
  return dom;
}
const payload = {
  live: true, transaction_id: 'bt_' + 'a'.repeat(64), currency: 'USD', value: 9, tax: 0,
  items: [{ item_id: 'simple-budget-debt', item_name: 'Simple Budget + Debt', price: 9, quantity: 1 }],
};

assert.equal(analyticsUrl('https://bedsuntech.tech/purchase-complete?session_id=secret#private'), 'https://bedsuntech.tech/purchase-complete');
assert.equal(analyticsUrl('https://bedsuntech.tech/products?utm_source=pinterest&utm_medium=social&email=me%40example.test', { campaigns: true }), 'https://bedsuntech.tech/products?utm_source=pinterest&utm_medium=social');
assert.equal(analyticsUrl('https://bedsuntech.tech/?utm_campaign=me%40example.test&utm_content=7022195011', { campaigns: true }), 'https://bedsuntech.tech/');

const first = browser(`https://bedsuntech.tech/purchase-complete?session_id=${ID}`);
initializeAnalytics();
assert.equal(window.location.search, '');
assert.equal(purchaseSessionReference(), ID);
const historyState = window.history.state;
const tag = document.querySelector('script[src*="googletagmanager"]');
assert(tag, 'Production initializes GA after cleaning the return URL');
assert.equal(tag.referrerPolicy, 'no-referrer');
assert(!JSON.stringify(window.dataLayer).includes(ID));
assert(!JSON.stringify(window.dataLayer).includes('customer'));
initializeAnalytics();
assert.equal(document.querySelectorAll('script[src*="googletagmanager"]').length, 1);
const events = [];
window.gtag = (...args) => events.push(args);
trackAnalyticsPage();
assert.equal(events.filter(args => args[1] === 'page_view').length, 0, 'Default retains automatic history collection without duplicate manual pageviews');
assert.equal(trackCheckoutStarted({ ...payload, live: false }), false);
assert.equal(trackCheckoutStarted(payload), true);
assert.equal(trackVerifiedPurchase({ ...payload, live: false }), false);
assert.equal(trackVerifiedPurchase({ ...payload, transaction_id: ID }), false);
assert.equal(trackVerifiedPurchase({ ...payload, value: 0 }), false);
assert.equal(trackVerifiedPurchase(payload), true);
assert.equal(trackVerifiedPurchase(payload), false);
assert.equal(events.filter(args => args[1] === 'purchase').length, 1);
assert(!JSON.stringify(events).includes(ID));
assert(!JSON.stringify(events).includes('customer'));
assert(!JSON.stringify(events).includes('secret'));
const persistedKey = `bedsun:purchase:${'bt_' + 'b'.repeat(64)}`;
window.localStorage.setItem(persistedKey, 'sent');
assert.equal(trackVerifiedPurchase({ ...payload, transaction_id: 'bt_' + 'b'.repeat(64) }), false, 'Persisted IDs prevent repeat events after reload');
Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage denied'); } });
assert.equal(trackVerifiedPurchase({ ...payload, transaction_id: 'bt_' + 'c'.repeat(64) }), true);
window.gtag = () => { throw new Error('Analytics blocked'); };
assert.equal(trackAnalyticsEvent('generate_lead', { lead_source: 'contact_form' }), false);
first.window.close();

const reload = browser('https://bedsuntech.tech/purchase-complete', historyState);
assert.equal(purchaseSessionReference(), ID, 'The same history entry can restore its purchase after refresh');
reload.window.close();

const preview = browser(`http://localhost:5173/purchase-complete?session_id=${ID}`);
initializeAnalytics();
assert.equal(purchaseSessionReference(), ID);
assert.equal(window.location.search, '');
assert.equal(document.querySelector('script[src*="googletagmanager"]'), null, 'Previews must not send traffic into production analytics');
preview.window.close();

const denied = browser(`https://bedsuntech.tech/purchase-complete?session_id=${ID}`);
window.history.replaceState = () => { throw new Error('History update denied'); };
initializeAnalytics();
assert.equal(purchaseSessionReference(), ID, 'Payment checking survives unavailable history/storage');
assert.equal(document.querySelector('script[src*="googletagmanager"]'), null, 'Never load analytics while the bearer reference remains in the URL');
denied.window.close();
delete globalThis.window;
delete globalThis.document;
console.log('Analytics checks passed: paid/live gates, trusted items, deduplication, URL privacy, reload recovery, and blocked tracking/storage.');
