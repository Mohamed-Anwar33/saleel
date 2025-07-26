import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ExternalLink, Home } from "lucide-react";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaTiktok, FaSnapchatGhost } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/menaco_sa/",
      label: "Instagram"
    },
    {
      icon: FaTwitter,
      url: "https://x.com/menaco_sa",
      label: "X"
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/@mena_development",
      label: "YouTube"
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/company/menaco-sa/",
      label: "LinkedIn"
    },
    {
      icon: FaTiktok,
      url: "https://www.tiktok.com/@menaco_sa",
      label: "TikTok"
    },
    {
      icon: FaSnapchatGhost,
      url: "https://www.snapchat.com/add/menaco_sa",
      label: "Snapchat"
    }
  ];
  const quickLinks = [{
    label: t("footer_link_about", "عن المشروع"),
    href: "#overview"
  }, {
    label: t("footer_link_units", "أنواع الوحدات"),
    href: "#units"
  }, {
    label: t("footer_link_amenities", "المرافق"),
    href: "#amenities"
  }, {
    label: t("footer_link_location", "الموقع"),
    href: "#location"
  }, {
    label: t("footer_link_gallery", "معرض الصور"),
    href: "#gallery"
  }, {
    label: t("footer_link_contact", "تواصل معنا"),
    href: "#interest-form"
  }];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gradient-to-b from-background to-secondary/30 pattern-overlay">
      {/* Fixed Mobile CTA Button */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <Button className="w-full btn-luxury text-lg py-4 rounded-xl shadow-2xl animate-glow" onClick={() => {
        const formElement = document.getElementById('interest-form');
        formElement?.scrollIntoView({
          behavior: 'smooth'
        });
      }}>
          {t("cta_register_now_btn", "سجّل اهتمامك الآن")}
        </Button>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-6">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gradient">{t("footer_company_name", "سليل")}</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
  {t("footer_company_desc", "مشروع عقاري فاخر يجمع بين عراقة التراث السعودي وحداثة التصميم المعاصر في قلب الرياض.")}
</p>
            <div className="flex space-x-3 space-x-reverse">
              {socialLinks.map((social, index) => <a key={index} href={social.url} className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300" aria-label={social.label}>
                  <social.icon className="w-4 h-4 text-primary" />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-foreground">{t("footer_quick_links_title", "روابط سريعة")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-foreground">{t("footer_contact_title", "معلومات التواصل")}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">{t("footer_contact_address_title", "العنوان")}</div>
                  <p className="text-muted-foreground text-sm">
  {t("footer_contact_address_line1", "حي الملقا، الرياض")}<br />
  {t("footer_contact_address_line2", "المملكة العربية السعودية")}
</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">{t("footer_contact_phone_title", "الهاتف")}</div>
                  <p className="text-muted-foreground text-sm">+966 500 661 260</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">{t("footer_contact_email_title", "البريد الإلكتروني")}</div>
                  <p className="text-muted-foreground text-sm">sales@menaco.sa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-foreground">{t("footer_newsletter_title", "ابق على تواصل")}</h4>
            <p className="text-muted-foreground mb-4 text-sm">
  {t("footer_newsletter_desc", "اشترك للحصول على آخر التحديثات والعروض الخاصة")}
</p>
            <div className="space-y-3">
              <input type="email" placeholder={t("footer_newsletter_placeholder", "أدخل بريدك الإلكتروني")} className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:border-primary/50 focus:outline-none text-sm" />
              <Button size="sm" className="w-full btn-luxury text-sm py-3">
  {t("footer_newsletter_subscribe_btn", "اشتراك")}
</Button>
            </div>
            
            {/* Back to Top */}
            <Button variant="outline" size="sm" className="w-full mt-4 border-primary/30 hover:bg-primary/10" onClick={scrollToTop}>
  {t("footer_back_to_top_btn", "العودة للأعلى")}
</Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
  {t("footer_copyright", { year: currentYear })}
</div>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
  {t("footer_privacy_policy", "سياسة الخصوصية")}
</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
  {t("footer_terms_of_use", "شروط الاستخدام")}
</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
  {t("footer_disclaimer", "إخلاء المسؤولية")}
</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;