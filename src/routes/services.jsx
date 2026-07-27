import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Bharti Enterprises Infrastructure Services",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Telecom Infrastructure", description: "End-to-end 4G/5G tower construction, RAN rollout, and site engineering." },
    { "@type": "ListItem", position: 2, name: "Fiber Network (OFC / FTTH)", description: "OFC laying, blowing, splicing and last-mile FTTH — trenchless and open-cut." },
    { "@type": "ListItem", position: 3, name: "Civil Construction", description: "Foundations, shelters, roads, bridges and turnkey civil packages." },
    { "@type": "ListItem", position: 4, name: "Electrical", description: "HT/LT lines, substations, DG installations and electrification services." },
    { "@type": "ListItem", position: 5, name: "Engineering Services", description: "Survey, design, project management and O&M for critical infrastructure." },
    { "@type": "ListItem", position: 6, name: "Transportation", description: "Dedicated logistics with 25+ owned vehicles for material and equipment movement." },
    { "@type": "ListItem", position: 7, name: "Labour Supply", description: "Skilled and semi-skilled workforce deployment across pan-India sites." },
    { "@type": "ListItem", position: 8, name: "Outsourcing", description: "Managed services and staff augmentation for OEMs, operators and system integrators." },
  ],
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Infrastructure Services — Telecom, Fiber OFC, Civil & Electrical | Bharti Enterprises" },
      {
        name: "description",
        content:
          "Bharti Enterprises offers end-to-end infrastructure services: telecom tower construction, OFC fiber network laying and splicing, FTTH installation, civil construction, HT/LT electrical work, engineering services, transportation logistics, labour supply, and managed outsourcing across India.",
      },
      {
        name: "keywords",
        content: "telecom tower construction, OFC laying India, OFC splicing services, FTTH installation contractor, civil construction company, electrical contractor India, HT LT line installation, engineering services India, labour supply contractor, managed outsourcing",
      },
      { property: "og:title", content: "Infrastructure Services — Telecom, Fiber OFC, Civil & Electrical | Bharti Enterprises" },
      { property: "og:description", content: "Eight full-stack infrastructure capabilities: telecom, fiber OFC/FTTH, civil, electrical, engineering, transport, labour and managed outsourcing." },
      { property: "og:url", content: "https://www.bhartienterprises.in/services" },
      { name: "twitter:title", content: "Infrastructure Services — Telecom, Fiber OFC, Civil & Electrical | Bharti Enterprises" },
      { name: "twitter:description", content: "Eight full-stack infrastructure capabilities: telecom, OFC fiber, civil, electrical, engineering, transport, labour and outsourcing." },
    ],
    links: [{ rel: "canonical", href: "https://www.bhartienterprises.in/services" }],
  }),
  component: Services,
});

const process = [
  {
    step: "01",
    title: "Survey & design",
    body: "RF and civil surveys, BOQ preparation, permit strategy.",
  },
  {
    step: "02",
    title: "Mobilisation",
    body: "Crews on site within 72 hours with materials and machinery.",
  },
  {
    step: "03",
    title: "Execution",
    body: "Daily QA dashboards, safety toolbox talks, weekly reviews.",
  },
  {
    step: "04",
    title: "Handover & O&M",
    body: "As-built docs, acceptance testing and 24×7 maintenance.",
  },
];

function Services() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHeader
        eyebrow="Services"
        title="Full-stack infrastructure execution."
        sub="From RF survey to substation handover every discipline we offer is delivered in-house by dedicated verticals."
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
