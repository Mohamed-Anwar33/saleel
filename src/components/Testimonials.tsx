import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد العبدالله",
      role: "مالك شقة بالمشروع",
      content: "مشروع سليل يجمع بين الفخامة والأصالة بطريقة رائعة. التصميم المعماري والتشطيبات تفوق التوقعات.",
      rating: 5,
      image: "A.A"
    },
    {
      name: "فاطمة السالم", 
      role: "مستثمرة عقارية",
      content: "استثمار ممتاز في موقع استراتيجي. الخدمات والمرافق المتوفرة تجعل من المشروع خياراً مثالياً للعائلات.",
      rating: 5,
      image: "F.S"
    },
    {
      name: "محمد الراشد",
      role: "ساكن بالحي",
      content: "أخيراً مشروع يحترم التراث السعودي مع الحداثة. المنطقة هادئة وقريبة من كل الخدمات التي نحتاجها.",
      rating: 5,
      image: "M.R"
    }
  ];

  const partners = [
    "شركة البناء السعودية",
    "مجموعة العثيم للتطوير",
    "شركة الراجحي للاستثمار",
    "مؤسسة النخبة للتطوير العقاري"
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/20 pattern-overlay">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            آراء عملائنا
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            استمع لتجارب عملائنا الذين اختاروا سليل كوجهة مثالية للسكن والاستثمار
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 relative bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 space-x-reverse mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Developer Quote */}
        <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Quote className="w-8 h-8 text-primary" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground mb-6 leading-relaxed">
              "نؤمن في سليل بأن السكن ليس مجرد مبنى، بل هو مساحة تحكي قصة التراث السعودي العريق وتطلعاتنا للمستقبل المشرق"
            </blockquote>
            <div className="text-lg text-muted-foreground">
              <div className="font-semibold text-primary">المهندس عبدالله المطيري</div>
              <div>المدير التنفيذي - مجموعة سليل للتطوير العقاري</div>
            </div>
          </div>
        </Card>

        {/* Partners Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">شركاء النجاح</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/60 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="text-2xl font-bold text-primary">
                      {partner.split(' ')[1]?.[0] || partner[0]}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-foreground">{partner}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;