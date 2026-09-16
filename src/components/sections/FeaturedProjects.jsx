import { Link } from "@tanstack/react-router";
import { projects } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturedProjects() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <div className="inline-flex rounded-full border border-[var(--brand)]/10 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand)]">
                Featured work
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[var(--brand)] sm:text-5xl">
                Selected projects that
                <span className="text-gradient"> moved the needle.</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--brand-blue)]"
            >
              View all projects{" "}
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={i % 3 === 0 ? "lg:col-span-2" : ""}
            >
              <Link
                to="/projects"
                search={{ project: p.slug }}
                className="group relative block overflow-hidden rounded-[28px] border border-border/60 bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.heroImage || p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand)]/95 via-[var(--brand)]/20 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
                    {p.tag}
                  </div>
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                    <div className="text-white">
                      <div className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
                        {p.title}
                      </div>
                      <div className="mt-2 flex items-center gap-4 text-xs text-white/80">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {p.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {p.year}
                        </span>
                      </div>
                    </div>
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-[var(--brand)] transition group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5">
                  <div className="flex-1">
                    <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span>{p.progress}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[var(--brand)]/8">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-accent)]"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
