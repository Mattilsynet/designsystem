import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginSvelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
import eslintPluginStorybook from 'eslint-plugin-storybook'
import js from '@eslint/js'
import * as typescriptParser from '@typescript-eslint/parser'
import svelteConfig from './svelte.config.js'
import globals from 'globals'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  ...eslintPluginStorybook.configs['flat/recommended'],
  eslintPluginPrettier,
  eslintConfigPrettier,
  {
    files: ['**/*.svelte'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: svelteParser,
      parserOptions: {
        parser: {
          ts: typescriptParser,
          typescript: typescriptParser
        },
        svelteConfig,
        project: './tsconfig.json',
        extraFileExtensions: ['.svelte']
      }
    },
    rules: {
      'svelte/no-at-html-tags': 'off'
    }
  },
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.test.ts'],
    languageOptions: {
      globals: {
        suite: 'writable',
        test: 'writable',
        describe: 'writable',
        it: 'writable',
        expect: 'writable',
        assert: 'writable',
        vitest: 'writable',
        vi: 'writable',
        beforeAll: 'writable',
        afterAll: 'writable',
        beforeEach: 'writable',
        afterEach: 'writable'
      }
    }
  },
  {
    ignores: ['.storybook', '**/.svelte-kit', '**/dist', '**/node_modules', '**/storybook-static']
  }
)
