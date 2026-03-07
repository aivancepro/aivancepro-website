import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    readTime: z.string().optional(),
    tag: z.string().optional(),
    lang: z.enum(['fr', 'en', 'de']),
    slug: z.string(),
    canonical: z.string().optional(),
    keywords: z.string().optional(),
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
    title: z.string(),
    description: z.string(),
    date: z.string(),
    readTime: z.string().optional(),
    tag: z.string().optional(),
    lang: z.enum(['fr', 'en', 'de']),
    slug: z.string(),
    canonical: z.string().optional(),
    keywords: z.string().optional(),
    alternates: z.object({
      fr: z.string().optional(),
      en: z.string().optional(),
      de: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { blog, guides };
