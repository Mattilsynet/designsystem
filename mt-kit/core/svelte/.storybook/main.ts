import type { StorybookConfig } from '@storybook/svelte-vite'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-svelte-csf',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {}
  },
  viteFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      $lib: path.resolve('./src/lib')
    }
    return config
  },
  docs: {}
}
export default config
