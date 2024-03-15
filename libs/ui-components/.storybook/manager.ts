import theme from './theme';
import { addons } from '@storybook/manager-api';

addons.setConfig({
  isFullscreen: false,
  sidebar: {
    showRoots: true,
  },
  theme,
});
