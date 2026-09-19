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
npm run test:hydration
```

The build creates the browser bundle, renders every public route to HTML, generates the sitemap and Azure route rules, and verifies page metadata, internal links, image references, and the 404 configuration. `dist-ssr` is a temporary server rendering bundle; only `dist` is deployed. No server rendering process is needed in production.

The hydration check runs the production bundle in a DOM test environment. It checks every rendered page, client-side metadata updates, navigation menu behavior and focus, and assistant controls. Network calls are stubbed so checks do not submit leads or call the live assistant. These checks do not replace visual testing on a phone.

## Adding a page

1. Add the component in `src/pages` with a single `SEO` component and page heading.
2. Register its path and component in `src/routes.js`.
3. Add a visible link where appropriate and run the build and hydration checks.

`src/routes.js` supplies the client router, prerendered pages, sitemap, and Azure route rules. Do not add a separate homepage canonical or description to `index.html`: it holds only global metadata and the build placeholders. Each route supplies its own metadata through `SEO`.

`public/staticwebapp.config.json` supplies common API access rules, response overrides, and headers. The build adds one exact rewrite per public page; Azure treats folder paths and trailing-slash/index aliases as equivalent, so separate alias rules must not be added. There is deliberately no catch-all homepage fallback: unmatched URLs return the generated 404 page with HTTP 404 and `noindex`.

## Images

The header uses a 120px WebP logo with PNG fallback, displayed at 40px. Dedicated 32px and 180px icons serve browser and Apple touch use. The existing public logo and email image URLs remain available.
