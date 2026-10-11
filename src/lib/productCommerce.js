// Public build-time settings only. The server independently gates purchases,
// validates Stripe prices and verifies payments before private file delivery.
export function getProductCommerce({ releaseReady, checkoutUrl, priceUsd } = {}) {
  const price = String(priceUsd ?? '').trim();
  const validPrice = /^\d{1,6}(\.\d{1,2})?$/.test(price);
  const priceCents = validPrice ? Math.round(Number(price) * 100) : null;
  let url = null;
  if (checkoutUrl === '/api/store/checkout') url = checkoutUrl;
  try {
    const candidate = new URL(String(checkoutUrl ?? '').trim());
    if (candidate.protocol === 'https:' && !candidate.username && !candidate.password
      && !/\.(zip|xlsx?|csv|ods|pbit|pbix|pbip)(\/|$)/i.test(candidate.pathname)) {
      url = candidate.href;
    }
  } catch { /* Only the exact store API path is accepted as a relative URL. */ }
  const available = releaseReady === 'true' && priceCents > 0 && url !== null;
  return {
    available,
    checkoutUrl: available ? url : null,
    priceLabel: available ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(priceCents / 100) : null,
  };
}
