import {defineConfig} from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest:{
                "name": "Kitoko Dev Work",
                "short_name": "Kitoko Dev",
                "description": "La qualité à votre service",
                "start_url": "/",
                "id": "./",
                "background_color": "#0A1A28",
                "theme_color": "#112e42",
                "display": "standalone",
                "orientation": "portrait",
                "icons": [
                  {
                    "src": "LogoAnimateKitokoDevWork.webp/manifest-icon-192.maskable.png",
                    "sizes": "192x192",
                    "type": "image/png",
                    "purpose": "any"
                  },
                  {
                    "src": "LogoAnimateKitokoDevWork.webp/manifest-icon-192.maskable.png",
                    "sizes": "192x192",
                    "type": "image/png",
                    "purpose": "maskable"
                  },
                  {
                    "src": "LogoAnimateKitokoDevWork.webp/manifest-icon-512.maskable.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "any"
                  },
                  {
                    "src": "LogoAnimateKitokoDevWork.webp/manifest-icon-512.maskable.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "maskable"
                  }
                ],
                "categories": [
                  "business",
                  "productivity",
                  "utilities"
                ],
                "screenshots": [
                  {
                    "src": "photos/KitokoDevWork_logo.webp",
                    "sizes": "640x480",
                    "type": "image/webp"
                  },
                  {
                    "src": "photos/KitokoDevWork_logo.webp",
                    "sizes": "1280x720",
                    "type": "image/webp"
                  }
                ]
              }
    })
  ]
})
