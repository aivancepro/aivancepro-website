import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aivancepro.fr',
  build: {
    format: 'directory'
  },
  trailingSlash: 'always'
});
