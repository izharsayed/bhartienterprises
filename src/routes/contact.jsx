import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bharti Enterprises — Request a Project Quote" },
      {
        name: "description",
        content:
          "Contact Bharti Enterprises for telecom infrastructure, OFC fiber network laying, FTTH installation, civil construction, or electrical project enquiries. Response within 24 hours.",
      },
      {
        name: "keywords",
        content: "contact Bharti Enterprises, telecom project quote India, fiber network contractor contact, civil construction enquiry, electrical contractor India",
      },
      { property: "og:title", content: "Contact Bharti Enterprises — Request a Project Quote" },
      { property: "og:description", content: "Get in touch for telecom, OFC fiber, FTTH, civil or electrical project enquiries. Senior leadership responds within one business day." },
      { property: "og:url", content: "https://www.bhartienterprises.in/contact" },
      { name: "twitter:title", content: "Contact Bharti Enterprises — Request a Project Quote" },
      { name: "twitter:description", content: "Get in touch for telecom, fiber, civil or electrical project enquiries." },
    ],
    links: [{ rel: "canonical", href: "https://www.bhartienterprises.in/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Bharti Enterprises",
    url: "https://www.bhartienterprises.in/contact",
    description: "Get in touch for telecom, OFC fiber, FTTH, civil or electrical project enquiries.",
    mainEntity: {
      "@type": "Organization",
      name: "Bharti Enterprises",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8080669609",
        email: "hello@bhartienterprises.in",
        contactType: "customer support",
        areaServed: "IN"
      }
    }
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
              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <a
                    href="tel:+918080669609"
                    aria-label="Call Bharti Enterprises"
                    className="flex items-center gap-3"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Phone</div>
                    <a href="tel:+918080669609" aria-label="Call Bharti Enterprises" className="mt-1 text-lg block">+91 8080669609</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Email</div>
                    <a href="mailto:hello@bhartienterprises.in" aria-label="Email Bharti Enterprises" className="mt-1 text-lg block">hello@bhartienterprises.in</a>
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
            <div className="flex h-full flex-col justify-center rounded-[32px] border border-border/60 bg-white p-8 sm:p-10">
              <h2 className="font-display text-3xl font-semibold text-[var(--brand)]">
                Chat with us on WhatsApp
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                We have moved our contact channel to WhatsApp for faster and more direct communication. Tap the button below to start a conversation with our team right away.
              </p>
              <div className="mt-8">
                <a
                  href="https://wa.me/918080669609"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Bharti Enterprises on WhatsApp"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#25D366]/25 transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  <MessageCircle className="h-5 w-5" /> Message on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

