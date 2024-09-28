import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugIn = {
  registerType: 'prompt',
  includeAssests: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.png','android-chrome-192x192.png','android-chrome-512x512.png','maskable_icon_x512.png'],
  manifest: {
    name: 'Jethro Portfolio',
    short_name: 'Jethro Portfolio',
    description: 'A developer focused on creating user-friendly applications. Explore my projects that showcase my skills in coding and design, all aimed at enhancing user experiences. Let’s bring your ideas to life!',
    icons: [{
      src: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    {
      src: '/maskable_icon_x512.png',
      sizes: '512x512',
      type: 'image/png',
    }
    ],
    theme_color: '#171717',
    background_color: '#f0e7db',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait'
  }
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
});
