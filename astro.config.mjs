import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aivancepro.fr',
  build: {
    format: 'directory'
  },
  trailingSlash: 'always',
  integrations: [sitemap()]
});
