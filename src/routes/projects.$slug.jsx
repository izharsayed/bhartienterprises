import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/data/site";
import { ArrowLeft, MapPin, Calendar, CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Bharti Enterprises` },
          { name: "description", content: loaderData.project.summary },
          { name: "robots", content: "index, follow" },
          { property: "og:title", content: `${loaderData.project.title} | Bharti Enterprises` },
          { property: "og:description", content: loaderData.project.summary },
          {
            property: "og:image",
            content: loaderData.project.image?.startsWith("http")
              ? loaderData.project.image
              : `https://bhartientreprise.in${loaderData.project.image}`,
          },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: `${loaderData.project.title} | Bharti Enterprises` },
          { name: "twitter:description", content: loaderData.project.summary },
          {
            name: "twitter:image",
            content: loaderData.project.image?.startsWith("http")
              ? loaderData.project.image
              : `https://bhartientreprise.in${loaderData.project.image}`,
          },
        ]
      : [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
    links: loaderData
      ? [{ rel: "canonical", href: `https://bhartientreprise.in/projects/${loaderData.project.slug}` }]
      : [],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bhartientreprise.in/" },
      { "@type": "ListItem", position: 2, name: "Projects", item: "https://bhartientreprise.in/projects" },
      { "@type": "ListItem", position: 3, name: project.title, item: `https://bhartientreprise.in/projects/${project.slug}` },
    ],
  };
  const highlights = [
    "Turnkey design-build execution",
    "Dedicated project management office",
    "24×7 site monitoring & reporting",
    "ISO-aligned QHSE compliance",
    "Local material & labour partnerships",
    "Client acceptance & O&M handover",
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            to="/projects"
            aria-label="Back to all Bharti Enterprises projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-[var(--brand)]"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="inline-flex rounded-full bg-[var(--brand)]/6 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand)]">
                {project.tag}
              </div>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-[var(--brand)] sm:text-6xl">
                {project.title}
              </h1>
            </div>
            <div className="flex items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {project.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {project.year}
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 overflow-hidden rounded-[32px] border border-border/60 bg-white p-3 sm:p-6 shadow-md flex items-center justify-center"
          >
            <img
              src={project.image}
              alt={project.title}
              title={project.title}
              loading="eager"
              width={1400}
              height={520}
              className="max-h-[520px] w-auto max-w-full object-contain rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-[var(--brand)]">
              Project overview
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
            {project.subtitle && (
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-blue)]">
                {project.subtitle}
              </p>
            )}

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {(project.points || highlights).map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--brand-accent)] flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-800">{h}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="sticky top-32 rounded-3xl border border-border/60 bg-white p-6 shadow-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Progress
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-5xl font-semibold text-[var(--brand)]">
                  {project.progress}
                </span>
                <span className="text-lg text-muted-foreground">%</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--brand)]/8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4 }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-accent)]"
                />
              </div>
              <dl className="mt-8 space-y-4 text-sm">
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="font-medium text-[var(--brand)]">{project.tag}</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium text-[var(--brand)]">{project.location}</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted-foreground">Year</dt>
                  <dd className="font-medium text-[var(--brand)]">{project.year}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Status</dt>
                  <dd className="font-medium text-emerald-600">
                    {project.progress === 100 ? "Completed" : "In progress"}
                  </dd>
                </div>
              </dl>
              <Link
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--brand-blue)] transition-colors"
              >
                Discuss a similar project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* On-Site Gallery Section */}
      {project.images && project.images.length > 0 && (
        <section className="border-t border-border/40 bg-neutral-100/60 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-3xl font-semibold text-[var(--brand)]">
              On-Site Project Gallery
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Direct field documentation and milestone photography from {project.location}.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.images.map((img, i) => {
                const isVideo = img.includes('.mp4');
                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm"
                  >
                    {isVideo ? (
                      <video
                        src={img}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="aspect-[4/3] w-full object-cover"
                      />
                    ) : (
                      <img
                        src={img}
                        alt={`${project.title} on-site photo ${i + 1}`}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <CTA />
    </>
  );
}
