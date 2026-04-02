import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeSanitizeRawHtml } from './plugins/rehype-sanitize-html.mjs';

export default defineConfig({
  site: 'https://aivancepro.fr',
  output: 'static',
  adapter: vercel(),
  build: {
    format: 'directory'
  },
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter(page) {
        // Exclure les pages noindex (login, compte) — ne pas les soumettre à Google
        const noindexPaths = ['/login/', '/compte/', '/account/', '/konto/'];
        // Exclure les pages legacy HTML statiques (non gérées par Astro)
        const legacyPaths = ['/compound-vs-isolation/', '/workout-splits/', '/personal-training/'];
        return !noindexPaths.some(p => page.includes(p))
            && !legacyPaths.some(p => page.includes(p));
      },
      serialize(item) {
        if (item.url.includes('/blog/') || item.url.includes('/guides/') || item.url.includes('/ratgeber/')) {
          item.lastmod = new Date().toISOString();
        }
        return item;
      }
    })
  ],
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: 'sommaire|contents|inhalt', maxDepth: 3 }],
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      rehypeSanitizeRawHtml,
    ],
  },
});
