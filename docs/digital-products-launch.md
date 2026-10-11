# Digital products: Simple Budget + Debt

## Prepared in this change

- Catalog at `/products` and workbook page at `/products/simple-budget-debt`.
- Homepage, desktop/mobile navigation, and footer links.
- Eighteen lossless WebP previews: six colorways × three worksheets, taken from the approved workbook screenshots. Preview values are fictional examples.
- Product inquiries use the existing contact form with the workbook subject and service type prefilled. No message is sent until the visitor submits the form.
- Prerendered pages, unique metadata, FAQ structured data, sitemap entries, and exact Azure route rules use the existing build pipeline.
- Sales default to **Coming soon**. No paid workbook or ZIP is included in this public repository or build.

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

Set the same **public** values in the Azure build environment (the workflow's `build_and_deploy_job` environment) and rebuild. Setting runtime API variables alone will not change a Vite build. Leave the release flag false while fulfillment is unfinished. The gate checks configuration syntax; it cannot verify an external provider's payment or delivery behavior.

Do not set any price until it has been approved. Never put API keys, webhook secrets, private file links, or workbook contents in `VITE_*` settings. A checkout URL is public. Provider credentials belong to the provider/server environment.

## Validation

```sh
npm ci
npm run build
npm run test:products
npm run test:hydration
```

`test:products` checks that missing/invalid settings keep sales closed, valid settings produce the expected price/link, every colorway/worksheet preview exists, both product routes are built, and paid spreadsheet/archive files have not entered the public output. Hydration checks exercise the gallery and product inquiry flow without submitting a message or payment.

The existing Azure Static Web Apps workflow deploys pull requests to a preview environment and deploys `main` on push. This change is prepared as a draft PR; it does not change the production branch.
