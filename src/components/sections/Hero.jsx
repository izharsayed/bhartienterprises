import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play, MoveDown } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import { stats } from "@/data/site";
import { CountUp } from "@/components/ui/CountUp";

export function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, (v) => v * 20);
  const ty = useTransform(sy, (v) => v * 20);
  const tx2 = useTransform(sx, (v) => v * -30);
  const ty2 = useTransform(sy, (v) => v * -30);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section ref={ref} className="relative isolate min-h-screen overflow-hidden pt-24">
      {/* Background image (used as ambient video-like still) */}
      <motion.div style={{ x: tx2, y: ty2 }} className="absolute inset-0 -z-10">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(70% 60% at 50% 30%, transparent, white 85%)" }}
        />
      </motion.div>

      {/* Blobs */}
      <div
        className="pointer-events-none absolute -left-40 top-40 -z-10 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl animate-blob"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-blue) 50%, transparent), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-40 top-80 -z-10 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl animate-blob"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-accent) 45%, transparent), transparent)",
          animationDelay: "-6s",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-[var(--brand)] shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
            </span>
            Trusted since 2016 · Pan-India Deployment
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 font-display text-[44px] font-semibold leading-[1.02] tracking-tight text-[var(--brand)] sm:text-6xl lg:text-[72px]"
          >
            Building India&apos;s <br />
            <span className="text-gradient">Digital Infrastructure.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Telecom towers, fiber networks, civil works and engineering services — engineered
            end-to-end by a team of 100+ specialists across the country.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[var(--brand)]/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--brand)]/30"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/15 bg-white/80 px-6 py-3.5 text-sm font-medium text-[var(--brand)] backdrop-blur transition hover:border-[var(--brand)]/30"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--brand-accent)] text-white">
                <Play className="h-3 w-3 fill-white" />
              </span>
              Request a Quote
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <MoveDown className="h-4 w-4 animate-bounce" /> Scroll to discover
          </motion.div>
        </div>

        {/* Floating glass stats card */}
        <motion.div
          style={{ x: tx, y: ty }}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="glass relative rounded-[28px] p-6 shadow-2xl shadow-[var(--brand)]/10 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  By the numbers
                </div>
                <div className="mt-1 font-display text-lg font-semibold text-[var(--brand)]">
                  Proven at scale
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-accent)]" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur"
                >
                  <div className="font-display text-3xl font-semibold text-[var(--brand)] sm:text-4xl">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-[var(--brand)] p-4 text-white">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">Zero</div>
                <div className="font-display text-lg">Safety Incidents · 2024</div>
              </div>
              <div className="rounded-full bg-white/10 px-3 py-1 text-xs">LTIF · 0.0</div>
            </div>
          </div>

          {/* Secondary floating chip */}
          <motion.div
            style={{ x: tx2, y: ty2 }}
            className="glass absolute -left-6 -bottom-6 hidden rounded-2xl px-4 py-3 shadow-xl sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <div className="text-xs">
                <div className="font-medium text-[var(--brand)]">Live · 12 sites active</div>
                <div className="text-muted-foreground">Delhi · Mumbai · Bengaluru</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
