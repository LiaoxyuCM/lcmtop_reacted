import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('motion')) {
            return 'motion';
          }
          if (id.includes('i18next')) {
            return 'i18next';
          }
        },
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
