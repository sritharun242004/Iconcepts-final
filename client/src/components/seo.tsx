import { Helmet } from "react-helmet-async";

const SITE_URL = "https://iconcepts.in";
const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`;

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

// Organization JSON-LD (appears on every page)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "iConcepts",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpg`,
  description:
    "INS Accredited & DIPR Empanelled full-service 360° advertising and brand-building agency in Chennai, India.",
  foundingDate: "2007",
  email: "connect@iconcepts.in",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "connect@iconcepts.in",
    contactType: "customer service",
    availableLanguage: ["English", "Tamil"],
  },
};

// LocalBusiness JSON-LD for geo/local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AdvertisingAgency",
  name: "iConcepts",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpg`,
  image: `${SITE_URL}/logo.jpg`,
  description:
    "Full-service 360° advertising agency offering creative services, media planning, BTL execution, and event management. INS Accredited & DIPR Empanelled.",
  email: "connect@iconcepts.in",
  foundingDate: "2007",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.0827",
    longitude: "80.2707",
  },
  areaServed: [
    { "@type": "City", name: "Chennai" },
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Advertising Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Creative Services",
          description:
            "Brand strategy, campaign ideation, print design, visual identity, and packaging design.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Media Planning & Buying",
          description:
            "National-level ATL media planning — newspaper, magazine, TV, radio, and outdoor advertising.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BTL Execution",
          description:
            "Outdoor hoardings, bus branding, bus shelter ads, LED screening, and vehicle branding.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Event Management",
          description:
            "Product launches, corporate events, brand activations, and Propfair property expos.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "40",
    bestRating: "5",
  },
};

// BreadcrumbList helper
function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function SEO({
  title,
  description = "INS Accredited & DIPR Empanelled full-service advertising agency in Chennai. Creative, media planning, BTL execution, and event management for India's leading brands.",
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | iConcepts`
    : "iConcepts - 360° Advertising & Brand Building Agency";
  const canonicalUrl = `${SITE_URL}${path}`;

  const breadcrumbItems = [{ name: "Home", url: SITE_URL }];
  if (path !== "/") {
    const pageName =
      path === "/about"
        ? "About Us"
        : path === "/creative"
          ? "Creative Department"
          : path === "/media"
            ? "Media Department"
            : path === "/btl-events"
              ? "BTL & Events"
              : path === "/events"
                ? "Events"
                : "";
    if (pageName) {
      breadcrumbItems.push({ name: pageName, url: canonicalUrl });
    }
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="iConcepts" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(getBreadcrumbSchema(breadcrumbItems))}
      </script>
    </Helmet>
  );
}

export default SEO;
