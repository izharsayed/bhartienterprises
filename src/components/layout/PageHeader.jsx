import { motion } from "framer-motion";

export function PageHeader({ eyebrow, title, sub, children }) {
  return (
    <section aria-label={title || "Page header"} className="relative overflow-hidden pt-40 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-blue) 35%, transparent), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto inline-flex rounded-full border border-[var(--brand)]/15 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand)]"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-[var(--brand)] sm:text-6xl md:text-7xl"
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            {sub}
          </motion.p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
