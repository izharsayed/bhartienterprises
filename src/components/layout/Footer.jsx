import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { nav } from "@/data/site";

export function Footer() {
  return (
    <footer role="contentinfo" aria-label="Site footer" className="relative mt-32 overflow-hidden bg-[var(--brand)] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 0%, color-mix(in oklab, var(--brand-blue) 70%, transparent) 0%, transparent 60%), radial-gradient(50% 50% at 100% 100%, color-mix(in oklab, var(--brand-accent) 60%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 backdrop-blur">
                <span className="font-display text-base font-bold">BE</span>
              </div>
              <div className="font-display text-lg font-semibold">Bharti Enterprises</div>
            </div>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
              Building India&apos;s digital and civil backbone. Telecom, fiber, electrical,
              engineering delivered with the discipline of a global partner and the agility of a
              specialist.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/80">
              <div className="flex flex-col gap-2">
                <a href="tel:+919158077725" aria-label="Call Bharti Enterprises" className="flex items-center gap-3 hover:text-white transition-colors w-fit">
                  <Phone className="h-4 w-4 text-[var(--brand-accent)]" /> +91 ------7725
                </a>
                <a href="tel:+917887909039" aria-label="Call Bharti Enterprises" className="flex items-center gap-3 hover:text-white transition-colors w-fit ml-7">
                  +91 ------9039
                </a>
              </div>
              <a href="mailto:hello@bhartienterprises.in" aria-label="Email Bharti Enterprises" className="flex items-center gap-3 hover:text-white transition-colors w-fit">
                <Mail className="h-4 w-4 text-[var(--brand-accent)]" /> hello@bhartienterprises.in
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[var(--brand-accent)]" /> Corporate Office · India
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    aria-label={`Go to ${n.label} page`}
                    className="group inline-flex items-center gap-1 text-[15px] text-white/85 transition hover:text-white"
                  >
                    {n.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Capabilities
            </h3>
            <ul className="mt-5 space-y-3 text-[15px] text-white/85">
              <li>Telecom Infrastructure</li>
              <li>Fiber Network (OFC/FTTH)</li>
              <li>Civil Construction</li>
              <li>Electrical & Substations</li>
              <li>Engineering Services</li>
              <li>Managed Outsourcing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Get in touch
            </h3>
            <p className="mt-5 text-[15px] text-white/85">
              Have a project in mind? Let&apos;s build something enduring.
            </p>
            <Link
              to="/contact"
              aria-label="Start a project with Bharti Enterprises"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)] px-5 py-3 text-sm font-medium text-white transition hover:brightness-110"
            >
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Bharti Enterprises. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#">
              Terms
            </a>
            <a className="hover:text-white" href="#">
              ISO 9001 : 2015
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
