import { ContactCta } from "@/components/home/contact-cta";
import { DataPipeline } from "@/components/home/data-pipeline";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { CertificationsPreview } from "@/components/home/certifications-preview";
import { Services } from "@/components/home/services";
import { SkillsSection } from "@/components/home/skills-section";
import { StackMarquee } from "@/components/home/stack-marquee";
import { StatsBar } from "@/components/home/stats-bar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <StatsBar />
      <FeaturedProjects />
      <Services />
      <DataPipeline />
      <SkillsSection />
      <CertificationsPreview />
      <ContactCta />
    </>
  );
}
