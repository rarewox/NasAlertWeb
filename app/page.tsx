import AboutSection from "@/components/nasalert/AboutSection";
import ContactSection from "@/components/nasalert/ContactSection";
import FaqSection from "@/components/nasalert/FaqSection";
import FeaturesSection from "@/components/nasalert/FeaturesSection";
import Header from "@/components/nasalert/Header";
import HeroSection from "@/components/nasalert/HeroSection";
import HowItWorksSection from "@/components/nasalert/HowItWorksSection";
import ImpactCountersSection from "@/components/nasalert/ImpactCountersSection";
import ProductPreviewSection from "@/components/nasalert/ProductPreviewSection";
import SponsorProfileSection from "@/components/nasalert/SponsorProfileSection";
import SponsorStrip from "@/components/nasalert/SponsorStrip";
import UseCasesSection from "@/components/nasalert/UseCasesSection";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white text-road-900">
      <Header />
      <main>
        <HeroSection />
        <SponsorStrip />
        <AboutSection />
        <HowItWorksSection />
        <FeaturesSection />
        <UseCasesSection />
        <ImpactCountersSection />
        <ProductPreviewSection />
        <SponsorProfileSection />
        <FaqSection />
        <ContactSection />
      </main>
    </div>
  );
}
