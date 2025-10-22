import type { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config) {
    config.plugins = [
      ...(config.plugins || []),
      svgr(),
    ];
    // opcional: garantir que assetsInlineLimit exista
    config.build = config.build || {};
    (config.build as any).assetsInlineLimit = 0;
    return config;
  },
};

export default config;
