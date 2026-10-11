// Public build-time settings only. Payment verification and file delivery belong
// to the checkout provider; this module never grants access to a paid download.
export function getProductCommerce({ releaseReady, checkoutUrl, priceUsd } = {}) {
  const price = String(priceUsd ?? '').trim();
  const validPrice = /^\d{1,6}(\.\d{1,2})?$/.test(price);
  const priceCents = validPrice ? Math.round(Number(price) * 100) : null;
  let url = null;
  try {
    const candidate = new URL(String(checkoutUrl ?? '').trim());
    if (candidate.protocol === 'https:' && !candidate.username && !candidate.password
      && !/\.(zip|xlsx?|csv|ods)(\/|$)/i.test(candidate.pathname)) {
      url = candidate.href;
    }
  } catch { /* An absent or malformed checkout keeps sales closed. */ }
  const available = releaseReady === 'true' && priceCents > 0 && url !== null;
  return {
    available,
    checkoutUrl: available ? url : null,
    priceLabel: available ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(priceCents / 100) : null,
  };
}
