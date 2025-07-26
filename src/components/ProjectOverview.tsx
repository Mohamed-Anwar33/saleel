import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Home, Calendar, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";
const ProjectOverview = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: MapPin,
      title: t("overview_feature_location_title", "الموقع المميز"),
      description: t("overview_feature_location_desc", "في قلب حي القيروان، أحد أرقى أحياء الرياض")
    },
    {
      icon: Home,
      title: t("overview_feature_design_title", "التصميم المعماري"),
      description: t("overview_feature_design_desc", "طراز سلماني نجدي أصيل بلمسات عصرية فاخرة")
    },
    {
      icon: Calendar,
      title: t("overview_feature_quality_title", "الجودة والفخامة"),
      description: t("overview_feature_quality_desc", "أعلى معايير التشطيب والتصميم الداخلي")
    }
  ];
  return <section id="overview" className="py-20 bg-secondary/30 pattern-overlay">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient px-[2px] py-[9px] my-px mx-px">
  {t("overview_title", "رؤية المشروع")}
</h2>
<p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
  {t("overview_subtitle", "مشروع يعكس الأصالة والحداثة، مستوحى من الطراز السلماني والنجدية الأصيلة")}
</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>)}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
  <h3 className="text-3xl font-bold mb-6 text-foreground">{t("overview_details_title", "تفاصيل المشروع")}</h3>
  <div className="space-y-4">
    {[
      { label: t("overview_details_location_label", "الموقع"), value: t("overview_details_location_value", "الرياض - حي القيروان") },
      { label: t("overview_details_type_label", "نوع العقار"), value: t("overview_details_type_value", "وحدات سكنية فاخرة") },
      { label: t("overview_details_style_label", "الطراز المعماري"), value: t("overview_details_style_value", "سلماني نجدي معاصر") },
      { label: t("overview_details_area_label", "المساحات"), value: t("overview_details_area_value", "مساحات متنوعة ومدروسة") },
      { label: t("overview_details_designs_label", "التصاميم"), value: t("overview_details_designs_value", "تصاميم متعددة وراقية") },
      { label: t("overview_details_delivery_label", "تاريخ التسليم"), value: t("overview_details_delivery_value", "قريباً بإذن الله") },
      { label: t("overview_details_payment_label", "نظام الدفع"), value: t("overview_details_payment_value", "تسهيلات دفع مرنة") }
    ].map((item, index) => (
      <div key={index} className="flex justify-between items-center py-2 border-b border-border/30">
        <span className="text-muted-foreground">{item.label}:</span>
        <span className="font-semibold text-foreground">{item.value}</span>
      </div>
    ))}
  </div>
</div>

          <div className="text-center lg:text-right">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h4 className="text-2xl font-bold mb-4 text-foreground">{t("overview_brochure_title", "احصل على الكتيب التعريفي")}</h4>
<p className="text-muted-foreground mb-6 leading-relaxed">
  {t("overview_brochure_desc", "تصفح تفاصيل المشروع الكاملة، المخططات، والأسعار في كتيبنا التعريفي المصمم خصيصاً لك")}
</p>
<Button asChild size="lg" className="w-full btn-luxury text-lg py-6 rounded-xl">
  <a href="/سَلِيل.pdf" download="سَلِيل-كتيب-المشروع.pdf">
    <Download className="w-5 h-5 mr-2" />
    {t("overview_brochure_button", "تحميل الكتيب التعريفي PDF")}
  </a>
</Button>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ProjectOverview;