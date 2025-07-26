import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";
import apartmentImage from "@/assets/apartment-interior.jpg";
import poolImage from "@/assets/amenities-pool.jpg";
const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    { src: heroImage, alt: t("hero_image_alt", "Saleel - Luxury Real Estate Project in Riyadh") },
    { src: apartmentImage, alt: t("apartment_image_alt", "Apartment Interior") },
    { src: poolImage, alt: t("pool_image_alt", "Project Pool") }
  ];
  const isArabic = i18n.language === "ar";
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
  <div key={index} className={`absolute inset-0 transition-opacity duration-2000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
    <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-10000" />
  </div>
))}
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/40" />
      </div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="w-full h-full animate-pulse bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      </div>



      {/* Content */}
      <div className="relative z-20 container mx-auto text-center px-0 py-[111px]">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Project Name */}
          <div className="mb-8 flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-semibold text-primary/80 bg-transparent">
              {t("project_name", "القيروان")}
            </div>
          </div>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl mb-8 text-foreground/90 max-w-4xl mx-auto leading-relaxed font-medium">
  {t("hero_tagline", "حيث تلتقي الأصالة السلمانية بالفخامة العصرية")}
</p>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-[#0c0c0c]/[0.89]">
  {t("hero_subtitle", "مشروع يعكس الأصالة والحداثة، مستوحى من الطراز السلماني والنجدية الأصيلة، مع لمسات معمارية فاخرة تعبر عن الفخامة والرقي في قلب حي القيروان")}
</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="btn-luxury text-lg px-8 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300" onClick={() => scrollToSection('interest-form')}>
  {t("register_interest", "سجّل اهتمامك الآن")}
</Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 border-primary/30 bg-background/80 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300" onClick={() => scrollToSection('location')}>
  <MapPin className="w-5 h-5 mr-2" />
  {t("view_location", "عرض الموقع")}
</Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
  { label: t("stat_location_label", "الموقع"), value: t("stat_location_value", "حي القيروان") },
  { label: t("stat_style_label", "الطراز"), value: t("stat_style_value", "سلماني نجدي") },
  { label: t("stat_delivery_label", "التسليم"), value: t("stat_delivery_value", "قريباً") }
].map((stat, index) => (
  <div key={index} className={`bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50 transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
    <div className="text-sm text-muted-foreground">{stat.label}</div>
  </div>
))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary/60 px-0 my-0 py-0 mx-0" />
        </div>
      </div>
    </section>;
};
export default HeroSection;