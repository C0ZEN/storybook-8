import en from './en.json';
import fr from './fr.json';
import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

const initOptions: InitOptions = {
  lng: `en`,
  fallbackLng: `en`,
  interpolation: {
    escapeValue: false,
  },
  ns: [`ui-components`],
  defaultNS: `ui-components`,
  supportedLngs: [`en`, `fr`],
  preload: [`en`],
  load: `all`,
  lowerCaseLng: false,
  cleanCode: true,
  resources: {
    en: {
      'ui-components': en,
    },
    fr: {
      'ui-components': fr,
    },
  },
};

void i18n.use(initReactI18next).init(initOptions);

export { default } from 'i18next';

export { initOptions };