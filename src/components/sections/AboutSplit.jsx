import aboutImg from "@/assets/about.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { Target, Compass, ShieldCheck } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

export function AboutSplit() {
  return (
    <section className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-accent)]/10 blur-2xl" />
          <div className="overflow-hidden rounded-[32px] border border-white/50 shadow-2xl shadow-[var(--brand)]/10">
            <img
              src={aboutImg}
              alt="Bharti Enterprises engineering team"
              className="h-[560px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="glass absolute -bottom-8 left-6 rounded-2xl px-5 py-4 shadow-xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Since</div>
            <div className="font-display text-3xl font-semibold text-[var(--brand)]">2014</div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="inline-flex rounded-full border border-[var(--brand)]/10 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand)]">
              About Us
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[var(--brand)] sm:text-5xl">
              Building Stronger
              <span className="text-gradient"> Tomorrow.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Bharti Enterprises is a growing company committed to delivering reliable and high-quality construction solutions. With a focus on quality, safety, timely execution, and client satisfaction, we work closely with our clients to turn their ideas into successful projects. Our professional approach and attention to detail help us build strong and lasting business relationships.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Compass,
                title: "Our Vision",
                body: "To become a trusted name in the construction industry by delivering quality-driven, reliable, and sustainable solutions that create long-term value.",
              },
              {
                icon: Target,
                title: "Our Mission",
                body: "To deliver every project with quality, safety, and commitment, while maintaining transparency and timely execution.",
              },
              {
                icon: ShieldCheck,
                title: "Our Team",
                body: "Experienced professionals, skilled supervisors, and dedicated project managers who work together with commitment and precision.",
              },
              {
                icon: Target,
                title: "Why Choose Us?",
                body: "Committed to delivering reliable, efficient, and quality-driven construction solutions with professional dedication.",
              },
            ].map((v) => (
              <Reveal key={v.title} delay={0.15}>
                <div className="group h-full rounded-2xl border border-border/60 bg-white/60 p-5 backdrop-blur transition hover:border-[var(--brand)]/20 hover:shadow-lg hover:shadow-[var(--brand)]/5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--brand)]/6 text-[var(--brand)] transition group-hover:bg-[var(--brand)] group-hover:text-white">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold text-[var(--brand)]">
                    {v.title}
                  </div>
                  <p
                    className="mt-1 text-sm text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: v.body }}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-2 rounded-2xl border border-border/60 bg-white/60 p-2">
            {[
              { v: 14, s: "+", l: "States active" },
              { v: 98, s: "%", l: "On-time delivery" },
              { v: 24, s: "×7", l: "Ops support" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl px-4 py-3 text-center">
                <div className="font-display text-2xl font-semibold text-[var(--brand)]">
                  <CountUp to={s.v} suffix={s.s} />
                </div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
