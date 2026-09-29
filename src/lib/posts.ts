import { marked } from 'marked';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  /** Path like /og-blog-slug.png — falls back to the generic card. */
  ogImage: string;
  html: string;
  readingMins: number;
}

const SITE = 'https://jadeangco-portfolio.onrender.com';

function parse(raw: string, path: string): Post {
  const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? 'post';
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing frontmatter: ${path}`);
  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  const body = match[2].trim();
  const words = body.split(/\s+/).length;
  return {
    slug,
    title: meta.title ?? slug,
    excerpt: meta.excerpt ?? '',
    date: meta.date ?? '',
    ogImage: meta.og ? `/${meta.og}` : '/og-image.png',
    tags: (meta.tags ?? '')
      .replace(/^\[|\]$/g, '')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean),
    html: String(marked.parse(body, { breaks: true })),
    readingMins: Math.max(1, Math.round(words / 200)),
  };
}

const modules = import.meta.glob('./posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const posts: Post[] = Object.entries(modules)
  .map(([path, raw]) => parse(raw, path))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const siteUrl = SITE;

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
