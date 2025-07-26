import GalleryPage from "@/components/GalleryPage";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <GalleryPage />
      <Footer />
    </div>
  );
};

export default Gallery;