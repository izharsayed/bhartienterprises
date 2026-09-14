import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "@/data/site";
import { cn } from "@/lib/utils";
import logo1 from "@/assets/logo1.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 transition-all sm:px-6",
          scrolled
            ? "glass border-white/60 shadow-[0_10px_40px_-15px_rgba(11,31,58,0.25)]"
            : "border-transparent bg-transparent",
        )}
      >
        <Link to="/" aria-label="Bharti Enterprises — Homepage" className="flex items-center gap-2.5 shrink-0">
          <img
            src={logo1}
            alt="Bharti Enterprises"
            className="h-10 w-auto object-contain"
          />
          <div className="leading-tight">
            <div className="font-display text-[15px] font-semibold text-[var(--brand)]">
              Bharti Enterprises
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Infrastructure · Engineering
            </div>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-foreground/75 transition hover:text-[var(--brand)]"
              >
                <span className="relative z-10">{item.label}</span>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--brand)]/8"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            aria-label="Request a project quote from Bharti Enterprises"
            className="hidden items-center gap-1.5 rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--brand-blue)] hover:shadow-lg hover:shadow-[var(--brand-blue)]/30 sm:inline-flex"
          >
            Request Quote <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-white/70 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            aria-label="Mobile navigation menu"
            className="glass absolute left-3 right-3 top-20 rounded-3xl border border-white/60 p-4 shadow-2xl lg:hidden"
          >
            <div className="grid gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base font-medium transition",
                    pathname === item.to
                      ? "bg-[var(--brand)] text-white"
                      : "hover:bg-[var(--brand)]/5",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
