/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vitest"/>
/// <reference types="vite/client"/>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  build: {
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: '/path/to/main.tsx',
    }
  },
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts']
  }
})
