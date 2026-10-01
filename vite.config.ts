import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        reduce_vars: true,
        dead_code: true,
        collapse_vars: true,
        evaluate: true,
        unused: true,
        booleans: true
      },
      format: {
        beautify: false,
        comments: false,
        indent_level: 0
      }
    }
  }
})
