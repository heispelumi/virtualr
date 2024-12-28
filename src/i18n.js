import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import el from './locales/el.json';
import fr from './locales/fr.json';
import sp from './locales/sp.json';
import zh from './locales/zh-CN.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: el },
      fr: { translation: fr },
      sp: { translation: sp},
      zh: { translation: zh },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    supportedLngs: ['en', 'fr', 'sp', 'zh'], // Supported languages
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;

