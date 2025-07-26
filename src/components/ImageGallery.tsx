import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";
import apartmentImage from "@/assets/apartment-interior.jpg";
import poolImage from "@/assets/amenities-pool.jpg";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: heroImage,
      title: "واجهة المبنى الرئيسية",
      description: "تصميم معماري مستوحى من التراث السعودي"
    },
    {
      src: apartmentImage,
      title: "غرفة المعيشة الرئيسية",
      description: "تشطيبات فاخرة مع لمسات تراثية عصرية"
    },
    {
      src: poolImage,
      title: "منطقة المسبح والترفيه",
      description: "مرافق ترفيهية متكاملة للعائلة"
    },
    {
      src: heroImage,
      title: "الوحدات السكنية",
      description: "شقق فاخرة بتصميمات متنوعة"
    },
    {
      src: apartmentImage,
      title: "غرفة النوم الرئيسية",
      description: "راحة وفخامة في التصميم"
    },
    {
      src: poolImage,
      title: "المساحات الخضراء",
      description: "حدائق ومناطق استجمام طبيعية"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            معرض الصور
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            استكشف جمال وفخامة مشروع سليل من خلال مجموعة مختارة من الصور عالية الجودة
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden rounded-xl border-border/50 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                <p className="text-sm opacity-90">{image.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">هل تريد رؤية المزيد؟</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              احجز موعداً لزيارة الشقة النموذجية والتعرف على المشروع عن قرب
            </p>
            <Button size="lg" className="btn-luxury">
              احجز زيارة الشقة النموذجية
            </Button>
          </Card>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-60 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Image */}
              <img 
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{galleryImages[currentImageIndex].title}</h3>
                <p className="text-sm opacity-90">{galleryImages[currentImageIndex].description}</p>
                <div className="text-xs mt-2 opacity-70">
                  {currentImageIndex + 1} من {galleryImages.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;