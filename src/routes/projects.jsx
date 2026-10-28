import { useState, useRef, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/site";
import { CTA } from "@/components/sections/CTA";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import logo1 from "@/assets/logo1.png";

export const Route = createFileRoute("/projects")({
  validateSearch: (search) => {
    return {
      project: search.project || undefined,
    }
  },
  head: () => ({
    meta: [
      { title: "Projects Portfolio — Bharti Enterprises | bhartientreprise.in" },
      {
        name: "description",
        content:
          "Explore completed and ongoing construction projects by Bharti Enterprises (bhartientreprise.in): school labs, grounds, industrial sheds, civil works, and pipeline infrastructure.",
      },
      {
        name: "keywords",
        content: "Bharti Enterprises projects, bhartientreprise.in portfolio, civil construction projects, school ground construction Ahmednagar, pipeline projects Maharashtra",
      },
      { property: "og:title", content: "Projects Portfolio — Bharti Enterprises | bhartientreprise.in" },
      { property: "og:description", content: "Portfolio of construction and infrastructure projects delivered by Bharti Enterprises across India." },
      { property: "og:image", content: "https://bhartientreprise.in/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://bhartientreprise.in/projects" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Projects Portfolio — Bharti Enterprises | bhartientreprise.in" },
      { name: "twitter:description", content: "Portfolio of construction and infrastructure projects delivered by Bharti Enterprises across India." },
      { name: "twitter:image", content: "https://bhartientreprise.in/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://bhartientreprise.in/projects" }],
  }),
  component: Projects,
});

function ProjectCard({ project, isActive, onClick, onClose }) {
  const ref = useRef(null);

  // Track scroll position of this specific card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale down when at edges of viewport, scale up to 1 when in center
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  // Exclude the cover image from the rest of the gallery to avoid duplication
  const otherImages = (project.images || []).filter((img) => img !== project.image);

  return (
    <div
      ref={ref}
      className="group flex flex-col lg:flex-row gap-6 lg:gap-12 items-start justify-center lg:justify-start lg:pl-[5vw] w-full"
    >
      {/* Left side details (Right Aligned on desktop) */}
      <div className="flex flex-col items-start lg:items-end gap-1 w-full lg:w-[200px] pt-2 lg:pt-6 flex-shrink-0 text-left lg:text-right">
        {/* Logo mark */}
        <img
          src={logo1}
          alt="Bharti Enterprises"
          className="h-8 w-auto object-contain mb-1.5"
        />
        <h2 className="font-display text-base font-semibold leading-snug text-[var(--brand)]">
          {project.title}
        </h2>
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {project.location}
        </p>
        {isActive && (
          <button
            onClick={onClose}
            className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-[var(--brand)] transition-colors"
          >
            <span>Close gallery</span>
            <span className="text-sm font-bold">&times;</span>
          </button>
        )}
      </div>

      {/* Right side image / inline horizontal gallery */}
      <motion.div
        layout
        className={`relative ${
          isActive
            ? 'w-screen -ml-4 px-4 sm:-ml-8 sm:px-8 lg:ml-0 lg:px-0 lg:w-full flex overflow-x-auto snap-x snap-mandatory gap-3.5 sm:gap-4 pb-4 scrollbar-hide'
            : 'w-full aspect-[1.92/1] sm:aspect-auto sm:h-[250px] lg:h-[350px] sm:w-fit cursor-pointer overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300 bg-white border border-slate-200/60'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
        `}</style>

        {/* 1. Main Cover Image (Feature Card from PDF) */}
        <motion.div
          layout
          onClick={isActive ? onClose : onClick}
          className={`flex-shrink-0 cursor-pointer origin-center relative overflow-hidden rounded-xl bg-white border border-slate-200/90 ${
            isActive
              ? 'w-[85vw] sm:w-fit h-[380px] sm:h-[300px] lg:h-[450px] snap-start'
              : 'w-full h-full'
          }`}
        >
          {/* Mobile active view: Covers full 380px card with photo on top and readable typography on bottom */}
          {isActive ? (
            <>
              <div className="flex sm:hidden flex-col h-full w-full justify-between text-left">
                <div className="h-[180px] w-full overflow-hidden bg-slate-100 flex-shrink-0">
                  <img
                    src={project.photo || project.heroImage || project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                  {project.badge && (
                    <div className="mb-1.5 self-start">
                      <span
                        className="inline-block bg-[#183B70] text-white font-display text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 shadow-sm"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%)' }}
                      >
                        {project.badge}
                      </span>
                    </div>
                  )}

                  <p className="font-sans text-[11px] leading-relaxed text-slate-700 font-normal mb-2 line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="w-8 h-0.5 bg-[#183B70] rounded-full mb-2" />

                  {project.points && project.points.length > 0 && (
                    <div className="space-y-1.5">
                      {project.points.slice(0, 3).map((pt, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] font-medium text-slate-800">
                          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#183B70] text-white flex-shrink-0">
                            <svg className="h-2 w-2 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="truncate">{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Desktop active view: Wide PDF presentation graphic */}
              <img
                src={project.image}
                alt={project.title}
                title={project.title}
                loading="lazy"
                className="hidden sm:block h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </>
          ) : (
            /* Closed card view (both mobile & desktop) */
            <motion.img
              layoutId={`project-media-${project.slug}`}
              style={{ scale }}
              src={project.image}
              alt={project.title}
              title={project.title}
              loading="lazy"
              className="h-full w-full sm:w-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </motion.div>

        {/* 2. Remaining Gallery Images (Appear after the cover image) */}
        {isActive &&
          otherImages.map((img, i) => {
            const isVideo = img.includes('.mp4');
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                className="flex-shrink-0 w-[76vw] sm:w-fit h-[380px] sm:h-[300px] lg:h-[450px] snap-start overflow-hidden rounded-xl shadow-md relative group/item bg-slate-100"
              >
                {isVideo ? (
                  <video
                    src={img}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full sm:w-auto object-cover"
                  />
                ) : (
                  <img
                    src={img}
                    alt={`${project.title} — site photo ${i + 1}`}
                    title={project.title}
                    loading="lazy"
                    className="h-full w-full sm:w-auto object-cover"
                  />
                )}
              </motion.div>
            );
          })}
      </motion.div>
    </div>
  );
}

function Projects() {
  const search = Route.useSearch();
  const [activeProject, setActiveProject] = useState(search.project || null);
  
  useEffect(() => {
    if (search.project) {
      setActiveProject(search.project);
      
      // Allow DOM to update then scroll smoothly to the active project
      const scrollTimer = setTimeout(() => {
        const el = document.getElementById(`project-${search.project}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const targetY = window.scrollY + rect.top - 100;
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
        }
      }, 150);

      return () => clearTimeout(scrollTimer);
    }
  }, [search.project]);

  return (
    <div className="bg-neutral-50 pt-32 min-h-screen">
      {/* Editorial headline */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-8 pb-20 text-center lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex rounded-full border border-[var(--brand)]/12 bg-[var(--brand)]/4 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--brand)]"
        >
          Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-4xl font-display text-[50px] font-normal leading-[1.01] tracking-tight text-[var(--brand)]"
        >
          Engineering India's{" "}
          <span
            style={{
              background:
                "linear-gradient(120deg, var(--brand) 0%, var(--brand-blue) 55%, var(--brand-accent) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            critical networks,
          </span>{" "}
          at every scale.
        </motion.h1>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 pb-32 lg:px-14 flex flex-col gap-16 lg:gap-24">
        {projects.map((project) => (
          <div id={`project-${project.slug}`} key={project.slug}>
            <ProjectCard
              project={project}
              isActive={activeProject === project.slug}
              onClick={() => setActiveProject(project.slug)}
              onClose={() => setActiveProject(null)}
            />
          </div>
        ))}
      </div>

      <CTA />
    </div>
  );
}
