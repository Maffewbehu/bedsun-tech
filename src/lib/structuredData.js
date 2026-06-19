const SITE_URL = "https://bedsuntech.tech";
const LOGO_URL = `${SITE_URL}/BT_logo.png`;
const BUSINESS_ID = `${SITE_URL}/#localbusiness`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  name: "Bedsun Tech",
  url: SITE_URL,
  image: LOGO_URL,
  logo: LOGO_URL,
  telephone: "+1-702-219-5011",
  email: "bedsun.tech@gmail.com",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Las Vegas" },
    { "@type": "City", name: "Henderson" },
    { "@type": "City", name: "North Las Vegas" },
    { "@type": "Place", name: "Summerlin" },
    { "@type": "AdministrativeArea", name: "Las Vegas Valley" },
  ],
  description:
    "Bedsun Tech provides personal technology help, small business websites, automation, AI workflows, and practical IT support in the Las Vegas area.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Bedsun Tech",
  publisher: { "@id": BUSINESS_ID },
};

export function serviceSchema({ name, description, path, serviceType, audience, keywords = [] }) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: localBusinessSchema.areaServed,
  };

  if (serviceType) service.serviceType = serviceType;
  if (audience) service.audience = { "@type": "Audience", audienceType: audience };
  if (keywords.length) service.keywords = keywords.join(", ");

  return service;
}

export function faqPageSchema(faqs, path) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}${path}#faq`,
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}


export function articleSchema({ title, description, path, datePublished, dateModified, keywords = [] }) {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}${path}#article`,
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    image: LOGO_URL,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "Bedsun Tech",
      url: SITE_URL,
    },
    publisher: { "@id": BUSINESS_ID },
    mainEntityOfPage: `${SITE_URL}${path}`,
  };

  if (keywords.length) article.keywords = keywords.join(", ");

  return article;
}
