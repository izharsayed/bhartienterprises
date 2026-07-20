import { CountUp } from "@/components/ui/CountUp";
import { stats } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function StatsBand() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-[var(--brand)] p-10 text-white sm:p-14">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--brand-accent) 60%, transparent), transparent)",
              }}
            />
            <div
              className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--brand-blue) 60%, transparent), transparent)",
              }}
            />
            <div className="relative grid gap-10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-3 text-sm text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
