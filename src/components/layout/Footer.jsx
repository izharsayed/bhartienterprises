import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { nav } from "@/data/site";
import logo2 from "@/assets/logo2.png";

export function Footer() {
  return (
    <footer role="contentinfo" aria-label="Site footer" className="relative mt-32 overflow-hidden border-t border-slate-200/80 bg-slate-50 text-slate-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 0%, rgba(37,99,235,0.06) 0%, transparent 60%), radial-gradient(50% 50% at 100% 100%, rgba(255,107,0,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" aria-label="Bharti Enterprises — Homepage" className="inline-block">
              <img
                src={logo2}
                alt="Bharti Enterprises"
                className="h-24 sm:h-28 w-auto object-contain -ml-2"
              />
            </Link>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">
              Bharti Enterprises (bhartientreprise.in) is a growing company committed to delivering reliable and
              high-quality construction solutions, infrastructure projects, and lasting values across
              India.
            </p>
            <div className="mt-8 space-y-3 text-sm text-slate-700">
              <a
                href="tel:+918799859344"
                aria-label="Call Bharti Enterprises"
                className="flex items-center gap-3 hover:text-[var(--brand)] transition-colors w-fit"
              >
                <Phone className="h-4 w-4 text-[var(--brand-accent)]" /> +91 8799859344
              </a>
              <a
                href="mailto:Bhartienterprises.tsp@gmail.com"
                aria-label="Email Bharti Enterprises"
                className="flex items-center gap-3 hover:text-[var(--brand)] transition-colors w-fit"
              >
                <Mail className="h-4 w-4 text-[var(--brand-accent)]" /> Bhartienterprises.tsp@gmail.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[var(--brand-accent)] shrink-0 mt-1" />
                <span>NIL, Dargah Dayra, Ahmadnagar, Ahmednagar, Maharashtra, 414001</span>
              </div>
              <div className="text-xs font-medium text-slate-500 pt-1">
                GSTIN: <span className="font-mono text-slate-700">27BWIPS4029L1ZZ</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    aria-label={`Go to ${n.label} page`}
                    className="group inline-flex items-center gap-1 text-[15px] text-slate-600 font-medium transition hover:text-[var(--brand)]"
                  >
                    {n.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0 text-[var(--brand-blue)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Capabilities
            </h3>
            <ul className="mt-5 space-y-3 text-[15px] text-slate-600">
              <li>Residential & Commercial Construction</li>
              <li>Industrial Projects & Sheds</li>
              <li>Institutional Buildings</li>
              <li>Roads & Civil Construction</li>
              <li>Foundation & RCC Work</li>
              <li>Pipeline & Utility Works</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Get in touch
            </h3>
            <p className="mt-5 text-[15px] text-slate-600">
              Have a project in mind? Let&apos;s build something enduring.
            </p>
            <Link
              to="/contact"
              aria-label="Start a project with Bharti Enterprises"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)] px-5 py-3 text-sm font-medium text-white shadow-md shadow-[var(--brand-accent)]/20 transition hover:brightness-110"
            >
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Bharti Enterprises. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a className="hover:text-slate-900 transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-slate-900 transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-slate-900 transition-colors" href="#">
              ISO 9001 : 2015
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
