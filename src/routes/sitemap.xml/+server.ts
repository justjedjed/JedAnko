import { posts, siteUrl } from '$lib/posts';

export const prerender = true;

interface Page {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export function GET() {
  const latestPost = posts[0]?.date ?? today();
  const pages: Page[] = [
    { loc: `${siteUrl}/`, lastmod: today(), changefreq: 'weekly', priority: '1.0' },
    { loc: `${siteUrl}/blog`, lastmod: latestPost, changefreq: 'weekly', priority: '0.8' },
    ...posts.map((p) => ({
      loc: `${siteUrl}/blog/${p.slug}`,
      lastmod: p.date,
      changefreq: 'monthly',
      priority: '0.8',
    })),
    {
      loc: `${siteUrl}/work/mm-group-hosting`,
      lastmod: '2026-09-29',
      changefreq: 'monthly',
      priority: '0.9',
    },
  ];
  const urls = pages
    .map((p) => {
      const images =
        p.loc === `${siteUrl}/`
          ? `    <image:image>
      <image:loc>${siteUrl}/og-image.png</image:loc>
      <image:title>Jade Angco — Front-End Developer</image:title>
    </image:image>
    <image:image>
      <image:loc>${siteUrl}/Jade.jpg</image:loc>
      <image:title>Portrait of Jade Angco</image:title>
    </image:image>
`
          : '';
      return `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
${images}  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>
`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
