import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [svelte()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setuptest.js'],
    include: ['src/**/*.{test,spec}.{js,ts}'],
    alias: [{ find: /^svelte$/, replacement: 'svelte/internal' }] //https://github.com/vitest-dev/vitest/issues/2834
  }
})
