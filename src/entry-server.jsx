import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { pageRoutes } from "./routes";

export const paths = pageRoutes.map(({ path }) => path);

export function render(path) {
  // React 19 moves the route's title, meta, and link elements into this head.
  return renderToString(
    <html lang="en">
      <head />
      <body>
        <div id="root">
          <HelmetProvider>
            <StaticRouter location={path}>
              <App />
            </StaticRouter>
          </HelmetProvider>
        </div>
      </body>
    </html>
  );
}
