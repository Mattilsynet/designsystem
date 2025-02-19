import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite'
import { defineConfig } from 'vitest/config'
import { searchForWorkspaceRoot } from 'vite'
import { resolve } from 'path'
import svelteSVG from "@hazycora/vite-plugin-svelte-svg";

export default defineConfig({
  plugins: [svelte(), svelteTesting(), svelteSVG()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setuptest.js'],
    include: ['src/**/*.{test,spec}.{js,ts}'],
    alias: [{ find: '$lib', replacement: resolve(__dirname, './src/lib') }]
  },
  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), '../css/src/app.scss']
    }
  },
  resolve: process.env.VITEST
    ? {
        conditions: ['browser']
      }
    : undefined
})
