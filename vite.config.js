import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,
   
    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'Burning Notes',
      short_name: 'burningnotes',
      description: 'Burning Notes',
      theme_color: '#111827',
      display: "standalone", // from resources
      shortcuts : [
          {
              "name": "Create Note",
              "url": "/add-note",
              "description": "Create new note quickly"
          },
          {
              "name": "Settings",
              "url": "/settings"
          }
        
      ]
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})