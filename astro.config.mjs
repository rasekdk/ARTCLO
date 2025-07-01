import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve('./src'),
      },
    },
  },
});
