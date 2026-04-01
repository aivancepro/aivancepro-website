/**
 * Sync forum topics for blog/guide articles.
 * Creates a forum topic + first AIVancePro reply for each new article.
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

// Parse markdown frontmatter
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

// Extract a concise summary from markdown body (~800 chars max)
function extractSummary(content) {
  const body = content.replace(/^---[\s\S]*?---\n*/, '');
  const lines = body.split('\n');
  const paragraphs = [];
  let current = '';
  let totalLen = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    // Skip headings, images, empty lines
    if (trimmed.startsWith('#') || trimmed.startsWith('![') || trimmed === '') {
      if (current.length > 30) {
        paragraphs.push(current.trim());
        totalLen += current.length;
        if (totalLen > 700) break;
      }
      current = '';
      continue;
    }
    // Strip markdown formatting
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

  // Take first paragraph(s) up to ~1000 chars, always include at least the first one
  let result = '';
  for (const p of paragraphs) {
    if (result && result.length + p.length > 1000) break;
    result += (result ? '\n\n' : '') + p;
  }
  // Truncate if single paragraph is too long
  if (result.length > 1000) {
    result = result.slice(0, 997) + '...';
  }
  return result;
}

// Fetch existing article topics from Supabase
async function getExistingTopics() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/forum_posts?article_slug=not.is.null&select=article_slug`,
    { headers }
  );
  const posts = await res.json();
  return new Set(posts.map((p) => p.article_slug));
}

// Create a forum topic
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

// Create a reply on a topic (reply_count is auto-incremented by DB trigger)
async function createReply(postId, body) {
  await fetch(`${SUPABASE_URL}/rest/v1/forum_replies`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      post_id: postId,
      body,
      author_id: AIVANCEPRO_AUTHOR_ID,
      author_name: 'AIVancePro',
    }),
  });
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

      // Topic body: short description + link + engagement question
      const topicBody =
        `${desc}\n\n` +
        `\u2014\n\n` +
        `\u{1F4AC} Qu'en pensez-vous ? Partagez vos questions, retours d'exp\u00e9rience ou avis dans les commentaires !\n\n` +
        `\u{1F4D6} Lire l'article complet : ${url}`;

      // Reply body: summary from article content + engagement question
      const summary = extractSummary(content);
      const replyBody = summary
        ? `${summary}\n\nVous avez des questions ou des retours d'exp\u00e9rience ? Partagez-les !`
        : `D\u00e9couvrez cet article et partagez vos retours d'exp\u00e9rience !`;

      const postId = await createTopic(title, topicBody, slug, folder.type);
      if (postId) {
        await createReply(postId, replyBody);
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
