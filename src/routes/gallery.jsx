import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Bharti Enterprises" },
      {
        name: "description",
        content: "Photographs from the field — towers, fiber, civil and electrical sites.",
      },
      { property: "og:title", content: "Gallery — Bharti Enterprises" },
      { property: "og:description", content: "Field photography from active sites across India." },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: hero, span: "lg:row-span-2", alt: "Telecom tower at sunset" },
  { src: p2, span: "", alt: "Fiber optic infrastructure" },
  { src: p1, span: "lg:row-span-2", alt: "Cell tower construction" },
  { src: p4, span: "", alt: "Substation and grid lines" },
  { src: about, span: "", alt: "Engineering team on site" },
  { src: p3, span: "lg:col-span-2", alt: "Expressway construction" },
];

function Gallery() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="From the field."
        sub="Every photograph here is from an active or completed Bharti Enterprises deployment."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                onClick={() => setOpen(it.src)}
                className={`group relative overflow-hidden rounded-3xl border border-border/60 ${it.span}`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.08]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand)]/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 text-left text-sm text-white opacity-0 transition group-hover:opacity-100">
                  {it.alt}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-6 backdrop-blur"
          >
            <button
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white"
              onClick={() => setOpen(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={open}
              alt=""
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
