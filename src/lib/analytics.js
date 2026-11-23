const MEASUREMENT_ID = 'G-H88JVPQ2KQ';
const PURCHASE_SESSION = /^cs_(live|test)_[A-Za-z0-9]{8,240}$/;
const TRANSACTION_ID = /^bt_[a-f0-9]{64}$/;
const PRODUCT_NAMES = {
  'simple-budget-debt': 'Simple Budget + Debt',
  'sales-expenses-dashboard': 'Sales & Expenses Dashboard',
};
const sentPurchases = new Set();
let lastPageLocation;

// Never send bearer purchase references or contact form query strings to GA.
export function analyticsUrl(value, { campaigns = false } = {}) {
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol)) return '';
    const clean = new URL(url.origin + url.pathname);
    if (campaigns) {
      for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
        const label = url.searchParams.get(key);
        if (label && /^[a-z][a-z0-9 _.-]{0,79}$/i.test(label) && !/\d{7}|cs_(live|test)_/i.test(label)) {
          clean.searchParams.set(key, label);
        }
      }
    }
    return clean.href;
  } catch { return ''; }
}

function pageContext() {
  return {
    page_location: analyticsUrl(window.location.href, { campaigns: true }),
    page_referrer: analyticsUrl(document.referrer),
  };
}

export function purchaseSessionReference() {
  if (typeof window === 'undefined') return null;
  const reference = window.__bedsunPurchaseSession || window.history.state?.bedsunPurchaseSession;
  return PURCHASE_SESSION.test(reference || '') ? reference : null;
}

// Run before the router and Google's script. History state preserves the
// purchase on refresh/back without putting its bearer reference into GA URLs.
export function initializeAnalytics() {
  if (typeof window === 'undefined' || window.__bedsunAnalyticsInitialized) return;
  window.__bedsunAnalyticsInitialized = true;
  let urlIsSafe = true;
  try {
    const url = new URL(window.location.href);
    if (/^\/purchase-complete(?:\/index\.html)?\/?$/.test(url.pathname) && url.searchParams.has('session_id')) {
      const reference = url.searchParams.get('session_id');
      if (PURCHASE_SESSION.test(reference || '')) window.__bedsunPurchaseSession = reference;
      url.searchParams.delete('session_id');
      const state = { ...window.history.state, bedsunPurchaseSession: window.__bedsunPurchaseSession || null };
      window.history.replaceState(state, '', url.pathname + url.search + url.hash);
    }
  } catch {
    // Payment checking still uses the in-memory reference or query string.
    urlIsSafe = false;
  }
  if (!urlIsSafe || !['bedsuntech.tech', 'www.bedsuntech.tech'].includes(window.location.hostname)) return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    // Enable only after disabling GA4 Enhanced Measurement history pageviews.
    window.__bedsunManualPageviews = import.meta.env?.VITE_GA_MANUAL_PAGEVIEWS === 'true';
    window.gtag('set', pageContext());
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID, { send_page_view: !window.__bedsunManualPageviews });
    const script = document.createElement('script');
    script.async = true;
    script.referrerPolicy = 'no-referrer';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
  } catch { /* Analytics must never block rendering or downloads. */ }
}

export function trackAnalyticsEvent(eventName, parameters = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return false;
  try {
    window.gtag('event', eventName, { ...parameters, ...pageContext() });
    return true;
  } catch { return false; }
}

export function trackAnalyticsPage() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  try {
    const context = pageContext();
    if (lastPageLocation === context.page_location) return;
    const page_referrer = lastPageLocation || context.page_referrer;
    window.gtag('set', { ...context, page_referrer });
    if (window.__bedsunManualPageviews) {
      window.gtag('event', 'page_view', { ...context, page_referrer, page_title: document.title });
    }
    lastPageLocation = context.page_location;
  } catch { /* Keep navigation independent from analytics. */ }
}

function commerceParameters(purchase) {
  if (purchase?.live !== true || purchase.currency !== 'USD' || !Number.isFinite(purchase.value) || purchase.value <= 0) return null;
  const item = purchase.items?.[0];
  if (purchase.items?.length !== 1 || !Object.hasOwn(PRODUCT_NAMES, item?.item_id) || item.quantity !== 1 || item.price !== purchase.value) return null;
  return {
    currency: 'USD', value: purchase.value,
    items: [{ item_id: item.item_id, item_name: PRODUCT_NAMES[item.item_id], price: item.price, quantity: 1 }],
  };
}

export function trackCheckoutStarted(checkout) {
  const parameters = commerceParameters(checkout);
  return parameters ? trackAnalyticsEvent('begin_checkout', parameters) : false;
}

export function trackVerifiedPurchase(purchase) {
  const parameters = commerceParameters(purchase);
  if (!parameters || !TRANSACTION_ID.test(purchase.transaction_id || '')) return false;
  const id = purchase.transaction_id;
  if (sentPurchases.has(id)) return false;
  const key = `bedsun:purchase:${id}`;
  try { if (window.localStorage.getItem(key) === 'sent') return false; } catch { /* Storage can be denied. */ }
  const sent = trackAnalyticsEvent('purchase', {
    ...parameters, transaction_id: id,
    ...(Number.isFinite(purchase.tax) && purchase.tax >= 0 ? { tax: purchase.tax } : {}),
  });
  if (sent) {
    sentPurchases.add(id);
    try { window.localStorage.setItem(key, 'sent'); } catch { /* GA also deduplicates transaction_id. */ }
  }
  return sent;
}
