import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bharti Enterprises" },
      {
        name: "description",
        content:
          "Get in touch with Bharti Enterprises to discuss your telecom, fiber, civil or electrical project.",
      },
      { property: "og:title", content: "Contact Bharti Enterprises" },
      { property: "og:description", content: "Let's build something enduring together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project."
        sub="Tell us what you're building — we'll get back within one business day."
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="rounded-[32px] bg-[var(--brand)] p-8 text-white sm:p-10">
              <h2 className="font-display text-3xl font-semibold">Reach us directly</h2>
              <p className="mt-3 text-white/75">
                Prefer the phone or a direct email? Our leadership responds personally.
              </p>
              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Phone</div>
                    <div className="mt-1 text-lg">+91 98xxx xxxxx</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Email</div>
                    <div className="mt-1 text-lg">hello@bhartienterprises.in</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Office</div>
                    <div className="mt-1 text-lg">Corporate HQ, India</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs uppercase tracking-widest text-white/50">Response SLA</div>
                <div className="mt-1 font-display text-2xl">&lt; 24 hours</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-[32px] border border-border/60 bg-white p-8 sm:p-10"
            >
              <h2 className="font-display text-3xl font-semibold text-[var(--brand)]">
                Project enquiry
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Service of interest
                  </label>
                  <select className="mt-2 h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm outline-none transition focus:border-[var(--brand-blue)] focus:ring-4 focus:ring-[var(--brand-blue)]/10">
                    <option>Telecom Infrastructure</option>
                    <option>Fiber Network</option>
                    <option>Civil Construction</option>
                    <option>Electrical</option>
                    <option>Engineering Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Tell us about the project
                  </label>
                  <textarea
                    rows={5}
                    className="mt-2 w-full resize-none rounded-2xl border border-border bg-white p-4 text-sm outline-none transition focus:border-[var(--brand-blue)] focus:ring-4 focus:ring-[var(--brand-blue)]/10"
                    placeholder="Scope, geography, timeline, volume…"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[var(--brand)]/25 transition hover:-translate-y-0.5 hover:bg-[var(--brand-blue)]"
              >
                {sent ? (
                  "Thanks — we&apos;ll be in touch"
                ) : (
                  <>
                    Send enquiry <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm outline-none transition focus:border-[var(--brand-blue)] focus:ring-4 focus:ring-[var(--brand-blue)]/10"
      />
    </div>
  );
}
