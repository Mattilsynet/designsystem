module.exports = {
  webpackFinal: async config => {
    const svelteLoader = config.module.rules.find(r => r.loader && r.loader.includes('svelte-loader'));
    svelteLoader.options.preprocess = require('svelte-preprocess')({});
    /* TODO: remove this to see warnings again*/
    config.entry = config.entry.filter(singleEntry => !singleEntry.includes('/webpack-hot-middleware/'));
    return config;
  },

  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss',
    'storybook-xstate-addon/preset'
  ],
  staticDirs: ['../.static']
};
