import type { StorybookConfig } from '@storybook/react-vite'
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        react: {
          title: 'React',
          url: 'http://localhost:6007'
        },
        svelte: {
          title: 'Svelte',
          url: 'http://localhost:6008'
        }
      }
    }
    return {
      react: {
        title: 'React',
        url: 'http://localhost:6007'
      },
      svelte: {
        title: 'Svelte',
        url: 'http://localhost:6008'
      }
    }
  }
}
export default config
