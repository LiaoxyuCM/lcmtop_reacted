import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import de from './locales/de.json';
import en from './locales/en.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import ru from './locales/ru.json';
import zhCN from './locales/zh-CN.json';
import zhTW from './locales/zh-TW.json';

import config from '../LCMTOP_CONFIG.json';

const resources: Record<string, { translation: unknown }> = {
  // baseline
  en: { translation: en },
  'zh-CN': { translation: zhCN },
  'zh-TW': { translation: zhTW },
};

if (config.i18n.support_additional_lang) {
  Object.assign(resources, {
    de: { translation: de },
    ja: { translation: ja },
    ko: { translation: ko },
    fr: { translation: fr },
    es: { translation: es },
    ru: { translation: ru },
  });
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    debug: false,
    ns: ['translation'],
    defaultNS: 'translation'
  });

export default i18n;
