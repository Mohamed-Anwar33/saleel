import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bed, Bath, Maximize, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import pdfA1 from "../../images/floor plane/A1 - MENA 46 - FURNITURE PLAN - 20240701.pdf";
import pdfA2 from "../../images/floor plane/A2 - MENA 46 - FURNITURE PLAN - 20240701.pdf";
import pdfA3 from "../../images/floor plane/A3 - MENA 46 - FURNITURE PLAN - 20240701.pdf";
const UnitTypes = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const [selectedUnit, setSelectedUnit] = useState("one-bedroom");
  const units = {
    "one-bedroom": {
      title: t("unit_one_title", "تصميم مدمج"),
      area: t("unit_one_area", "مساحات محسوبة بعناية"),
      price: t("unit_one_price", "تصميم ذكي"),
      bedrooms: 1,
      bathrooms: 1,
      pdf: pdfA1,
      description: t("unit_one_desc", "مثالية للأفراد العصريين الذين يقدرون الجودة والأناقة"),
      features: [
        t("unit_one_feature1", "غرفة نوم أنيقة ومريحة"),
        t("unit_one_feature2", "حمام فاخر بتشطيبات راقية"),
        t("unit_one_feature3", "مطبخ مجهز بأحدث التقنيات"),
        t("unit_one_feature4", "إطلالة مميزة وطبيعية"),
        t("unit_one_feature5", "تصميم داخلي متطور")
      ]
    },
    "two-bedroom": {
      title: t("unit_two_title", "تصميم عائلي"),
      area: t("unit_two_area", "مساحات مريحة ومدروسة"),
      price: t("unit_two_price", "تخطيط مثالي"),
      bedrooms: 2,
      bathrooms: 2,
      pdf: pdfA2,
      description: t("unit_two_desc", "تصميم مثالي للعائلات النامية التي تبحث عن الراحة والأناقة"),
      features: [
        t("unit_two_feature1", "غرف نوم واسعة ومريحة"),
        t("unit_two_feature2", "حمامات راقية ومتطورة"),
        t("unit_two_feature3", "صالة مفتوحة وأنيقة"),
        t("unit_two_feature4", "مطبخ عصري ومتكامل"),
        t("unit_two_feature5", "شرفات جميلة ومريحة"),
        t("unit_two_feature6", "تشطيبات عالية الجودة")
      ]
    },
    "three-bedroom": {
      title: t("unit_three_title", "تصميم فاخر"),
      area: t("unit_three_area", "مساحات استثنائية وواسعة"),
      price: t("unit_three_price", "تخطيط راقي ومميز"),
      bedrooms: 3,
      bathrooms: 3,
      pdf: pdfA3,
      description: t("unit_three_desc", "الخيار الأمثل للعائلات المميزة التي تستحق الأفضل"),
      features: [
        t("unit_three_feature1", "غرف نوم ملكية فاخرة"),
        t("unit_three_feature2", "حمامات متطورة وراقية"),
        t("unit_three_feature3", "صالة فخمة وواسعة"),
        t("unit_three_feature4", "مطبخ متكامل بأحدث التجهيزات"),
        t("unit_three_feature5", "مساحات خارجية مميزة"),
        t("unit_three_feature6", "تشطيبات استثنائية وفاخرة"),
        t("unit_three_feature7", "مساحات خدمية متكاملة")
      ]
    }
  };
  const currentUnit = units[selectedUnit as keyof typeof units];
  return <section id="units" className="py-20 bg-secondary/20 pattern-overlay">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient py-[7px]">
  {t("units_section_title", "تصاميم الوحدات")}
</h2>
<p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
  {t("units_section_subtitle", "تشكيلة راقية من الوحدات السكنية المصممة بعناية لتناسب أرقى الأذواق")}
</p>
        </div>

        {/* Unit Type Tabs */}
        <Tabs value={selectedUnit} onValueChange={setSelectedUnit} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-background/50 backdrop-blur-sm p-2 rounded-xl border border-border/50">
            <TabsTrigger value="one-bedroom" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all duration-300">
  {t("unit_tab_one", "غرفة واحدة")}
</TabsTrigger>
<TabsTrigger value="two-bedroom" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all duration-300">
  {t("unit_tab_two", "غرفتين")}
</TabsTrigger>
<TabsTrigger value="three-bedroom" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all duration-300">
  {t("unit_tab_three", "ثلاث غرف")}
</TabsTrigger>
          </TabsList>

          {Object.entries(units).map(([key, unit]) => <TabsContent key={key} value={key} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Unit Details */}
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">{unit.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {unit.description}
                  </p>

                  {/* Unit Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                      <Bed className="w-8 h-8 text-primary mx-auto mb-2" />
                      
                      <div className="text-sm text-muted-foreground">{t("unit_bedrooms_label", "غرف نوم")}</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                      <Bath className="w-8 h-8 text-primary mx-auto mb-2" />
                      
                      <div className="text-sm text-muted-foreground">{t("unit_bathrooms_label", "حمامات")}</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                      <Maximize className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-lg font-bold text-foreground">{unit.area}</div>
                      <div className="text-sm text-muted-foreground">{t("unit_area_label", "المساحة")}</div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-foreground">{t("unit_features_title", "المميزات:")}</h4>
                    <ul className="space-y-2">
                      {unit.features.map((feature, index) => <li key={index} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>)}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/20">
                    <div className="text-center md:text-right">
                      <div className="text-2xl font-bold text-primary">{unit.price}</div>
                      <div className="text-sm text-muted-foreground">{t("unit_design_label", "التصميم المميز")}</div>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Button onClick={() => scrollToSection('interest-form')} variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                        <Eye className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                        {t("unit_view_details_btn", "عرض التفاصيل")}
                      </Button>
                      <Button onClick={() => scrollToSection('interest-form')} size="lg" className="btn-luxury">
                        {t("unit_register_interest_btn", "سجل اهتمامك")}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floor Plan Placeholder */}
                <div className="relative">
                  <Card className="p-8 bg-gradient-to-br from-card to-secondary/30 border-border/50 h-[500px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Maximize className="w-16 h-16 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold mb-4 text-foreground">{t("unit_floorplan_title", "مخطط الطابق")}</h4>
<p className="text-muted-foreground mb-6">
  {t("unit_floorplan_desc", "سيتم عرض المخطط التفصيلي هنا")}
</p>
<a href={unit.pdf} download={`floor-plan-${key}.pdf`}>
  <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
    {t("unit_download_floorplan_btn", "تحميل المخطط PDF")}
  </Button>
</a>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>)}
        </Tabs>
      </div>
    </section>;
};
export default UnitTypes;