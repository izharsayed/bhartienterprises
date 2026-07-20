import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { clients } from "@/data/site";
import { Testimonials } from "@/components/sections/Testimonials";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Bharti Enterprises" },
      {
        name: "description",
        content: "Operators, OEMs and EPCs that trust Bharti Enterprises for pan-India execution.",
      },
      { property: "og:title", content: "Clients — Bharti Enterprises" },
      {
        property: "og:description",
        content: "Partnering with India's largest telecom, energy and infrastructure companies.",
      },
    ],
  }),
  component: Clients,
});

function Clients() {
  return (
    <>
      <PageHeader
        eyebrow="Clients"
        title="Partners who trust us with mission-critical work."
        sub="From Tier-1 operators to global OEMs — long-term relationships built on delivery."
      />
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <RevealStagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c) => (
              <RevealItem key={c}>
                <div className="group grid h-32 place-items-center rounded-3xl border border-border/60 bg-white transition hover:-translate-y-1 hover:border-[var(--brand)]/20 hover:shadow-xl hover:shadow-[var(--brand)]/5">
                  <div className="font-display text-2xl font-semibold text-[var(--brand)]/70 transition group-hover:text-[var(--brand)]">
                    {c}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
