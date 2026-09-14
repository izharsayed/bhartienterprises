import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bharti Enterprises — Ahmednagar, Maharashtra | bhartientreprise.in" },
      {
        name: "description",
        content:
          "Contact Bharti Enterprises (bhartientreprise.in) for civil construction, industrial sheds, road works, and pipeline projects. Headquartered in Ahmednagar, Maharashtra. Phone: +91 8799859344.",
      },
      {
        name: "keywords",
        content: "contact Bharti Enterprises, bhartientreprise.in, Bharti Enterprises phone number, Bharti Enterprises Ahmednagar, civil contractor Ahmednagar, Bharti Enterprises GSTIN",
      },
      { property: "og:title", content: "Contact Bharti Enterprises — Ahmednagar, Maharashtra | bhartientreprise.in" },
      { property: "og:description", content: "Get in touch with Bharti Enterprises (bhartientreprise.in) for construction and infrastructure project inquiries." },
      { property: "og:url", content: "https://bhartientreprise.in/contact" },
      { name: "twitter:title", content: "Contact Bharti Enterprises — Ahmednagar, Maharashtra | bhartientreprise.in" },
      { name: "twitter:description", content: "Get in touch with Bharti Enterprises for construction and infrastructure project inquiries." },
    ],
    links: [{ rel: "canonical", href: "https://bhartientreprise.in/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Bharti Enterprises",
    url: "https://bhartientreprise.in/contact",
    description: "Get in touch for construction, infrastructure, civil works, or project enquiries.",
    mainEntity: {
      "@type": "Organization",
      name: "Bharti Enterprises",
      alternateName: "bhartientreprise.in",
      taxID: "27BWIPS4029L1ZZ",
      telephone: "+91-8799859344",
      email: "Bhartienterprises.tsp@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "NIL, Dargah Dayra, Ahmadnagar",
        addressLocality: "Ahmednagar",
        addressRegion: "Maharashtra",
        postalCode: "414001",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8799859344",
        email: "Bhartienterprises.tsp@gmail.com",
        contactType: "customer support",
        areaServed: "IN",
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project."
        sub="Tell us what you're building we'll get back within one business day."
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="rounded-[32px] bg-[var(--brand)] p-8 text-white sm:p-10">
              <h2 className="font-display text-3xl font-semibold">Reach us directly</h2>
              <p className="mt-3 text-white/75">
                Prefer the phone or a direct email? Our leadership responds personally.
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Phone</div>
                    <a href="tel:+918799859344" aria-label="Call Bharti Enterprises" className="mt-1 text-lg block hover:text-white/90">
                      +91 8799859344
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Email</div>
                    <a href="mailto:Bhartienterprises.tsp@gmail.com" aria-label="Email Bharti Enterprises" className="mt-1 text-lg block hover:text-white/90">
                      Bhartienterprises.tsp@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Office Address</div>
                    <div className="mt-1 text-base text-white/90 leading-relaxed">
                      NIL, Dargah Dayra, Ahmadnagar, Ahmednagar, Maharashtra, 414001
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs uppercase tracking-widest text-white/50">GSTIN</div>
                <div className="mt-1 font-mono text-lg font-semibold tracking-wider">
                  27BWIPS4029L1ZZ
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-[32px] border border-border/60 bg-white p-8 sm:p-10">
              <h2 className="font-display text-3xl font-semibold text-[var(--brand)]">
                Chat with us on WhatsApp
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                We provide prompt communication on WhatsApp. Tap below to start a conversation with our team right away.
              </p>
              <div className="mt-8">
                <a
                  href="https://wa.me/918799859344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#25D366]/25 transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  <MessageCircle className="h-5 w-5" /> Message on WhatsApp (+91 8799859344)
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

