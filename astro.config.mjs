import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  }),
  site: 'https://learning-proyecto-integral.edu.ar',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
