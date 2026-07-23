import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bharti Enterprises" },
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
  return (
    <>
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
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Phone</div>
                    <div className="mt-1 text-lg">+91 8080669609</div>
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

