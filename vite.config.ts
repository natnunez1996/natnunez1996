import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTest.ts'
  }
})
