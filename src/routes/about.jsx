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
      { title: "About Bharti Enterprises — Construction & Infrastructure Company | bhartientreprise.in" },
      {
        name: "description",
        content:
          "Learn about Bharti Enterprises (bhartientreprise.in) — a growing construction company committed to delivering reliable, high-quality civil infrastructure, industrial sheds, and roads across India.",
      },
      {
        name: "keywords",
        content:
          "Bharti Enterprises about, bhartientreprise.in, Bharti Entreprise Ahmednagar, construction company Maharashtra, civil construction contractor, infrastructure solutions India",
      },
      { property: "og:title", content: "About Bharti Enterprises — Construction & Infrastructure Company | bhartientreprise.in" },
      {
        property: "og:description",
        content:
          "Building Stronger Tomorrow. Quality construction, reliable solutions, and lasting values from vision to reality.",
      },
      { property: "og:url", content: "https://bhartientreprise.in/about" },
      { name: "twitter:title", content: "About Bharti Enterprises — Construction & Infrastructure Company | bhartientreprise.in" },
      { name: "twitter:description", content: "Learn about Bharti Enterprises (bhartientreprise.in) — building stronger tomorrow with reliable construction solutions." },
    ],
    links: [{ rel: "canonical", href: "https://bhartientreprise.in/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: Award,
    title: "Quality Construction",
    body: "Delivering strong, reliable, and high-quality construction solutions designed for long-term performance.",
  },
  {
    icon: Users2,
    title: "Safety in Every Step",
    body: "Proper planning, safety instructions, and clear coordination to ensure smooth and secure site operations.",
  },
  {
    icon: Rocket,
    title: "Timely Execution",
    body: "Efficient planning and dedicated project management to complete every project on schedule with precision.",
  },
  {
    icon: Handshake,
    title: "Lasting Values",
    body: "Building strong and lasting business relationships through transparency, commitment, and client satisfaction.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Building Stronger Tomorrow."
        sub="Quality Construction · Reliable Solutions · Lasting Values. From vision to reality with experienced professionals and modern execution."
      />

      <AboutSplit />

      <DisciplinesGrid />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="max-w-3xl font-display text-4xl font-semibold text-[var(--brand)] sm:text-5xl">
              The core principles behind <span className="text-gradient">every project.</span>
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
