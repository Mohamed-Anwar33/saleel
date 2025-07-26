import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import saleelLogo from "../../saleel_logo_transparent.png";
const Navigation = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language === "ar" ? "ar" : "en";
  const toggleLang = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const navigationItems = [
    { label: t("project_overview"), id: "overview" },
    { label: t("unit_types"), id: "units" },
    { label: t("amenities"), id: "amenities" },
    { label: t("gallery"), id: "gallery", to: "/gallery" },
    { label: t("location_map"), id: "location" },
    { label: t("interest_form"), id: "interest-form" },
  ];
  return <>
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-primary/10 py-2 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@saleel-alqirawan.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>حي القيروان، الرياض</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border/50' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-28 mx-0 px-0 py-0 my-[10px]">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img src={saleelLogo} alt="Saleel Al Qirawan Logo" className="w-40" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map(item =>
  item.to ? (
    <Link key={item.id} to={item.to} className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group">
      {item.label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  ) : (
    <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group">
      {item.label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </button>
  )
)}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button onClick={() => handleNavClick('interest-form')} className="hidden md:flex btn-luxury" size="sm">
                {t("cta_section")}
              </Button>
              {/* Language Switcher */}
              <Button variant="outline" size="sm" onClick={toggleLang} className="ml-2 hidden md:inline-flex">
                {currentLang === "ar" ? "EN" : "عربي"}
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-md">
                  <div className="flex flex-col gap-6 pt-6">
                    {/* Mobile Logo */}
                    <div className="flex items-center justify-center mb-6">
                      <a href="/">
                        <img src={saleelLogo} alt="Saleel Al Qirawan Logo" className="w-32" />
                      </a>
                    </div>

                    {/* Mobile Navigation Items */}
                    {navigationItems.map(item =>
  item.to ? (
    <Link key={item.id} to={item.to} className="text-right text-lg text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/30">
      {item.label}
    </Link>
  ) : (
    <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-right text-lg text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/30">
      {item.label}
    </button>
  )
)}

                    {/* Mobile CTA */}
                    <Button onClick={() => handleNavClick('interest-form')} className="btn-luxury mt-6" size="lg">
                      {t("cta_section")}
                    </Button>
                    {/* Language Switcher (Mobile) */}
                    <Button variant="outline" size="lg" onClick={toggleLang} className="mt-4">
                      {currentLang === "ar" ? "EN" : "عربي"}
                    </Button>

                    {/* Mobile Contact Info */}
                    <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-border/30">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>+966 50 123 4567</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span>info@saleel-alqirawan.com</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>حي القيروان، الرياض</span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>;
};
export default Navigation;