import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    resources: {
      en: {
        translation: {
          welcome: 'Welcome to our Radio App',
          language: 'Language',
          changeLanguage: 'Change Language',
          hello: 'Hello, {{name}}!',
        },
      },
      ko: {
        translation: {
          welcome: '라디오 앱에 오신 것을 환영합니다',
          language: '언어',
          changeLanguage: '언어 변경',
          hello: '안녕하세요, {{name}}님!',
        },
      },
    },
  });

export default i18n;