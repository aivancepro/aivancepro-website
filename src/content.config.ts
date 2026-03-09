import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(10).max(70),
    description: z.string().min(80).max(160),
    date: z.string(),
    dateModified: z.string().optional(),
    readTime: z.string().optional(),
    tag: z.string().optional(),
    category: z.string().optional(),
    lang: z.enum(['fr', 'en', 'de']),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    canonical: z.string().optional(),
    keywords: z.string().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    alternates: z.object({
      fr: z.string().optional(),
      en: z.string().optional(),
      de: z.string().optional(),
    }).optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string().min(10).max(70),
    description: z.string().min(80).max(160),
    date: z.string(),
    dateModified: z.string().optional(),
    readTime: z.string().optional(),
    tag: z.string().optional(),
    category: z.string().optional(),
    lang: z.enum(['fr', 'en', 'de']),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    canonical: z.string().optional(),
    keywords: z.string().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    alternates: z.object({
      fr: z.string().optional(),
      en: z.string().optional(),
      de: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { blog, guides };
