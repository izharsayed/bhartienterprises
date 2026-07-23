import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ProjectCarousel } from "@/components/sections/ProjectCarousel";
import { LogoMarquee } from "@/components/sections/LogoMarquee";

import { ServicesGrid } from "@/components/sections/ServicesGrid";

import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <ProjectCarousel hideHeader={true} />
      <LogoMarquee />

      <ServicesGrid />

      <StatsBand />
      <Testimonials />
      <CTA />
    </>
  );
}
