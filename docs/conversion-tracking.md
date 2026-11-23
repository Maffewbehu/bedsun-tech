# Website conversion measurement

The website measures service inquiries separately from digital product sales.

| Event | Meaning |
| --- | --- |
| `contact_click` | A visitor selected a phone/email contact action. This is not a completed conversation. |
| `generate_lead` | The contact API confirmed provider acceptance of the inquiry, or the AI API confirmed sending its lead email. This does not confirm inbox delivery. The AI conversation is counted once. |
| `digital_product_checkout_click` | A visitor selected a purchase button. |
| `begin_checkout` | The store returned a valid hosted Stripe Checkout destination and live-mode product details. |
| `purchase` | The order API found a webhook-created order and reverified the live payment, product, amount, charge, and access eligibility. |
| `digital_product_download_click` | A paid buyer selected the download link. This does not prove a completed file download. |

Purchase values come from the server's verified product data. Tax, when Stripe supplies it, is a separate value. Test-mode checkouts and orders do not send `begin_checkout` or `purchase`. Purchase events use a stable HMAC-derived transaction identifier, not the Checkout session ID. Local storage suppresses repeat purchase events, with an in-memory fallback and GA's transaction-ID deduplication as additional protection.

The checkout reference is removed from the purchase-confirmation URL before Google's script loads. It stays on the browser's history entry so refreshing the page still finds the purchase. If browser history cannot be updated, payment checking still works and analytics does not load on that sensitive URL. Explicit events omit personal information, form contents, private download links, and bearer payment references. Explicit event page locations/referrers omit query strings except validated campaign labels.

## GA4 configuration and validation

The existing automatic pageview mode remains the default. Setting `send_page_view: false` alone does **not** disable Enhanced Measurement's history pageviews. Only set `VITE_GA_MANUAL_PAGEVIEWS=true` after disabling **Page changes based on browser history events** in the property's web-stream settings. Until then, the router updates the sanitized page context without adding duplicate manual pageviews. Production analytics loads only on `bedsuntech.tech` and `www.bedsuntech.tech`.

After deployment, use GA4 DebugView/Realtime to confirm events reach the intended property, then verify `generate_lead` is configured as a key event. Report service source/category separately from product revenue. Private GA4 settings and live reporting have not been changed or verified by the repository checks.

These browser-side events can be blocked by browser privacy tools or lost if a buyer never returns from checkout. Stripe and the durable order records remain the sales source of truth. Confirming booked jobs, qualified opportunities, refunds, and revenue from service work requires recording those outcomes in the business's operating records; this change does not infer them from website clicks.

## Local checks

`node scripts/check-analytics.mjs` verifies live/paid data handling, transaction deduplication, URL privacy, purchase recovery after refresh, and failure isolation. `node --test api/test/store.test.cjs` verifies server payment/fulfillment behavior, trusted analytics data, and test-mode flags without real payments, emails, or downloads.

Official references:

- [GA4 recommended ecommerce events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [GA4 pageview and Enhanced Measurement configuration](https://developers.google.com/analytics/devguides/collection/ga4/views)
- [GA4 ecommerce validation and transaction deduplication](https://developers.google.com/analytics/devguides/collection/ga4/validate-ecommerce)
