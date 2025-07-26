import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Phone, Mail, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('interest-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-accent/10 pattern-overlay">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Limited Offer Alert */}
          <div className="inline-flex items-center bg-luxury/10 border border-luxury/20 rounded-full px-6 py-2 mb-8">
            <Clock className="w-4 h-4 text-luxury mr-2" />
            <span className="text-luxury font-semibold text-sm">{t("cta_limited_offer", "عرض محدود !")}</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient px-0 py-[8px]">
            {t("cta_main_heading", "اكتشف سَلِيل")}
          </h2>
        
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            {t("cta_subheading", "كن جزءاً من مجتمع راقي يجمع بين الأصالة والحداثة في قلب الرياض")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-luxury text-xl px-12 py-8 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300" onClick={scrollToForm}>
              {t("cta_register_now_btn", "سجّل اهتمامك الآن")}
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-12 py-8 rounded-xl border-2 border-primary/30 bg-background/80 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300">
              <Phone className="w-6 h-6 mr-2" />
              {t("cta_call_us_btn", "اتصل بنا مباشرة")}
            </Button>
          </div>

          {/* Contact Cards - Updated Styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {[{
              icon: Mail,
              title: t("cta_contact_email_title", "البريد الإلكتروني"),
              info: "sales@menaco.sa",
              action: "mailto:sales@menaco.sa"
            }, {
              icon: MessageSquare,
              title: t("cta_contact_whatsapp_title", "واتساب"),
              info: t("cta_contact_whatsapp_info", "تواصل سريع ومباشر"),
              action: "https://wa.me/966500661260"
            }, {
              icon: Phone,
              title: t("cta_contact_phone_title", "اتصل بنا"),
              info: "+966 500 661 260",
              action: "tel:+966500661260"
            }].map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a key={index} href={contact.action} className="block group">
                  <Card className="p-6 text-center bg-card/60 backdrop-blur-sm border-border/50 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 h-full">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-foreground text-lg mb-1">{contact.title}</div>
                        <div className="text-muted-foreground text-md font-medium tracking-wider">{contact.info}</div>
                      </div>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;