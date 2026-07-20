import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-white p-10 sm:p-16">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--brand-accent) 60%, transparent), transparent)",
              }}
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h3 className="font-display text-4xl font-semibold leading-tight text-[var(--brand)] sm:text-5xl">
                  Have a rollout in mind?
                  <br />
                  <span className="text-gradient">Let&apos;s build it right.</span>
                </h3>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  Share your scope — we&apos;ll come back within one business day with a costed,
                  timelined proposal from our senior engineering leadership.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[var(--brand)]/25 transition hover:-translate-y-0.5"
                >
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-[var(--brand)] hover:bg-[var(--brand)]/5"
                >
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
