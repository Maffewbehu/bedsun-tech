# Bedsun Tech digital downloads

Two one-time USD products exist in the Bedsun Tech LLC account
`acct_1UPJOmLhCHwbnAnU`. The website and API keep purchases closed by default.

| Product | Price | Stripe product | Stripe price |
| --- | ---: | --- | --- |
| Six-colorway budget bundle | $9 | `bedsun_simple_budget_debt_v1` | `price_1UPJuALhCHwbnAnUXVCL60NB` |
| Sales & Expenses Dashboard | $29 | `bedsun_sales_expenses_dashboard_v1` | `price_1UPJuNLhCHwbnAnU360ZVFd7` |

Customer support and download-email replies use `bedsun.tech@gmail.com`.
Stripe's own public support email must be updated in Dashboard → Settings →
Business → Public details; the connected tool doesn't expose this setting.

## Runtime settings

Use `api/store-settings.example.json` as the list of Azure Static Web App
**server application settings**, not as a public file or Vite configuration.
This repository configures the managed API to use Node 22. The pinned Stripe
23 SDK uses its current default API version, `2026-09-30.endive`.

- Use a **restricted Stripe API key** for this account. Grant the narrow
  permissions needed to read the current account, products/prices, Checkout
  Sessions/line items, PaymentIntents/charges, and create Checkout Sessions.
- Register `https://bedsuntech.tech/api/store/webhook` for
  `checkout.session.completed` and `checkout.session.async_payment_succeeded`.
  Put its signing secret in `STRIPE_WEBHOOK_SECRET`.
- Supply `RESEND_API_KEY` and a `STORE_FROM_EMAIL` address on a **verified
  sending domain**. The Gmail support address is Reply-To, not a Resend sender.
  The onboarding sender cannot deliver to arbitrary buyers.
- Generate a persistent download-signing secret with at least 32 random bytes.
  For example, `node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"`.
  Store it only in the server settings. Rotating it invalidates existing links.
- Supply a private Azure Blob Storage connection and two existing private
  containers: one for releases and one for durable orders. Keep both containers'
  public access disabled. No ZIP is shipped in the website repository/build.
- Keep `STORE_CHECKOUT_ENABLED` and both `STORE_*_RELEASE_READY` settings false
  until the checks below pass. Missing configuration fails closed.

## Upload approved release files

The budget ZIP contains the six approved `(2)` workbooks, preserving their
original bytes while giving them clean filenames in the archive, plus a
START-HERE text file. The Power BI ZIP is the already-approved Desktop export,
sample workbook, buyer guide and quick-start file.

With the storage settings loaded into the local process environment, run:

```sh
node api/scripts/upload-releases.cjs /absolute/path/BUDGET.zip /absolute/path/DASHBOARD.zip
```

The script verifies private access and uses conditional uploads to prevent
overwriting a different release. Record its SHA-256 values. It does not create
resources or change container permissions.

## Payment and delivery behavior

The product page posts only its SKU and a random request ID to
`/api/store/checkout`. The server validates the account, release gate, price,
currency, file availability and private storage, then redirects to Stripe's
hosted Checkout. Checkout uses the server price; client amounts and URLs are
ignored. Dynamic payment methods remain enabled.

A signed webhook in the expected live/test environment must identify this
store and a **paid** session. The server retrieves its line items and payment
again, then creates an order in private storage using an atomic create. A
60-second Azure blob lease serializes delivery. Email uses a session-based
Resend idempotency key and a persistent sent marker, so completed/async-success
replays don't normally send another email. A process crash after provider
acceptance but before persisting the marker can still cause a duplicate after
Resend's 24-hour idempotency retention; fulfillment itself remains idempotent.

`/purchase-complete` polls the order endpoint. It cannot create entitlements.
The receipt is excluded from the sitemap and uses noindex and no-referrer.
It returns no buyer email or payment details. Its unguessable Checkout Session
reference acts as a bearer purchase reference; do not share the receipt URL.

Download links are signed for seven days. Each use rechecks Stripe payment and
refund/dispute status, then grants a read-only HTTPS blob URL for at most
15 minutes. Refunds and disputes prevent new download URLs; an already-issued
blob URL can remain valid until its short expiry. Closing new sales preserves
already-paid downloads.

Email/storage errors return a retryable webhook failure. Stripe must retry;
monitor delivery failures and resend the event from Workbench after correcting
configuration. The handler requires the **original raw request body** and never
reconstructs it from parsed JSON.

## Before launch

1. Use a separate Stripe sandbox, separate private containers and sandbox keys.
   Set `STRIPE_LIVEMODE=false` and supply that sandbox's account/product/price
   IDs. Keep production releases closed throughout testing.
2. Exercise successful, declined and canceled purchases for each product.
   Confirm delayed payments don't deliver until async success. Verify webhook
   signing on the actual Azure runtime, email receipt, correct ZIP, expired or
   tampered link rejection, refund revocation, and duplicate event handling.
3. The Power BI demo has been refreshed in Desktop. Still verify a refresh
   using a buyer-style local Excel **DataFilePath** before releasing it.
   The budget copy accurately says only LibreOffice Calc is verified; do not
   claim Microsoft Excel/Google Sheets testing until completed.
4. Configure live credentials and private release files. Review tax settings
   for the business; automatic tax is not silently enabled by this integration.
   If enabling Stripe Tax, verify active registrations first.
5. Enable each server release flag and `STORE_CHECKOUT_ENABLED` only after its
   checks pass. Configure the matching `VITE_*_RELEASE_READY=true`, price and
   `/api/store/checkout` values in the Azure **build environment**, then rebuild.
   The frontend and server release gates are independent.

## Checks completed locally

```sh
npm run test:store
npm run build
npm run test:products
npm run test:hydration
```

The 20 store tests use Stripe's real signature verifier with synthetic events
and mocked payment/storage/email boundaries. They don't charge cards, send
emails or prove that live Azure/Stripe/Resend configuration is working.
