import { Card } from "@/components/ui/card";
import { Waves, Dumbbell, Shield, Smartphone, Car, Trees, Baby, Coffee, ShoppingBag, GraduationCap, Hospital, MapPin } from "lucide-react";
import poolImage from "@/assets/amenities-pool.jpg";
import heroImage from "@/assets/hero-building.jpg";
import apartmentImage from "@/assets/apartment-interior.jpg";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react';

const AmenitiesSection = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const amenityImages = [
    { src: poolImage, alt: t("pool_image_alt", "Project Pool") },
    { src: heroImage, alt: t("hero_image_alt", "Saleel - Luxury Real Estate Project in Riyadh") },
    { src: apartmentImage, alt: t("apartment_image_alt", "Apartment Interior") },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % amenityImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [amenityImages.length]);
  const amenities = [
    {
      icon: Waves,
      title: t("amenities_pool_title", "مسبح"),
      description: t("amenities_pool_desc", "مسبح رئيسي مع منطقة استرخاء")
    },
    {
      icon: Dumbbell,
      title: t("amenities_gym_title", "صالة رياضية"),
      description: t("amenities_gym_desc", "صالة رياضية مجهزة بأحدث الأجهزة")
    },
    {
      icon: Shield,
      title: t("amenities_security_title", "أمن وحماية"),
      description: t("amenities_security_desc", "نظام أمني متطور على مدار الساعة")
    },
    {
      icon: Smartphone,
      title: t("amenities_smart_entry_title", "مدخل ذكي"),
      description: t("amenities_smart_entry_desc", "نظام دخول ذكي بأحدث التقنيات")
    },
    {
      icon: Car,
      title: t("amenities_parking_title", "مواقف سيارات"),
      description: t("amenities_parking_desc", "مواقف مظللة ومؤمنة للسيارات")
    },
    {
      icon: Trees,
      title: t("amenities_garden_title", "مساحات خضراء"),
      description: t("amenities_garden_desc", "حدائق ومساحات خضراء للاستجمام")
    },
    {
      icon: Baby,
      title: t("amenities_kids_title", "منطقة أطفال"),
      description: t("amenities_kids_desc", "منطقة ألعاب آمنة ومخصصة للأطفال")
    },
    {
      icon: Coffee,
      title: t("amenities_cafe_title", "كافيه"),
      description: t("amenities_cafe_desc", "كافيه ومنطقة جلوس مريحة")
    }
  ];
  const nearbyServices = [
    {
      icon: ShoppingBag,
      title: t("nearby_shopping_title", "مراكز تسوق"),
      description: t("nearby_shopping_desc", "بالقرب من أفضل مراكز التسوق والمولات الحديثة")
    },
    {
      icon: GraduationCap,
      title: t("nearby_education_title", "مؤسسات تعليمية"),
      description: t("nearby_education_desc", "مجموعة متميزة من المؤسسات التعليمية الحكومية والأهلية والعالمية")
    },
    {
      icon: Hospital,
      title: t("nearby_medical_title", "مرافق طبية"),
      description: t("nearby_medical_desc", "قريب من أفضل المرافق الطبية والمستشفيات المتخصصة")
    },
    {
      icon: MapPin,
      title: t("nearby_government_title", "خدمات حكومية"),
      description: t("nearby_government_desc", "سهولة الوصول للخدمات الحكومية والمؤسسات الرسمية")
    }
  ];
  return <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 px-[6px] py-[20px] mx-0 my-0">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient py-[5px]">
  {t("amenities_section_title", "المرافق والمميزات")}
</h2>
<p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
  {t("amenities_section_subtitle", "تجربة حياة متكاملة بمرافق راقية وخدمات استثنائية")}
</p>
        </div>

        {/* Main Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenities.map((amenity, index) => <Card key={index} className="group p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/30">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <amenity.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{amenity.title}</h3>
              <p className="text-muted-foreground text-sm">{amenity.description}</p>
            </Card>)}
        </div>

        {/* Featured Amenity - Pool */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative w-full h-[400px] rounded-2xl shadow-2xl overflow-hidden">
            {amenityImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-2000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">{t("featured_amenity_title", "مرافق ترفيهية متكاملة")}</h3>
<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
  {t("featured_amenity_desc", "يضم المشروع مسبحاً رئيسياً مع منطقة استرخاء مصممة بأرقى المعايير العالمية، بالإضافة إلى مناطق ترفيهية متنوعة لجميع أفراد العائلة. تم تصميم كل مرفق ليوفر تجربة استثنائية تجمع بين الراحة والفخامة.")}
</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">{t("security_label", "أمان وحراسة")}</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                
                <div className="text-sm text-muted-foreground px-[3px] mx-0">{t("smart_monitoring_label", "مراقبة ذكية")}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Services */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground py-[2px]">{t("nearby_services_title", "قريب من كل ما تحتاجه")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyServices.map((service, index) => <Card key={index} className="p-6 text-center bg-gradient-to-br from-secondary/50 to-accent/10 border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AmenitiesSection;