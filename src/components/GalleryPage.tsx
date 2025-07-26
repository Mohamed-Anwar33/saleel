import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import apartmentImage from "@/assets/apartment-interior.jpg";

// Import ELEVATIONS images
import elevation1 from './ELEVATIONS/mina46 edit 01.jpg';
import elevation2 from './ELEVATIONS/mina46 edit 02.jpg';
import elevation3 from './ELEVATIONS/mina46 edit 03.jpg';
import elevation4 from './ELEVATIONS/mina46 edit 04-2.jpg';
import elevation5 from './ELEVATIONS/mina46 edit 04.jpg';
import elevation6 from './ELEVATIONS/mina46 edit 05.jpg';
import elevation7 from './ELEVATIONS/mina46 edit 06.jpg';
import elevation8 from './ELEVATIONS/mina46 edit 07.jpg';
import elevation9 from './ELEVATIONS/mina46 edit 08.jpg';

// Import F.F (Floor Plan) images
import floorplan_01 from './F.F/01.jpg';
import floorplan_02 from './F.F/02.jpg';
import floorplan_03 from './F.F/03.jpg';
import floorplan_04 from './F.F/04.jpg';
import floorplan_05 from './F.F/05.jpg';
import floorplan_06 from './F.F/06.jpg';
import floorplan_07 from './F.F/07.jpg';
import floorplan_08 from './F.F/08.jpg';
import floorplan_09 from './F.F/09.jpg';
import floorplan_010 from './F.F/010.jpg';
import floorplan_011 from './F.F/011.jpg';
import floorplan_012 from './F.F/012.jpg';
import floorplan_013 from './F.F/013.jpg';
import floorplan_014 from './F.F/014.jpg';
import floorplan_15 from './F.F/15.jpg';

const GalleryPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all_images");

  const galleryImages = [
    // ELEVATIONS IMAGES
    { src: elevation1, title: "elevation_1_title", description: "elevation_1_desc", category: "elevations" },
    { src: elevation2, title: "elevation_2_title", description: "elevation_2_desc", category: "elevations" },
    { src: elevation3, title: "elevation_3_title", description: "elevation_3_desc", category: "elevations" },
    { src: elevation4, title: "elevation_4_title", description: "elevation_4_desc", category: "elevations" },
    { src: elevation5, title: "elevation_5_title", description: "elevation_5_desc", category: "elevations" },
    { src: elevation6, title: "elevation_6_title", description: "elevation_6_desc", category: "elevations" },
    { src: elevation7, title: "elevation_7_title", description: "elevation_7_desc", category: "elevations" },
    { src: elevation8, title: "elevation_8_title", description: "elevation_8_desc", category: "elevations" },
    { src: elevation9, title: "elevation_9_title", description: "elevation_9_desc", category: "elevations" },

    { src: apartmentImage, title: "living_room_title", description: "living_room_desc", category: "interior_designs" },
    { src: apartmentImage, title: "master_bedroom_title", description: "master_bedroom_desc", category: "interior_designs" },
    { src: apartmentImage, title: "modern_kitchen_title", description: "modern_kitchen_desc", category: "interior_designs" },
    { src: apartmentImage, title: "elegant_bathroom_title", description: "elegant_bathroom_desc", category: "interior_designs" },
    { src: apartmentImage, title: "reception_hall_title", description: "reception_hall_desc", category: "interior_designs" },
    { src: apartmentImage, title: "dining_area_title", description: "dining_area_desc", category: "interior_designs" },
    { src: apartmentImage, title: "children_room_title", description: "children_room_desc", category: "interior_designs" },
    { src: apartmentImage, title: "office_space_title", description: "office_space_desc", category: "interior_designs" },

    // FLOOR PLAN IMAGES
    { src: floorplan_01, title: "floorplan_01_title", description: "floorplan_01_desc", category: "floor_plans" },
    { src: floorplan_02, title: "floorplan_02_title", description: "floorplan_02_desc", category: "floor_plans" },
    { src: floorplan_03, title: "floorplan_03_title", description: "floorplan_03_desc", category: "floor_plans" },
    { src: floorplan_04, title: "floorplan_04_title", description: "floorplan_04_desc", category: "floor_plans" },
    { src: floorplan_05, title: "floorplan_05_title", description: "floorplan_05_desc", category: "floor_plans" },
    { src: floorplan_06, title: "floorplan_06_title", description: "floorplan_06_desc", category: "floor_plans" },
    { src: floorplan_07, title: "floorplan_07_title", description: "floorplan_07_desc", category: "floor_plans" },
    { src: floorplan_08, title: "floorplan_08_title", description: "floorplan_08_desc", category: "floor_plans" },
    { src: floorplan_09, title: "floorplan_09_title", description: "floorplan_09_desc", category: "floor_plans" },
    { src: floorplan_010, title: "floorplan_010_title", description: "floorplan_010_desc", category: "floor_plans" },
    { src: floorplan_011, title: "floorplan_011_title", description: "floorplan_011_desc", category: "floor_plans" },
    { src: floorplan_012, title: "floorplan_012_title", description: "floorplan_012_desc", category: "floor_plans" },
    { src: floorplan_013, title: "floorplan_013_title", description: "floorplan_013_desc", category: "floor_plans" },
    { src: floorplan_014, title: "floorplan_014_title", description: "floorplan_014_desc", category: "floor_plans" },
    { src: floorplan_15, title: "floorplan_15_title", description: "floorplan_15_desc", category: "floor_plans" },
  ];

  const categories = [
    "all_images",
    "interior_designs",
    "elevations",
    "floor_plans",
  ];

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "all_images" || image.category === selectedCategory
  );

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const openLightbox = (index: number) => {
    const imageToOpen = currentImages[index];
    const originalIndex = galleryImages.findIndex(img => img.src === imageToOpen.src && img.title === imageToOpen.title);
    setSelectedImage(imageToOpen);
    setCurrentImageIndex(originalIndex);
  };

  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => setCurrentImageIndex(prev => (prev + 1) % galleryImages.length);

  const prevImage = () => setCurrentImageIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <>
      <Navigation />
      <section id="gallery" className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary font-serif">{t('gallery_title')}</h2>
            <p className="text-lg md:text-xl text-center mb-12 text-foreground/80 max-w-3xl mx-auto">{t('gallery_subtitle')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 border-2 shadow-md backdrop-blur-sm ${selectedCategory === cat ? "bg-gradient-to-r from-primary via-accent to-secondary text-white border-primary scale-105 ring-4 ring-primary/20" : "bg-white/70 hover:bg-primary/10 border-primary/10 text-primary hover:text-accent"} animate-bounce-in`}
                style={{ animationDelay: `${idx * 60}ms` }}
                onClick={() => setSelectedCategory(cat)}
              >
                {t(cat)}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-8 space-y-8 sm:columns-2 md:columns-3 lg:columns-4 mb-12 animate-fade-in-up">
            {currentImages.map((image, index) => (
              <Card
                key={`${image.src}-${index}`}
                className="group relative overflow-hidden rounded-3xl border-0 bg-white/80 backdrop-blur-lg shadow-xl transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl break-inside-avoid"
                onClick={() => openLightbox(index)}
                style={{ animation: `fadeInUp 0.7s cubic-bezier(.23,1.01,.32,1) ${(index % 8) * 60}ms both` }}
              >
                <div className="relative overflow-hidden">
                  <img src={image.src} alt={t(image.title)} className="w-full h-full object-cover group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-90 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 rounded-3xl backdrop-blur-[2px]">
                    <Badge className="mb-2 bg-gradient-to-r from-primary via-accent to-secondary text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm animate-fade-in-up">{t(image.category)}</Badge>
                    <h3 className="text-xl font-bold text-white mb-1 animate-fade-in-up animation-delay-100">{t(image.title)}</h3>
                    <p className="text-sm text-white/80 animate-fade-in-up animation-delay-200">{t(image.description)}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">{t('showing')} {filteredImages.length} {t('images')} {t('of')} {galleryImages.length} {t('images')}</p>
          </div>

          <div className="flex justify-center mb-12">
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button
                key={pageNumber}
                className={`px-4 py-2 rounded-full text-lg font-semibold transition-all duration-300 border-2 shadow-md backdrop-blur-sm ${currentPage === pageNumber + 1 ? "bg-gradient-to-r from-primary via-accent to-secondary text-white border-primary scale-105 ring-4 ring-primary/20" : "bg-white/70 hover:bg-primary/10 border-primary/10 text-primary hover:text-accent"}`}
                onClick={() => paginate(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            ))}
          </div>

          <div className="text-center py-16">
            <Card className="inline-block p-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20 rounded-3xl">
              <h3 className="text-3xl font-bold mb-6 text-gradient">{t('cta_title')}</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl text-lg leading-relaxed">{t('cta_subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => navigate('/#interest-form')} size="lg" className="btn-luxury text-lg px-8 py-6 rounded-xl">{t('cta_button_1')}</Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 border-primary/30">
                  <a href="/سَلِيل.pdf" download="سَلِيل-كتيب-المشروع.pdf">{t('cta_button_2')}</a>
                </Button>
              </div>
            </Card>
          </div>

          {selectedImage !== null && (
            <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
              <div className="relative max-w-7xl max-h-full">
                <Button variant="ghost" size="icon" className="absolute -top-12 right-0 z-60 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full" onClick={closeLightbox}><X className="w-6 h-6" /></Button>
                <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full" onClick={prevImage}><ChevronLeft className="w-6 h-6" /></Button>
                <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full" onClick={nextImage}><ChevronRight className="w-6 h-6" /></Button>
                <img src={galleryImages[currentImageIndex].src} alt={t(galleryImages[currentImageIndex].title)} className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-2xl p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <Badge className="mb-3 bg-primary/90">{t(galleryImages[currentImageIndex].category)}</Badge>
                      <h3 className="text-2xl font-bold mb-2">{t(galleryImages[currentImageIndex].title)}</h3>
                      <p className="text-sm opacity-90 leading-relaxed">{t(galleryImages[currentImageIndex].description)}</p>
                    </div>
                    <div className="text-sm opacity-70 text-left">{currentImageIndex + 1} {t('of')} {galleryImages.length}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default GalleryPage;