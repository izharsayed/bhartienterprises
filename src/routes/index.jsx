import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ProjectCarousel } from "@/components/sections/ProjectCarousel";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["GeneralContractor", "ConstructionBusiness", "LocalBusiness"],
      "@id": "https://bhartientreprise.in/#localbusiness",
      name: "Bharti Enterprises",
      alternateName: [
        "Bharti Entreprise",
        "bhartientreprise.in",
        "Bharti Enterprises Ahmednagar",
        "Bharti Enterprises Construction",
      ],
      legalName: "Bharti Enterprises",
      taxID: "27BWIPS4029L1ZZ",
      description:
        "Official website of Bharti Enterprises (bhartientreprise.in). Leading construction and infrastructure solutions: civil construction, commercial buildings, industrial sheds, roads, foundations, and pipelines in Ahmednagar, Maharashtra and across India.",
      url: "https://bhartientreprise.in",
      telephone: "+91-8799859344",
      email: "Bhartienterprises.tsp@gmail.com",
      priceRange: "₹₹₹",
      currenciesAccepted: "INR",
      address: {
        "@type": "PostalAddress",
        streetAddress: "NIL, Dargah Dayra, Ahmadnagar",
        addressLocality: "Ahmednagar",
        addressRegion: "Maharashtra",
        postalCode: "414001",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: "19.0952", longitude: "74.7480" },
      areaServed: [
        { "@type": "City", name: "Ahmednagar" },
        { "@type": "State", name: "Maharashtra" },
        { "@type": "Country", name: "India" },
      ],
      openingHours: "Mo-Sa 09:00-18:00",
      foundingDate: "2014",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Construction & Infrastructure Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Construction" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Buildings" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Shed Construction" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Institutional Buildings" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roads & Civil Works" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drainage & Utilities" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Foundation & RCC Work" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Planning & Management" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Bharti Enterprises (bhartientreprise.in)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bharti Enterprises (official website: https://bhartientreprise.in) is a growing construction and infrastructure company headquartered in Ahmednagar, Maharashtra, delivering reliable solutions in civil works, industrial sheds, roads, RCC structures, and pipelines.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Bharti Enterprises office located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bharti Enterprises is located at NIL, Dargah Dayra, Ahmadnagar, Ahmednagar, Maharashtra 414001, India. GSTIN: 27BWIPS4029L1ZZ. Phone: +91 8799859344.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Bharti Enterprises provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bharti Enterprises provides comprehensive infrastructure services including residential construction, commercial buildings, industrial sheds, institutional buildings, roadworks, drainage & pipeline utilities, RCC foundations, and project management.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact Bharti Enterprises for construction project inquiries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach Bharti Enterprises directly by phone at +91 8799859344, email at Bhartienterprises.tsp@gmail.com, or through WhatsApp at https://wa.me/918799859344.",
          },
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bharti Enterprises — Construction & Infrastructure Company | bhartientreprise.in" },
      {
        name: "description",
        content:
          "Official website of Bharti Enterprises (bhartientreprise.in). Trusted construction and infrastructure solutions in Maharashtra & pan-India: civil works, roads, industrial sheds, RCC structures, foundations, and pipeline installation.",
      },
      {
        name: "keywords",
        content:
          "Bharti Enterprises, bhartientreprise.in, Bharti Entreprise, Bharti Enterprises Ahmednagar, Bharti Enterprises Maharashtra, civil construction contractor, industrial shed construction, road construction company, pipeline laying contractor, infrastructure company India",
      },
      {
        property: "og:title",
        content: "Bharti Enterprises — Construction & Infrastructure Company | bhartientreprise.in",
      },
      {
        property: "og:description",
        content:
          "Quality Construction · Reliable Solutions · Lasting Values. Official website of Bharti Enterprises (bhartientreprise.in).",
      },
      { property: "og:image", content: "https://bhartientreprise.in/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://bhartientreprise.in/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Bharti Enterprises — Construction & Infrastructure Company | bhartientreprise.in",
      },
      {
        name: "twitter:description",
        content:
          "Quality Construction · Reliable Solutions · Lasting Values. Delivering strong, sustainable infrastructure that adds lasting value.",
      },
      { name: "twitter:image", content: "https://bhartientreprise.in/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://bhartientreprise.in/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <ProjectCarousel hideHeader={true} />
      <LogoMarquee />
      <ServicesGrid />
      <StatsBand />
      <Testimonials />
      <CTA />
    </>
  );
}
