import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: [
      'v-fix-demo-production.up.railway.app',
      '.up.railway.app',
      'localhost',
    ],
  },
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: process.env.PORT || 5173,
    },
  },
})

