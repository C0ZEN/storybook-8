import logo from './assets/storybook-logo.jpg';
import i18next from '../i18n/i18n-instance.constant';
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import './assets/styles.scss';
import '../src/lib/styles.scss';

const PREVIEW: Preview = {
  globals: {
    locale: `en`,
    locales: {
      en: { title: `English`, left: `🇺🇸` },
      fr: { title: `Français`, left: `🇫🇷` },
    },
  },
  parameters: {
    layout: `centered`,
    controls: { expanded: true },
    viewport: {
      viewports: {
        mobile: {
          name: `Mobile`,
          styles: {
            width: `640px`,
            height: `360px`,
          },
          type: `phone`,
        },
        tablet: {
          name: `Tablet`,
          styles: {
            width: `1024px`,
            height: `768px`,
          },
          type: `tablet`,
        },
        laptop: {
          name: `Laptop`,
          styles: {
            width: `1360px`,
            height: `768px`,
          },
          type: `desktop`,
        },
        desktop: {
          name: `Desktop`,
          styles: {
            width: `1680px`,
            height: `1050px`,
          },
          type: `desktop`,
        },
        highDefinition: {
          name: `High definition`,
          styles: {
            width: `2560px`,
            height: `1080px`,
          },
          type: `desktop`,
        },
      },
      disable: false,
    },
    docs: {
      theme: themes.light,
      story: {
        inline: false,
      },
    },
    darkMode: {
      dark: {
        ...themes.dark,
        brandImage: logo,
        brandTitle: `UI Components`,
        colorPrimary: `#007DBC`,
        stylePreview: true,
      },
      light: {
        ...themes.light,
        brandImage: logo,
        brandTitle: `UI Components`,
        colorPrimary: `#007DBC`,
        stylePreview: true,
      },
      classTarget: `html`,
      darkClass: `vtmn-theme_core--dark`,
      lightClass: `vtmn-theme_core--light`,
      current: `dark`,
    },
    options: {
      storySort: {
        method: `alphabetical`,
        includeName: false,
        order: [`*`],
      },
    },
    i18n: i18next,
  },
};

export default PREVIEW;
