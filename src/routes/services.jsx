import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Bharti Enterprises" },
      {
        name: "description",
        content:
          "Telecom, fiber, civil, electrical, engineering, transportation, labour supply and managed outsourcing services.",
      },
      { property: "og:title", content: "Services — Bharti Enterprises" },
      { property: "og:description", content: "Eight capabilities. One accountable partner." },
    ],
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
      <PageHeader
        eyebrow="Services"
        title="Full-stack infrastructure execution."
        sub="From RF survey to substation handover — every discipline we offer is delivered in-house by dedicated verticals."
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
