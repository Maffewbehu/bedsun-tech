# Digital products: launch and delivery

The native Stripe checkout and private-download implementation is documented in
[stripe-store-setup.md](stripe-store-setup.md), including the created product
IDs, introductory $9/$29 prices, credentials, storage, and testing steps.
Purchases remain closed until the server and frontend release gates are enabled.

## Prepared in this change

- Catalog at `/products` and workbook page at `/products/simple-budget-debt`.
- Homepage, desktop/mobile navigation, and footer links.
- Eighteen lossless WebP previews: six colorways × three worksheets, taken from the approved workbook screenshots. Preview values are fictional examples.
- Product inquiries use the existing contact form with the workbook subject and service type prefilled. No message is sent until the visitor submits the form.
- Prerendered pages, unique metadata, FAQ structured data, sitemap entries, and exact Azure route rules use the existing build pipeline.
- Sales default to **Coming soon**. No paid workbook or ZIP is included in this public repository or build.

## Power BI dashboard

- Catalog, homepage card, and product page at `/products/sales-expenses-dashboard`.
- Three unchanged Power BI Desktop screenshots show the approved Overview, Sales, and Operating Expenses report pages. A CSS viewport hides the Desktop chrome in the gallery; full-size links open the originals. All preview data is fictional and in USD.
- Dashboard inquiries prefill the existing contact form with the dashboard name and a Power BI service type. Opening an inquiry does not send a message.
- Buyer package: `Bedsun-Tech-Sales-and-Expenses-Dashboard-v1.0.zip`, containing the `.pbit` template, sample `.xlsx` workbook, three-page buyer-guide PDF, and `START-HERE.txt`.
- The buyer package has been validated separately. The template was opened/refreshed in Power BI Desktop; all three report pages and totals were checked, and a new template was reopened with `DataFilePath` blank to verify demo loading. The saved export starts with year/month selections cleared.
- The finished ZIP stays outside the public repository/build. Use this exact package for confirmed-payment delivery when checkout is configured. SHA-256 of its native `.pbit`: `14b03596adb59dc82a2d234d2a1ed2656255342c311b66a0f2a50b4863f998bf`.
- Windows Power BI Desktop is required. The source connection reads the named Sales/Expenses tables from a local Excel workbook; cloud refresh, live accounting feeds, and overhead allocation by service are not included.
- Verify a refresh with a buyer-style local workbook before enabling purchases. The embedded demo is confirmed; no claim of a separately completed end-to-end buyer workbook path test is made.

The same hosted checkout and fulfillment requirements below apply to both products. Their checkout settings are independent, so launching one does not enable the other.

## Finish before enabling purchases

1. Set the final USD price and make sure the checkout price matches it. All six colorways belong to one bundle; the preview selector does not choose a separately priced item.
2. Finish compatibility testing in the spreadsheet apps you intend to advertise. Only LibreOffice Calc has been verified so far. Update `budgetFaqs` in `src/data/digitalProducts.js` when additional checks pass.
3. Configure a hosted checkout with fulfillment after a confirmed payment. Upload the approved release ZIP to private storage or a delivery service, outside this repository. Do not use a public blob, a file under `public/`, or a client-only success-page check to deliver a paid file.
4. Test successful, declined, and canceled purchases; confirmation email; download access after payment; and your chosen refund/support process. If using a custom payment integration, verify signed payment events server-side before issuing download access. Keep all private keys in server-side settings.
5. Review product copy, support/license terms, final price, and real desktop/mobile previews. Run the checks below. Merge only after reviewing the Azure PR preview.

## Public checkout configuration

Copy `.env.example` to `.env.local` for local checks. The following build-time values enable the purchase link only when all are valid:

| Setting | Required value |
| --- | --- |
| `VITE_BUDGET_RELEASE_READY` | Exact string `true`, after the release checks above pass |
| `VITE_BUDGET_PRICE_USD` | Positive USD amount, with no more than two decimal places |
| `VITE_BUDGET_CHECKOUT_URL` | HTTPS hosted checkout URL, without embedded credentials or a direct workbook/archive path |
| `VITE_DASHBOARD_RELEASE_READY` | Exact string `true`, after dashboard release and fulfillment checks pass |
| `VITE_DASHBOARD_PRICE_USD` | Approved positive USD amount, with no more than two decimal places |
| `VITE_DASHBOARD_CHECKOUT_URL` | HTTPS hosted checkout URL, without embedded credentials or a direct Power BI/workbook/archive path |

Set the same **public** values in the Azure build environment (the workflow's `build_and_deploy_job` environment) and rebuild. Setting runtime API variables alone will not change a Vite build. Leave the release flag false while fulfillment is unfinished. The gate checks configuration syntax; it cannot verify an external provider's payment or delivery behavior.

The initial $9/$29 prices are configured in Stripe. Never put API keys, webhook secrets, private file links, or workbook contents in `VITE_*` settings. A checkout URL is public. Provider credentials belong to the provider/server environment. The exact relative path `/api/store/checkout` is also accepted for the native store; its server independently verifies prices and release readiness.

## Validation

```sh
npm ci
npm run build
npm run test:products
npm run test:hydration
```

`test:products` checks that missing/invalid settings keep sales closed, valid settings produce the expected price/link, all 18 workbook and three dashboard previews exist, all product routes are built, and paid spreadsheet/Power BI/archive files have not entered the public output. Hydration checks exercise both galleries and product inquiry flows without submitting a message or payment.

The existing Azure Static Web Apps workflow deploys pull requests to a preview environment and deploys `main` on push. Review the preview and run the checks before merging catalog changes. Catalog publication does not enable purchases unless the relevant release, price, and checkout settings are configured.
