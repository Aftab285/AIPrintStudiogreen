import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://aiprintstudio.com',
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
