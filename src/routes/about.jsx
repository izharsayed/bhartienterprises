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
      { title: "About Bharti Enterprises — Infrastructure Engineering Company Since 2018" },
      {
        name: "description",
        content:
          "Learn about Bharti Enterprises — India's engineering-first partner for telecom infrastructure, OFC fiber networks, civil construction, electrical and engineering services. Operating since 2018 across 14+ states with 100+ engineers.",
      },
      {
        name: "keywords",
        content: "Bharti Enterprises about, infrastructure company India, telecom infrastructure company, engineering firm India, fiber network contractor, OFC splicing company",
      },
      { property: "og:title", content: "About Bharti Enterprises — Infrastructure Engineering Company Since 2018" },
      {
        property: "og:description",
        content: "An engineering-first partner for India's critical infrastructure since 2018. 100+ engineers, 14+ states, zero-tolerance safety culture.",
      },
      { property: "og:url", content: "https://www.bhartienterprises.in/about" },
      { name: "twitter:title", content: "About Bharti Enterprises — Infrastructure Engineering Company Since 2018" },
      { name: "twitter:description", content: "An engineering-first partner for India's critical telecom and civil infrastructure since 2018." },
    ],
    links: [{ rel: "canonical", href: "https://www.bhartienterprises.in/about" }],
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
