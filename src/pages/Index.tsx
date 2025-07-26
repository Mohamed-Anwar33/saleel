import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProjectOverview from "@/components/ProjectOverview";
import AmenitiesSection from "@/components/AmenitiesSection";
import UnitTypes from "@/components/UnitTypes";
import InterestForm from "@/components/InterestForm";
import LocationMap from "@/components/LocationMap";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectOverview />
      <AmenitiesSection />
      <UnitTypes />
      <InterestForm />
      <LocationMap />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
