import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Hand } from "lucide-react";
import { projects } from "@/data/site";

export function ProjectCarousel({ hideHeader }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  // Helper to calculate distance from center
  const getOffset = (index) => {
    let offset = index - currentIndex;
    // Handle wrap around for infinite feel if desired, though simple bounds might be easier
    // For now, let's keep it simple: just render all items and translate the container.
    return offset;
  };

  return (
    <section aria-label="Featured projects portfolio" className="relative overflow-hidden bg-white pb-20 pt-32">
      {/* ── Editorial headline ── */}
      {!hideHeader ? (
        <div className="relative z-10 mx-auto max-w-[1400px] px-8 pb-16 text-center lg:px-14">
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
      ) : (
        <div className="relative z-10 mx-auto max-w-[1400px] px-8 pb-10 text-center lg:px-14">
          <h2 className="font-display text-4xl font-semibold leading-tight text-[var(--brand)] sm:text-5xl">
            Selected projects that
            <span className="text-gradient"> moved the needle.</span>
          </h2>
        </div>
      )}

      {/* ── Desktop 3D Carousel ── */}
      <div className="relative hidden md:flex h-[30vw] min-h-[350px] max-h-[600px] items-center justify-center overflow-hidden">
        {projects.map((p, i) => {
          const offset = getOffset(i);
          const isCenter = offset === 0;
          const isLeft = offset === -1 || (currentIndex === 0 && i === projects.length - 1);
          const isRight = offset === 1 || (currentIndex === projects.length - 1 && i === 0);
          
          let actualOffset = offset;
          if (currentIndex === 0 && i === projects.length - 1) actualOffset = -1;
          if (currentIndex === projects.length - 1 && i === 0) actualOffset = 1;

          // Render only nearby items
          const shouldRender = Math.abs(actualOffset) <= 2;
          if (!shouldRender) return null;

          // Determine position based on contiguous widths
          // Base width: 45vw. 
          // Scale 1: 0.7 (width = 31.5vw). Offset = 22.5 + 15.75 = 38.25vw
          // Scale 2: 0.5 (width = 22.5vw). Offset = 22.5 + 31.5 + 11.25 = 65.25vw
          let x = "0vw";
          let scale = 1;
          let opacity = 1;
          let zIndex = 10;
          
          if (actualOffset === 0) {
            x = "0vw";
            scale = 1;
            opacity = 1;
            zIndex = 20;
          } else if (actualOffset === -1) {
            x = "-38.25vw";
            scale = 0.7;
            opacity = 1;
            zIndex = 10;
          } else if (actualOffset === 1) {
            x = "38.25vw";
            scale = 0.7;
            opacity = 1;
            zIndex = 10;
          } else if (actualOffset === -2) {
            x = "-65.25vw";
            scale = 0.5;
            opacity = 1;
            zIndex = 5;
          } else if (actualOffset === 2) {
            x = "65.25vw";
            scale = 0.5;
            opacity = 1;
            zIndex = 5;
          }

          return (
            <motion.div
              key={p.slug}
              className="absolute top-0 flex h-full w-[45vw] items-center justify-center"
              initial={false}
              animate={{
                x,
                scale,
                opacity,
                zIndex,
              }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <div
                className="group relative h-full w-full overflow-hidden transition-all duration-500 cursor-grab active:cursor-grabbing"
                onClick={() => {
                  if (!isCenter) handleSelect(i);
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />

                {/* Dark gradient overlay for center */}
                {isCenter && (
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                )}
                
                {/* Custom Hand Cursor for Side Cards Only */}
                {!isCenter && (
                  <div className="absolute inset-0 z-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none bg-black/10">
                     <CursorTracker text={p.title} />
                  </div>
                )}

                {/* Content for center card */}
                <AnimatePresence>
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center p-8 text-center text-white sm:p-12 pointer-events-none"
                    >
                      <div className="mb-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] backdrop-blur-md">
                        {p.tag}
                      </div>
                      <h2 className="font-display text-3xl font-semibold leading-tight drop-shadow-lg sm:text-5xl md:text-6xl">
                        {p.title}
                      </h2>
                      <div className="mt-4 flex items-center justify-center gap-6 text-sm text-white/90">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {p.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {p.year}
                        </span>
                      </div>
                      
                      <Link
                        to="/projects"
                        search={{ project: p.slug }}
                        aria-label={`View details for ${p.title} project`}
                        className="pointer-events-auto group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--brand)] transition-colors hover:bg-gray-100"
                      >
                        View Project
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Mobile Snapping Carousel ── */}
      <div 
        className="flex md:hidden w-full overflow-x-auto snap-x snap-mandatory px-6 gap-4 pb-10 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
        `}</style>
        {projects.map((p) => (
          <div key={p.slug} className="w-[85vw] flex-shrink-0 snap-center relative rounded-2xl overflow-hidden shadow-lg h-[450px]">
            <img src={p.image} className="w-full h-full object-cover" alt={p.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start text-left text-white">
              <div className="mb-3 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest backdrop-blur-md">
                {p.tag}
              </div>
              <h3 className="font-display text-2xl font-semibold leading-tight mb-3">
                {p.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-white/90 mb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {p.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {p.year}
                </span>
              </div>
              <Link
                to="/projects"
                search={{ project: p.slug }}
                className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[var(--brand)] transition-colors hover:bg-gray-100"
              >
                View Project
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CursorTracker({ text }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div 
      className="absolute inset-0 z-50 pointer-events-auto"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      <motion.div
        className="pointer-events-none absolute flex items-center justify-center rounded-full bg-black/90 px-4 py-2 text-sm font-medium text-white shadow-xl backdrop-blur-md whitespace-nowrap"
        animate={{
          x: position.x - 40,
          y: position.y - 20,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.5 }}
      >
        {text}
      </motion.div>
    </div>
  );
}
