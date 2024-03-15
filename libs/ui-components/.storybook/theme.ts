import logo from './assets/storybook-logo.jpg';
import { create, themes } from '@storybook/theming';

export default create({
  base: themes.light.base,
  brandImage: logo,
  brandTitle: `UI Components`,
  colorPrimary: `#007DBC`,
});
