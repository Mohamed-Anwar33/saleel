import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone, Mail, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useForm } from '@formspree/react';

const InterestForm = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xeozgjgq");
  return <section id="interest-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 py-[6px]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient py-[3px]">
  {t("interest_section_title", "سجل اهتمامك الآن")}
</h2>
<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
  {t("interest_section_subtitle", "احجز مكانك في مشروع سليل واحصل على أفضل العروض والتسهيلات المتاحة")}
</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">{t("interest_why_title")}</h3>
                <div className="space-y-4">
                  {[t("interest_benefit1"), t("interest_benefit2"), t("interest_benefit3"), t("interest_benefit4"), t("interest_benefit5"), t("interest_benefit6")].map((benefit, index) => <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>)}
                </div>
              </Card>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground mb-4">{t("interest_contact_title")}</h4>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t("interest_phone_label", "الهاتف")}</div>
<div className="text-muted-foreground">+966 500 661 260</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t("interest_email_label", "البريد الإلكتروني")}</div>
<div className="text-muted-foreground">sales@menaco.sa</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <Card className="p-8 bg-card border-border/50 shadow-xl">
              {state.succeeded ? (
                <div className="text-center py-10">
                  <h3 className="text-2xl font-bold text-primary mb-4">{t("form_submit_success_title", "شكراً لك!")}</h3>
                  <p className="text-muted-foreground">{t("form_submit_success_desc", "تم استلام رسالتك بنجاح. سنتواصل معك قريباً.")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-semibold">{t("interest_name_label", "الاسم الكامل *")}</Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input id="name" name="name" type="text" required className="pl-10 py-3 rounded-lg border-border/50 focus:border-primary/50" placeholder={t("interest_name_placeholder", "أدخل اسمك الكامل")} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground font-semibold">{t("interest_phone_input_label", "رقم الجوال *")}</Label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input id="phone" name="phone" type="tel" required className="pl-10 py-3 rounded-lg border-border/50 focus:border-primary/50" placeholder={t("interest_phone_placeholder", "05xxxxxxxx")} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-semibold">{t("interest_email_input_label", "البريد الإلكتروني *")}</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input id="email" name="email" type="email" required className="pl-10 py-3 rounded-lg border-border/50 focus:border-primary/50" placeholder={t("interest_email_placeholder", "example@email.com")} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-semibold">{t("interest_message_label", "ملاحظات إضافية")}</Label>
                    <Textarea id="message" name="message" className="mt-2 min-h-[100px] rounded-lg border-border/50 focus:border-primary/50" placeholder={t("interest_message_placeholder", "أي استفسارات أو متطلبات خاصة...")} />
                  </div>

                  <Button type="submit" disabled={state.submitting} className="w-full btn-luxury text-lg py-6 rounded-xl">
                    {state.submitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        {t("interest_sending_label", "جاري الإرسال...")}
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t("interest_submit_btn", "إرسال طلب الاهتمام")}
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    {t("interest_privacy_note", "بالنقر على \"إرسال\" فإنك توافق على سياسة الخصوصية وشروط الاستخدام")}
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default InterestForm;