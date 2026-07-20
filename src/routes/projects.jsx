import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { projects } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Bharti Enterprises" },
      {
        name: "description",
        content: "Selected telecom, fiber, civil and electrical projects delivered across India.",
      },
      { property: "og:title", content: "Projects — Bharti Enterprises" },
      { property: "og:description", content: "150+ projects delivered pan-India." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Work we're proud of."
        sub="A slice of the 150+ deployments we've completed across telecom, fiber, civil and electrical."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
              >
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group block overflow-hidden rounded-[28px] border border-border/60 bg-white"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand)]/90 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
                      {p.tag}
                    </div>
                    <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-[var(--brand)] transition group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                    <div className="absolute inset-x-5 bottom-5 text-white">
                      <div className="font-display text-2xl font-semibold">{p.title}</div>
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
