# Bedsun Tech website

React 19 + Vite site deployed through Azure Static Web Apps. The contact form and AI consultant use the existing `/api/contact` and `/api/ai-consultant` functions.

## Development

```sh
npm ci
npm run dev
```

## Production build and checks

```sh
npm run build
npm run test:products
npm run test:hydration
npm run test:contact
npm run test:analytics
npm --prefix api test
```

The build creates the browser bundle, renders every public route to HTML, generates the sitemap and Azure route rules, and verifies page metadata, internal links, image references, and the 404 configuration. `dist-ssr` is a temporary server rendering bundle; only `dist` is deployed. No server rendering process is needed in production.

The hydration check runs the production bundle in a DOM test environment. It checks every rendered page, client-side metadata updates, navigation menu behavior and focus, assistant controls, workbook preview selectors, and product inquiry context. Contact checks exercise service-prefilled home/business forms, email and callback requests, and success/failure feedback. Analytics checks cover purchase verification, deduplication, and URL privacy. API checks cover contact delivery and the existing store. Network calls are stubbed so checks do not submit real leads, call the live assistant, or make payments. These checks do not replace visual testing on a phone.

## Digital products

The product catalog is at `/products`, with the workbook bundle at `/products/simple-budget-debt`. The current catalog uses the native Stripe checkout at `/api/store/checkout`; release readiness and approved prices are also verified by the server. See [the digital products launch guide](docs/digital-products-launch.md) for configuration, compatibility status, and paid-download delivery requirements, and [conversion tracking](docs/conversion-tracking.md) for event meanings and external GA4 verification. `test:products` verifies the checkout gate and that spreadsheet/archive files stay out of public output.

## Service inquiries

Service pages use `buildInquiryPath` from `src/lib/inquiry.js` to preselect the matching service on `/contact`. The form also accepts `?audience=personal|business` and the existing product inquiry links. Visitors can request an email or phone reply; optional scope details are kept in a disclosure. The contact API continues accepting the previous email-based payload. The frontend records a lead event only after the API confirms that the email provider accepted the request.

The Opportunity Scan is quote-based: scope, fee, review length, and delivery date are agreed before work begins. Selected project examples come from the existing portfolio and Bedsun Tech's own products; dashboard screenshots use fictional demo data.

## Adding a page

1. Add the component in `src/pages` with a single `SEO` component and page heading.
2. Register its path and component in `src/routes.js`.
3. Add a visible link where appropriate and run the build and hydration checks.

`src/routes.js` supplies the client router, prerendered pages, sitemap, and Azure route rules. Do not add a separate homepage canonical or description to `index.html`: it holds only global metadata and the build placeholders. Each route supplies its own metadata through `SEO`.

`public/staticwebapp.config.json` supplies common API access rules, response overrides, and headers. The build adds one exact rewrite per public page; Azure treats folder paths and trailing-slash/index aliases as equivalent, so separate alias rules must not be added. There is deliberately no catch-all homepage fallback: unmatched URLs return the generated 404 page with HTTP 404 and `noindex`.

## Images

The header uses a 120px WebP logo with PNG fallback, displayed at 40px. Dedicated 32px and 180px icons serve browser and Apple touch use. The existing public logo and email image URLs remain available.
