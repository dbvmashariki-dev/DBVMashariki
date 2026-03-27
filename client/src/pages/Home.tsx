/* ==========================================================
   Home Page — Apex Consulting Group
   Sections: Navbar → Hero → Services → About → Process →
             Industries → Results → Team → CTA → Contact → Footer
   ========================================================== */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ResultsSection from "@/components/ResultsSection";
import TeamSection from "@/components/TeamSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <ResultsSection />
      <TeamSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </div>
  );
}
