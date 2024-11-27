import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite'
import { defineConfig } from 'vitest/config'
import { searchForWorkspaceRoot } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte(), svelteTesting()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setuptest.js'],
    include: ['src/**/*.{test,spec}.{js,ts}'],
    alias: [
      { find: /^svelte$/, replacement: 'svelte/internal' }, //https://github.com/vitest-dev/vitest/issues/2834
      { find: '$lib', replacement: resolve(__dirname, './src/lib') }
    ]
  },
  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), '../css/src/app.scss']
    }
  }
})
