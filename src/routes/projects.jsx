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
      { property: "og:url", content: "https://bhartientreprise.in/projects" },
      { name: "twitter:title", content: "Projects Portfolio — Bharti Enterprises | bhartientreprise.in" },
      { name: "twitter:description", content: "Portfolio of construction and infrastructure projects delivered by Bharti Enterprises across India." },
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

  return (
    <div
      ref={ref}
      className="group flex flex-col lg:flex-row gap-6 lg:gap-12 items-start justify-center lg:justify-start lg:pl-[5vw] w-full"
    >
      {/* Left side details (Right Aligned on desktop) */}
      <div className="flex flex-col items-start lg:items-end gap-1 w-full lg:w-[200px] pt-2 lg:pt-8 flex-shrink-0 text-left lg:text-right">
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
      </div>

      {/* Right side image / inline horizontal gallery */}
      <motion.div
        layout
        className={`relative ${isActive
            ? 'w-[100vw] -ml-8 px-8 sm:px-0 sm:ml-0 sm:w-full flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide'
            : 'w-full aspect-[4/3] sm:aspect-auto sm:h-[250px] lg:h-[350px] sm:w-fit cursor-pointer overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300'
          }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
        `}</style>

        {/* Main Cover Image */}
        <motion.div
          layout
          onClick={isActive ? onClose : onClick}
          className={`flex-shrink-0 cursor-pointer origin-center relative overflow-hidden rounded-xl ${isActive ? 'w-[85vw] sm:w-fit h-[400px] sm:h-[300px] lg:h-[450px] snap-center sm:snap-start' : 'w-full h-full'
            }`}
        >
          {project.image.includes('.mp4') ? (
            <motion.video
              layoutId={isActive ? undefined : `project-media-${project.slug}`}
              style={{ scale: isActive ? 1 : scale }}
              src={project.image}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full sm:w-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <motion.img
              layoutId={isActive ? undefined : `project-media-${project.slug}`}
              style={{ scale: isActive ? 1 : scale }}
              src={project.image}
              alt={project.title}
              title={project.title}
              loading="lazy"
              className="h-full w-full sm:w-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </motion.div>

        {/* Gallery Images (fade in when active on desktop) */}
        {isActive && project.images && project.images.map((img, i) => {
          const isVideo = img.includes('.mp4');
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + (i * 0.05), duration: 0.4 }}
              className="flex-shrink-0 w-[85vw] sm:w-fit h-[400px] sm:h-[300px] lg:h-[450px] snap-center sm:snap-start overflow-hidden rounded-xl shadow-md relative group/item"
            >
              {isVideo ? (
                <video src={img} autoPlay loop muted playsInline className="h-full w-full sm:w-auto object-cover" />
              ) : (
                <img src={img} alt={`${project.title} — project image ${i + 1}`} title={project.title} loading="lazy" className="h-full w-full sm:w-auto object-cover" />
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
      
      // Allow DOM to update then scroll to project
      setTimeout(() => {
        const el = document.getElementById(`project-${search.project}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [search.project]);

  // Close active project on vertical scroll
  useEffect(() => {
    if (!activeProject) return;

    let initialScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (Math.abs(window.scrollY - initialScrollY) > 50) {
        setActiveProject(null);
      }
    };

    const timer = setTimeout(() => {
      initialScrollY = window.scrollY;
      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeProject]);

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

      <div className="mx-auto max-w-[1400px] px-8 pb-32 lg:px-14 flex flex-col gap-16 lg:gap-24 overflow-hidden">
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
