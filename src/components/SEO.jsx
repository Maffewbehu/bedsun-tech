import { Helmet } from 'react-helmet-async';
import { localBusinessSchema, websiteSchema } from '../lib/structuredData';

const DEFAULT_TITLE = 'Bedsun Tech | Websites, Automation & IT Support in Las Vegas';

const DEFAULT_DESCRIPTION =
  'Bedsun Tech helps homes and small businesses with websites, automation, custom business tools, IT support, Wi-Fi, Microsoft 365, cameras, and practical technology systems in the Las Vegas area.';

const DEFAULT_IMAGE = 'https://bedsuntech.tech/BT_logo.png';
const SITE_URL = 'https://bedsuntech.tech';

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  structuredData = [],
}) {
  const canonicalUrl = `${SITE_URL}${path}`;
  const pageStructuredData = Array.isArray(structuredData)
    ? structuredData
    : [structuredData];
  const structuredDataItems = [localBusinessSchema, websiteSchema, ...pageStructuredData];

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Bedsun Tech" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {structuredDataItems.filter(Boolean).map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}