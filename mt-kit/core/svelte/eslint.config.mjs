import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginSvelte from 'eslint-plugin-svelte';
import * as svelteParser from 'svelte-eslint-parser';
import eslintPluginStorybook from 'eslint-plugin-storybook';
import svelteConfig from './svelte.config.js'
import globals from 'globals'

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginSvelte.configs.recommended,
  eslintPluginStorybook.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.svelte', '*.svelte'],
    languageOptions: {
      parser:svelteParser,
      parserOptions: {
        svelteConfig
      }
    }
  },
  {
    files: ['**/*.ts'],
    ignores: ['dist/**/*.*'],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
]
// export default tseslint.config(
//   tseslint.configs.eslintRecommended,
//   eslintConfigPrettier,
//   {
//     languageOptions: {
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//       globals: {
//         ...globals.browser
//       }
//     },
//
//     ignores: ['dist/**/*.*'],
//     files: ['**/*.ts', '**/*.svelte'],
//
//     plugins: {
//     },
//
//     rules: {
//       // https://eslint.org/docs/rules
//       'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
//       '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
//     },
//   },
// )
