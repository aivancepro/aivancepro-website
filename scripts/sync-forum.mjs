/**
 * Sync forum topics for blog/guide articles.
 * Creates a forum topic for each new FR article that doesn't have one yet.
 * Run: SUPABASE_SERVICE_ROLE_KEY=... node scripts/sync-forum.mjs
 */

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

const SUPABASE_URL = 'https://vzmtvhcvyqzkmestdbko.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const AIVANCEPRO_AUTHOR_ID = '6970d563-8d1c-4df0-885e-6cf726047090';

if (!SERVICE_KEY) {
  console.log('SUPABASE_SERVICE_ROLE_KEY not set, skipping forum sync.');
  process.exit(0);
}

const headers = {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
};

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*['"]?(.+?)['"]?\s*$/);
    if (m) fm[m[1]] = m[2];
  }
  return fm;
}

function extractSummary(content) {
  const body = content.replace(/^---[\s\S]*?---\n*/, '');
  const lines = body.split('\n');
  const paragraphs = [];
  let current = '';
  let totalLen = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('#') || trimmed.startsWith('![') || trimmed === '') {
      if (current.length > 30) {
        paragraphs.push(current.trim());
        totalLen += current.length;
        if (totalLen > 700) break;
      }
      current = '';
      continue;
    }
    const clean = trimmed
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\*(.+?)\*/g, '$1')
      .replace(/\[(.+?)\]\(.+?\)/g, '$1')
      .replace(/`(.+?)`/g, '$1');
    current += (current ? ' ' : '') + clean;
  }
  if (current.length > 30 && totalLen < 700) {
    paragraphs.push(current.trim());
  }

  let result = '';
  for (const p of paragraphs) {
    if (result && result.length + p.length > 1000) break;
    result += (result ? '\n\n' : '') + p;
  }
  if (result.length > 1000) {
    result = result.slice(0, 997) + '...';
  }
  return result;
}

async function getExistingTopics() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/forum_posts?article_slug=not.is.null&select=article_slug`,
    { headers }
  );
  const posts = await res.json();
  return new Set(posts.map((p) => p.article_slug));
}

async function createTopic(title, body, slug, articleType) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/forum_posts`, {
    method: 'POST',
    headers: { ...headers, Prefer: 'return=representation' },
    body: JSON.stringify({
      title,
      body,
      category: 'article',
      article_slug: slug,
      article_type: articleType,
      author_id: AIVANCEPRO_AUTHOR_ID,
      author_name: 'AIVancePro',
    }),
  });
  const data = await res.json();
  return data?.[0]?.id;
}

async function main() {
  const existing = await getExistingTopics();
  console.log(`Forum sync: ${existing.size} existing article topics.`);

  const folders = [
    { path: 'src/content/blog/fr', type: 'blog', prefix: '/blog/' },
    { path: 'src/content/guides/fr', type: 'guide', prefix: '/guides/' },
  ];

  let created = 0;

  for (const folder of folders) {
    let files;
    try {
      files = await readdir(folder.path);
    } catch {
      continue;
    }

    for (const file of files.sort()) {
      if (!file.endsWith('.md')) continue;

      const content = await readFile(join(folder.path, file), 'utf-8');
      const fm = parseFrontmatter(content);
      const slug = fm.slug || file.replace('.md', '');

      if (existing.has(slug)) continue;

      const title = fm.title || slug;
      const desc = fm.description || '';
      const url = `https://aivancepro.fr${folder.prefix}${slug}/`;

      const summary = extractSummary(content);
      const topicBody =
        `${desc}\n\n` +
        (summary ? `---\n\n${summary}\n\n` : '') +
        `---\n\n` +
        `Qu'en pensez-vous ? Partagez vos questions, retours d'experience ou avis dans les commentaires !\n\n` +
        `Lire l'article complet : ${url}`;

      const postId = await createTopic(title, topicBody, slug, folder.type);
      if (postId) {
        console.log(`  Created: ${slug} (${folder.type})`);
        created++;
      } else {
        console.log(`  FAILED: ${slug}`);
      }
    }
  }

  console.log(`Forum sync done: ${created} new topic(s) created.`);
}

main().catch(console.error);
