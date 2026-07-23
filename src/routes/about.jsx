import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { DisciplinesGrid } from "@/components/sections/DisciplinesGrid";
import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { Award, Users2, Rocket, Handshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Bharti Enterprises" },
      {
        name: "description",
        content:
          "Learn about Bharti Enterprises: mission, vision, values and the team executing India's infrastructure at scale.",
      },
      { property: "og:title", content: "About Bharti Enterprises" },
      {
        property: "og:description",
        content: "An engineering-first partner for India's critical infrastructure.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Award,
    title: "Craftsmanship",
    body: "We treat every splice, every foundation, every joint as if our name is on it because it is.",
  },
  {
    icon: Users2,
    title: "People-first",
    body: "Our field teams are trained, insured and equipped to global safety standards.",
  },
  {
    icon: Rocket,
    title: "Speed with discipline",
    body: "Aggressive timelines meet rigorous QHSE never one at the cost of the other.",
  },
  {
    icon: Handshake,
    title: "Long partnerships",
    body: "80% of our revenue comes from clients we&apos;ve served for 3+ years.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Engineering India's next chapter."
        sub="Since 2018 we've grown from a two-tower crew to a 100+ engineer organisation trusted by India's largest telecom, energy and infrastructure companies."
      />

      <AboutSplit />

      <DisciplinesGrid />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="max-w-3xl font-display text-4xl font-semibold text-[var(--brand)] sm:text-5xl">
              The values that hold up every <span className="text-gradient">tower we build.</span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="h-full rounded-3xl border border-border/60 bg-white p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--brand)]/6 text-[var(--brand)]">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6 font-display text-xl font-semibold text-[var(--brand)]">
                    {v.title}
                  </div>
                  <p
                    className="mt-2 text-sm leading-relaxed text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: v.body }}
                  />
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <StatsBand />
      <Testimonials />
    </>
  );
}
