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
  "@type": "LocalBusiness",
  "@id": "https://www.bhartienterprises.in/#localbusiness",
  name: "Bharti Enterprises",
  description:
    "India's leading telecom infrastructure, OFC fiber network, civil construction and electrical services company with operations across 14+ states.",
  url: "https://www.bhartienterprises.in",
  telephone: "+91-9158077725",
  email: "bhartienterprises.tsp@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "IN", addressRegion: "India" },
  geo: { "@type": "GeoCoordinates", latitude: "20.5937", longitude: "78.9629" },
  areaServed: { "@type": "Country", name: "India" },
  openingHours: "Mo-Sa 09:00-18:00",
  foundingDate: "2014",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bharti Enterprises — Telecom Infrastructure & Fiber Network Company India" },
      {
        name: "description",
        content:
          "Bharti Enterprises is India's trusted telecom infrastructure company. We specialise in 5G tower construction, OFC fiber network laying and splicing, FTTH installation, civil construction, electrical substations, and engineering services across 14+ states.",
      },
      {
        name: "keywords",
        content:
          "telecom infrastructure company India, fiber network services, OFC laying, OFC splicing, FTTH installation, civil construction contractor, electrical contractor India, engineering services, labour supply, infrastructure company India",
      },
      {
        property: "og:title",
        content: "Bharti Enterprises — Telecom Infrastructure & Fiber Network Company India",
      },
      {
        property: "og:description",
        content:
          "India's engineering-first partner for telecom towers, OFC fiber networks, civil construction, electrical and managed infrastructure services.",
      },
      { property: "og:url", content: "https://www.bhartienterprises.in/" },
      {
        name: "twitter:title",
        content: "Bharti Enterprises — Telecom Infrastructure & Fiber Network Company India",
      },
      {
        name: "twitter:description",
        content:
          "India's engineering-first partner for telecom towers, OFC fiber networks, civil construction, electrical and managed infrastructure services.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.bhartienterprises.in/" }],
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
