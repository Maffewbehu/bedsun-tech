import { Helmet } from "react-helmet-async";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": "https://bedsuntech.tech/#organization",
      name: "Bedsun Tech",
      legalName: "Bedsun Tech LLC",
      url: "https://bedsuntech.tech/",
      logo: "https://bedsuntech.tech/BT_logo.png",
      image: "https://bedsuntech.tech/BT_logo.png",
      email: "bedsun.tech@gmail.com",
      telephone: "+1-702-219-5011",
      description:
        "Bedsun Tech provides websites, business automation, custom business tools, small business IT support, personal technology help, Wi-Fi support, Microsoft 365 setup, cameras, and practical technology systems in the Las Vegas area.",
      areaServed: [
        {
          "@type": "City",
          name: "Las Vegas",
          address: {
            "@type": "PostalAddress",
            addressRegion: "NV",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Henderson",
          address: {
            "@type": "PostalAddress",
            addressRegion: "NV",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "North Las Vegas",
          address: {
            "@type": "PostalAddress",
            addressRegion: "NV",
            addressCountry: "US",
          },
        },
        {
          "@type": "Place",
          name: "Summerlin",
        },
      ],
      serviceType: [
        "Website design",
        "Website redesign",
        "Business automation",
        "Custom dashboards",
        "Custom business tools",
        "Small business IT support",
        "Microsoft 365 setup",
        "Google Workspace setup",
        "Business email setup",
        "Wi-Fi support",
        "Camera setup",
        "Personal technology help",
        "Technology cleanup",
      ],
      founder: {
        "@type": "Person",
        name: "Matthew Bedsun",
      },
      sameAs: ["https://bedsuntech.tech/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://bedsuntech.tech/#website",
      url: "https://bedsuntech.tech/",
      name: "Bedsun Tech",
      publisher: {
        "@id": "https://bedsuntech.tech/#organization",
      },
    },
    {
      "@type": "Service",
      "@id": "https://bedsuntech.tech/#services",
      name: "Websites, Automation, IT Support, and Personal Technology Help",
      provider: {
        "@id": "https://bedsuntech.tech/#organization",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Las Vegas, Nevada area",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Bedsun Tech Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Small Business Website Design and Redesign",
              description:
                "Modern websites, landing pages, contact forms, SEO metadata, analytics setup, and clean deployment for small businesses.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Automation and Custom Tools",
              description:
                "Dashboards, forms, workflows, reporting tools, internal apps, and AI-assisted processes built around business operations.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Small Business IT Support",
              description:
                "Support for Microsoft 365, Google Workspace, business email, domains, devices, Wi-Fi, printers, and office technology.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Personal Technology Help",
              description:
                "Support for computers, phones, tablets, email, passwords, Wi-Fi, printers, cameras, smart devices, and technology cleanup.",
            },
          },
        ],
      },
    },
  ],
};

export default function SchemaMarkup() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}