import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  MapPin,
  Briefcase,
  HeartHandshake,
  GraduationCap,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Bharti Enterprises" },
      {
        name: "description",
        content:
          "Open roles across engineering, project management and field operations at Bharti Enterprises.",
      },
      { property: "og:title", content: "Careers — Bharti Enterprises" },
      {
        property: "og:description",
        content: "Build your career at India's infrastructure specialist.",
      },
    ],
  }),
  component: Careers,
});

const roles = [
  { title: "Senior RF Engineer", loc: "Delhi NCR", type: "Full-time" },
  { title: "Fiber Splicing Team Lead", loc: "Mumbai", type: "Full-time" },
  { title: "Civil Site Engineer", loc: "Pune", type: "Full-time" },
  { title: "Project Manager — Telecom", loc: "Bengaluru", type: "Full-time" },
  { title: "HSE Officer", loc: "Ahmedabad", type: "Full-time" },
  { title: "Fleet Operations Manager", loc: "Gurugram", type: "Full-time" },
];

const perks = [
  {
    icon: HeartHandshake,
    title: "Health & family cover",
    body: "Comprehensive insurance for you and your dependents.",
  },
  {
    icon: GraduationCap,
    title: "Learning stipend",
    body: "Annual budget for certifications and skill development.",
  },
  {
    icon: Trophy,
    title: "Performance bonuses",
    body: "Milestone-linked incentives on every project.",
  },
  {
    icon: Briefcase,
    title: "Career mobility",
    body: "Real growth paths across verticals and geographies.",
  },
];

function Careers() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build the networks India will run on."
        sub="We're hiring engineers, project managers and field crews who love hard, meaningful work."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-[var(--brand)]">Open roles</h2>
          </Reveal>
          <div className="mt-8 divide-y divide-border rounded-3xl border border-border/60 bg-white">
            {roles.map((r) => (
              <div
                key={r.title}
                className="group flex flex-wrap items-center justify-between gap-4 p-6 transition hover:bg-[var(--brand)]/3"
              >
                <div>
                  <div className="font-display text-xl font-semibold text-[var(--brand)]">
                    {r.title}
                  </div>
                  <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {r.loc}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      {r.type}
                    </span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)]/6 px-4 py-2 text-sm font-medium text-[var(--brand)] transition group-hover:bg-[var(--brand)] group-hover:text-white"
                >
                  Apply <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-semibold text-[var(--brand)] sm:text-5xl">
              Why <span className="text-gradient">Bharti Enterprises?</span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <RevealItem key={p.title}>
                <div className="h-full rounded-3xl border border-border/60 bg-white p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--brand)]/6 text-[var(--brand)]">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6 font-display text-xl font-semibold text-[var(--brand)]">
                    {p.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}
