import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite'
import { defineConfig } from 'vitest/config'
import { searchForWorkspaceRoot } from 'vite'
import { resolve } from 'path'
import { sveltePhosphorOptimize } from 'phosphor-svelte/vite'

export default defineConfig({
  plugins: [sveltePhosphorOptimize(), svelte(), svelteTesting()],
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
