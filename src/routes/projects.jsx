import { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/site";
import { CTA } from "@/components/sections/CTA";
import { motion, useScroll, useTransform } from "framer-motion";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects Bharti Enterprises" },
      {
        name: "description",
        content:
          "Selected telecom, fiber, civil and electrical projects delivered across India.",
      },
      { property: "og:title", content: "Projects Bharti Enterprises" },
      { property: "og:description", content: "150+ projects delivered pan-India." },
    ],
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
      className="group flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center lg:justify-start lg:pl-[5vw]"
    >
      {/* Left side details (Right Aligned on desktop) */}
      <div className="flex flex-col items-start lg:items-end gap-1 w-full lg:w-[200px] pt-2 lg:pt-8 flex-shrink-0 text-left lg:text-right">
         {/* Small logo block */}
         <div className="h-6 w-10 bg-black text-white flex items-center justify-center font-bold text-[10px] mb-2">
           BE
         </div>
         <h2 className="text-base font-medium text-black">{project.title}</h2>
         <p className="text-[10px] text-gray-500 uppercase tracking-widest">{project.location}</p>
      </div>

      {/* Right side image / inline horizontal gallery */}
      <motion.div 
        layout
        className={`relative ${
          isActive 
            ? 'w-full flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4' 
            : 'h-[250px] lg:h-[350px] w-full max-w-[500px] cursor-pointer overflow-hidden'
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
          className={`flex-shrink-0 cursor-pointer origin-center relative overflow-hidden ${
            isActive ? 'w-[85vw] lg:w-[650px] h-[300px] lg:h-[450px] snap-start' : 'w-full h-full'
          }`}
        >
          <motion.img 
            layout
            style={{ scale: isActive ? 1 : scale }}
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Gallery Images (fade in when active) */}
        {isActive && project.images && project.images.map((img, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + (i * 0.05), duration: 0.4 }}
            className="flex-shrink-0 w-[85vw] lg:w-[650px] h-[300px] lg:h-[450px] snap-start overflow-hidden"
          >
            <img src={img} alt={`${project.title} gallery ${i}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

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
          <ProjectCard 
            key={project.slug} 
            project={project} 
            isActive={activeProject === project.slug}
            onClick={() => setActiveProject(project.slug)}
            onClose={() => setActiveProject(null)}
          />
        ))}
      </div>

      <CTA />
    </div>
  );
}
