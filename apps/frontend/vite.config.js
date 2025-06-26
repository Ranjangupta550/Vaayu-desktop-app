import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  //  optimizeDeps: {
  //       include: ['react-map-gl'], // Or specific sub-dependencies if needed
  //     },
  
  resolve: {
    alias: {
      // "mapbox-gl": "maplibre-gl",
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@libs': path.resolve(__dirname, 'src/libs'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@ui': path.resolve(__dirname, 'src/libs/ui'),
      '@store': path.resolve(__dirname, 'src/libs/store'),
    }
  },
})