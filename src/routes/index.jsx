import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
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
      <LogoMarquee />
      <AboutSplit />
      <ServicesGrid />
      <FeaturedProjects />
      <StatsBand />
      <Testimonials />
      <CTA />
    </>
  );
}
