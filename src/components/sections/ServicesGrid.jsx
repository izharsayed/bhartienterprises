import { services } from "@/data/site";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ServicesGrid() {
  return (
    <section aria-label="Our infrastructure services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex rounded-full border border-[var(--brand)]/10 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand)]">
                What we do
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[var(--brand)] sm:text-5xl">
                Eight capabilities.
                <br />
                <span className="text-gradient">One accountable partner.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/services"
              aria-label="View all infrastructure services"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand)]/6 px-4 py-2 text-sm font-medium text-[var(--brand)] transition hover:bg-[var(--brand)] hover:text-white"
            >
              All services <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <RevealItem key={s.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-white p-6 transition hover:-translate-y-1 hover:border-transparent hover:shadow-2xl hover:shadow-[var(--brand)]/10">
                {/* Gradient border on hover */}
                <div
                  className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 transition group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--brand-blue) 15%, transparent), color-mix(in oklab, var(--brand-accent) 15%, transparent))",
                  }}
                />
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition group-hover:opacity-70"
                  style={{ background: "color-mix(in oklab, var(--brand-blue) 40%, transparent)" }}
                />

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--brand)]/6 text-[var(--brand)] transition group-hover:bg-[var(--brand)] group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-6 font-display text-xl font-semibold text-[var(--brand)]">
                  {s.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-blue)] opacity-70 transition group-hover:opacity-100">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
