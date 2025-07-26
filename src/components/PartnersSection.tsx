import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const PartnersSection = () => {
  const { t } = useTranslation();
  const partners = ["/lovable-uploads/ff847bdb-4398-4c29-a57f-1264ea11ab81.png",
  // إتمام
  "/lovable-uploads/b247048b-068d-4bd6-8f7a-0abc8c032f11.png",
  // مُلاك
  "/lovable-uploads/b9f43572-1263-4214-a5ee-a538900e1484.png",
  // مكتب تطوير بوابة الدرعية
  "/lovable-uploads/72d2578a-f7e7-482d-b9d1-299e80f131b7.png",
  // قرز الوحدات العقارية
  "/lovable-uploads/8f514e39-d826-4066-a18f-f85b51379a35.png",
  // إيجار
  "/lovable-uploads/73a979be-cf00-4c51-ab9e-ad0fe782918e.png",
  // وزارة الشؤون البلدية
  "/lovable-uploads/93756382-98f4-4b01-b23e-42151f77d9fb.png",
  // روشن
  "/lovable-uploads/112532e7-0055-4b20-87e5-d34f03db5287.png" // وافي
  ];

  return <section className="py-16 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient py-[9px] px-px">
          {t("partners_section_title", "شركاء النجاح")}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
<div key={index} className="bg-card/50 p-6 rounded-2xl hover:bg-card/80 transition-all duration-300 hover:scale-105 border border-border/30">
              <img src={partner} alt={t("partners_image_alt", "شريك نجاح")} className="w-full h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default PartnersSection;