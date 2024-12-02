import tseslint from "typescript-eslint"
import eslintPluginPrettier from "eslint-plugin-prettier/recommended"
import eslintPluginSvelte from "eslint-plugin-svelte"
import * as svelteParser from "svelte-eslint-parser"
import eslintPluginStorybook from "eslint-plugin-storybook"
import importPlugin from 'eslint-plugin-import'
import svelteConfig from "./svelte.config.js"
import globals from "globals"

export default [
  ...tseslint.config({
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2019,
        project: "./tsconfig.json"
        , extraFileExtensions: [".svelte"]
      }
    }
  }),
  importPlugin.flatConfigs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginSvelte.configs["flat/recommended"],
  ...eslintPluginStorybook.configs["flat/recommended"],
  eslintPluginPrettier,
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        svelteConfig
      }
    }
  },
  {
    files: ["**/*.ts"],
    ignores: ["dist/**/*.*", "mt-kit/core/react"],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
];
