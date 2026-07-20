import { clients } from "@/data/site";

export function LogoMarquee() {
  const row = [...clients, ...clients];
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by India&apos;s largest operators, OEMs & EPCs
        </div>
        <div className="mask-fade mt-8 overflow-hidden">
          <div className="animate-marquee flex w-max gap-14">
            {row.map((c, i) => (
              <div
                key={i}
                className="font-display text-2xl font-semibold tracking-tight text-[var(--brand)]/45 transition hover:text-[var(--brand)] sm:text-3xl"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
