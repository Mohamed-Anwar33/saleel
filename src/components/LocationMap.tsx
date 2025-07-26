import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Car, Clock, ShoppingBag, GraduationCap, Hospital, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
const LocationMap = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const nearbyPlaces = [
    {
      icon: ShoppingBag,
      name: t("location_nearby_riyadh_gallery", "الرياض جاليري"),
      distance: t("location_nearby_riyadh_gallery_distance", "5 دقائق"),
      type: t("location_nearby_riyadh_gallery_type", "مول تجاري")
    },
    {
      icon: GraduationCap,
      name: t("location_nearby_international_schools", "مدارس دولية"),
      distance: t("location_nearby_international_schools_distance", "3 دقائق"),
      type: t("location_nearby_international_schools_type", "تعليم")
    },
    {
      icon: Hospital,
      name: t("location_nearby_king_fahad_hospital", "مستشفى الملك فهد"),
      distance: t("location_nearby_king_fahad_hospital_distance", "7 دقائق"),
      type: t("location_nearby_king_fahad_hospital_type", "طبي")
    },
    {
      icon: Building2,
      name: t("location_nearby_kafd", "مركز الملك عبدالله المالي"),
      distance: t("location_nearby_kafd_distance", "12 دقيقة"),
      type: t("location_nearby_kafd_type", "أعمال")
    }
  ];
  const roadAccess = [
    t("location_road_king_fahd", "طريق الملك فهد - دقيقتان"),
    t("location_road_prince_mohammed", "طريق الأمير محمد بن عبدالعزيز - 5 دقائق"),
    t("location_road_north_ring", "الطريق الدائري الشمالي - 8 دقائق"),
    t("location_road_airport", "طريق المطار - 15 دقيقة")
  ];
  return <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient py-[9px] px-px">
            {t("location_section_title", "الموقع الاستراتيجي")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("location_section_desc", "يقع مشروع سليل في حي الملقا الراقي، أحد أرقى أحياء الرياض مع سهولة الوصول لجميع الخدمات الأساسية")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <div className="relative">
            <Card className="p-4 bg-muted/20 border-border/50">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=%D8%A7%D9%84%D9%82%D9%8A%D8%B1%D9%88%D8%A7%D9%86%D8%8C%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%2013531%D8%8C%20%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>

            {/* Location Benefits */}
            <Card className="mt-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                <Car className="w-5 h-5 mr-2 text-primary" />
                {t("location_access_title", "سهولة الوصول")}
              </h4>
              <div className="space-y-2">
                {roadAccess.map((road, index) => (
                  <div key={index} className="text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 inline-block"></span>
                    {road}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Nearby Services */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground">{t("location_nearby_services_title", "الخدمات المجاورة")}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {nearbyPlaces.map((place, index) => <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <place.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">{place.name}</h4>
                      
                      
                    </div>
                  </div>
                </Card>)}
            </div>

            {/* Location Highlights */}
            <Card className="p-6 bg-gradient-to-br from-secondary/50 to-accent/10 border-border/50">
              <h4 className="text-xl font-semibold mb-4 text-foreground">{t("location_features_title", "مميزات الموقع")}</h4>
              <ul className="space-y-3">
                {[
                  t("location_feature_near_airport", "قريب من مطار الملك خالد الدولي"),
                  t("location_feature_diplomatic", "في قلب الحي الدبلوماسي"),
                  t("location_feature_green", "محاط بالمساحات الخضراء والحدائق"),
                  t("location_feature_malls", "قريب من أهم المراكز التجارية والترفيهية"),
                  t("location_feature_main_roads", "سهولة الوصول للطرق الرئيسية"),
                  t("location_feature_safe", "منطقة آمنة ومرغوبة للسكن")
                ].map((feature, index) => <li key={index} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>)}
              </ul>
            </Card>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Button size="lg" className="btn-luxury" onClick={() => scrollToSection('interest-form')}>
                <MapPin className="w-5 h-5 mr-2" />
                {t("location_cta_btn", "احجز زيارة للموقع")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LocationMap;