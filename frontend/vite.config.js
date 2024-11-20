// TODO: change the icons with the necessary ones
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Tanush',
        short_name: 'App',
        description: 'Your App Description',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/vite-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/vite-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});