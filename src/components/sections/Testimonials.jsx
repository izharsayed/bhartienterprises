import { testimonials } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Quote } from "lucide-react";

export function Testimonials() {
  const row = [...testimonials, ...testimonials];
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-[var(--brand)]/10 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand)]">
              Client voices
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[var(--brand)] sm:text-5xl">
              What partners say about
              <span className="text-gradient"> working with us.</span>
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="mask-fade mt-14 overflow-hidden">
        <div className="animate-marquee flex w-max gap-6" style={{ animationDuration: "50s" }}>
          {row.map((t, i) => (
            <div
              key={i}
              className="w-[420px] shrink-0 rounded-3xl border border-border/60 bg-white p-8 shadow-sm"
            >
              <Quote className="h-6 w-6 text-[var(--brand-accent)]" />
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-blue)] font-display text-sm font-semibold text-white">
                  {t.name
                    .split(" ")
                    .map((x) => x[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-medium text-[var(--brand)]">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
