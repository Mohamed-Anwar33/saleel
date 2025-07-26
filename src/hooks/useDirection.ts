import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useDirection = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';
  const direction = isRTL ? 'rtl' : 'ltr';

  useEffect(() => {
    // Update document direction
    document.documentElement.dir = direction;
    document.documentElement.lang = currentLang;
    
    // Update body classes for direction-specific styling
    document.body.classList.remove('rtl', 'ltr');
    document.body.classList.add(direction);
    
    // Update HTML title and meta tags based on language
    const titles = {
      ar: 'مشروع سليل العقاري - حيث تلتقي الفخامة بنمط الحياة في الرياض',
      en: 'Saleel Real Estate Project - Where Luxury Meets Lifestyle in Riyadh'
    };
    
    const descriptions = {
      ar: 'اكتشف مشروع سليل العقاري الفاخر في الرياض - شقق راقية بتصميم تراثي معاصر، مرافق متكاملة، وموقع استراتيجي في حي الملقا',
      en: 'Discover Saleel luxury real estate project in Riyadh - Premium apartments with contemporary heritage design, integrated facilities, and strategic location in Al Malqa district'
    };
    
    document.title = titles[currentLang as keyof typeof titles] || titles.ar;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[currentLang as keyof typeof descriptions] || descriptions.ar);
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
      ogTitle.setAttribute('content', titles[currentLang as keyof typeof titles] || titles.ar);
    }
    
    if (ogDescription) {
      ogDescription.setAttribute('content', descriptions[currentLang as keyof typeof descriptions] || descriptions.ar);
    }
    
  }, [currentLang, direction, isRTL]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return {
    currentLang,
    isRTL,
    direction,
    toggleLanguage
  };
};
