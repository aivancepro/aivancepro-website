import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async () => {
  const entries = await getCollection('blog');
  // Map to the shape the app consumes: small payload, only fields needed to
  // render a card + link to the canonical URL on the site.
  const articles = entries.map((e) => ({
    slug: e.data.slug,
    lang: e.data.lang,
    title: e.data.title,
    description: e.data.description,
    date: e.data.date,
    image: e.data.image || null,
    category: e.data.category || null,
    readTime: e.data.readTime || null,
    canonical: e.data.canonical || `https://aivancepro.fr/${e.data.lang === 'fr' ? '' : e.data.lang + '/'}blog/${e.data.slug}/`,
  }));
  // Newest first.
  articles.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0));
  return new Response(JSON.stringify({ count: articles.length, articles }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
