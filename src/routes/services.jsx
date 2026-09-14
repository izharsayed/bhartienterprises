import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Bharti Enterprises Construction & Infrastructure Services",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Residential Construction", description: "Quality residential construction solutions delivered with precision and safety." },
    { "@type": "ListItem", position: 2, name: "Commercial Buildings", description: "Turnkey commercial complexes engineered for durability and modern functionality." },
    { "@type": "ListItem", position: 3, name: "Industrial Projects", description: "Industrial sheds and manufacturing facilities with strong structural steelwork." },
    { "@type": "ListItem", position: 4, name: "Institutional Buildings", description: "Educational institutes, administrative blocks, and government facilities." },
    { "@type": "ListItem", position: 5, name: "Roads & Civil Works", description: "Road construction, earthwork, site leveling, and comprehensive civil works." },
    { "@type": "ListItem", position: 6, name: "Drainage & Utilities", description: "Professional pipeline laying, drainage networks, and precise utility execution." },
    { "@type": "ListItem", position: 7, name: "Renovation & Maintenance", description: "Structural strengthening, RCC repairs, and maintenance solutions." },
    { "@type": "ListItem", position: 8, name: "Project Planning & Management", description: "End-to-end project planning, site safety briefing, and quality management." },
  ],
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Construction & Infrastructure Services | Bharti Enterprises" },
      {
        name: "description",
        content:
          "Bharti Enterprises provides comprehensive construction and infrastructure services tailored to meet diverse project requirements: residential, commercial, industrial sheds, civil works, roads, pipelines, and project management.",
      },
      {
        name: "keywords",
        content: "civil construction company India, industrial shed construction, road construction contractor, pipeline laying, foundation work, RCC structural work, Bharti Enterprises services",
      },
      { property: "og:title", content: "Construction & Infrastructure Services | Bharti Enterprises (bhartientreprise.in)" },
      { property: "og:description", content: "Comprehensive construction and infrastructure services tailored to meet diverse project requirements." },
      { property: "og:url", content: "https://bhartientreprise.in/services" },
      { name: "twitter:title", content: "Construction & Infrastructure Services | Bharti Enterprises (bhartientreprise.in)" },
      { name: "twitter:description", content: "Comprehensive construction and infrastructure services tailored to meet diverse project requirements." },
    ],
    links: [{ rel: "canonical", href: "https://bhartientreprise.in/services" }],
  }),
  component: Services,
});

const process = [
  {
    step: "01",
    title: "Survey & design",
    body: "Site surveys, BOQ preparation, and detailed engineering design.",
  },
  {
    step: "02",
    title: "Mobilisation",
    body: "Crews, equipment, and materials deployed swiftly to the site.",
  },
  {
    step: "03",
    title: "Execution",
    body: "Site safety briefings, quality execution, and daily progress coordination.",
  },
  {
    step: "04",
    title: "Handover & Support",
    body: "Final inspection, quality assurance handover, and ongoing support.",
  },
];

function Services() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHeader
        eyebrow="Services"
        title="Comprehensive Construction & Infrastructure Services."
        sub="Tailored construction and infrastructure solutions designed for long-term performance, quality execution, and lasting value."
      />

      <ServicesGrid />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex rounded-full border border-[var(--brand)]/10 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand)]">
                Process
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold text-[var(--brand)] sm:text-5xl">
                A predictable path from <span className="text-gradient">brief to handover.</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-border/60 bg-white p-6">
                  <div className="font-display text-4xl font-semibold text-gradient">{p.step}</div>
                  <div className="mt-4 font-display text-xl font-semibold text-[var(--brand)]">
                    {p.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-emerald-600">
                    <CheckCircle2 className="h-4 w-4" /> SLA-backed
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
