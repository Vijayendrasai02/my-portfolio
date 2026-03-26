import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <SkillsSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <ProjectsSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <CertificatesSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </>
  );
}
