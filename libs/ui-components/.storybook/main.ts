import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { StorybookConfig } from '@storybook/react-vite';
import { InlineConfig, mergeConfig } from 'vite';

export const CONFIG: StorybookConfig = {
  stories: [
    {
      files: `**/*.@(mdx|stories.tsx)`,
      titlePrefix: `Components`,
      directory: `../src/lib`,
    },
  ],
  core: {
    disableTelemetry: false,
  },
  typescript: {
    check: true,
    reactDocgen: `react-docgen-typescript`,
  },
  staticDirs: [`./assets`],
  addons: [
    `@storybook/addon-links`,
    `@storybook/addon-essentials`,
    `@storybook/addon-a11y`,
    `@storybook/preset-scss`,
    `storybook-dark-mode`,
    `@storybook/addon-storysource`,
    `storybook-react-i18next`,
  ],
  framework: {
    name: `@storybook/react-vite`,
    options: {},
  },
  viteFinal(config: InlineConfig): InlineConfig {
    return mergeConfig(config, {
      plugins: [nxViteTsPaths()],
    });
  },
  docs: {
    autodocs: true,
    defaultName: `Documentation`,
  },
};

export default CONFIG;