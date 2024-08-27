import type {StorybookConfig} from '@storybook/svelte-vite'
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
  docs: {}
}
export default config
