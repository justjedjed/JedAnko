<script lang="ts">
  import { siteUrl } from '$lib/posts';

  let { data } = $props();
  const post = $derived(data.post);
  const prev = $derived(data.prev);
  const next = $derived(data.next);
  const url = $derived(`${siteUrl}/blog/${data.post.slug}`);
</script>

<svelte:head>
  <title>{post.title} — Jade Angco</title>
  <meta name="description" content={post.excerpt} />
  <meta
    name="keywords"
    content={`${post.tags.join(', ')}, Jade Angco, Front-End Developer, Bislig City, Philippines`}
  />
  <link rel="canonical" href={url} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={`${post.title} — Jade Angco`} />
  <meta property="og:description" content={post.excerpt} />
  <meta property="og:image" content={`${siteUrl}/og-image.png`} />
  <meta property="article:published_time" content={post.date} />
  <meta property="article:author" content="Jade Jabagat Angco" />
  {#each post.tags as t}<meta property="article:tag" content={t} />{/each}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={`${post.title} — Jade Angco`} />
  <meta name="twitter:description" content={post.excerpt} />
  <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
  {@html `
		<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Article",
			"headline": ${JSON.stringify(post.title)},
			"description": ${JSON.stringify(post.excerpt)},
			"image": "${siteUrl}/og-image.png",
			"datePublished": "${post.date}",
			"inLanguage": "en",
			"author": {
				"@type": "Person",
				"name": "Jade Jabagat Angco",
				"url": "${siteUrl}/"
			},
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "${url}"
			}
		}
		</script>
	`}
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<header class="topbar">
  <div class="section-inner topbar-inner">
    <a href="/" class="brandlink" aria-label="Back to portfolio">
      <span aria-hidden="true">←</span> Jade Angco
    </a>
    <nav aria-label="Sections">
      <a href="/blog">All posts</a>
      <a href="/#contact">Contact</a>
    </nav>
  </div>
</header>

<main id="main">
  <article class="section">
    <div class="section-inner article-wrap">
      <nav class="crumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/blog">Blog</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{post.title}</span>
      </nav>
      <p class="post-meta">
        <time datetime={post.date}>{post.date}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingMins} min read</span>
      </p>
      <h1>{post.title}</h1>
      <p class="lede">{post.excerpt}</p>
      <div class="tag-row">
        {#each post.tags as t}<span class="tag">{t}</span>{/each}
      </div>
      <div class="post-body">
        {@html post.html}
      </div>
      <aside class="cta">
        <div>
          <strong>Need this done for your site?</strong>
          <p>
            I build and host fast websites — SvelteKit, Vue.js, Nginx,
            Cloudflare Tunnel. Reply within 24 hours.
          </p>
        </div>
        <a class="btn btn-primary btn-sm" href="/#contact">Work with me →</a>
      </aside>
      <nav class="pager" aria-label="More posts">
        {#if prev}
          <a href={`/blog/${prev.slug}`} rel="prev">
            <span>← Newer</span><strong>{prev.title}</strong>
          </a>
        {:else}<span></span>{/if}
        {#if next}
          <a href={`/blog/${next.slug}`} rel="next">
            <span>Older →</span><strong>{next.title}</strong>
          </a>
        {/if}
      </nav>
    </div>
  </article>
</main>

<footer class="foot">
  <div class="section-inner foot-inner">
    <a href="/blog">← All posts</a>
    <span>© 2026 Jade Jabagat Angco</span>
  </div>
</footer>

<style>
  .topbar {
    position: sticky;
    top: 0;
    z-index: 50;
    background: var(--nav-bg);
    backdrop-filter: blur(16px) saturate(1.3);
    border-bottom: 1px solid var(--border);
  }
  .topbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 0.85rem;
    padding-bottom: 0.85rem;
  }
  .brandlink {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.95rem;
  }
  .brandlink:hover {
    color: var(--primary);
  }
  .topbar nav {
    display: flex;
    gap: 1.2rem;
  }
  .topbar nav a {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }
  .topbar nav a:hover {
    color: var(--primary);
  }
  .article-wrap {
    max-width: 760px;
  }
  .crumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--ink-faint);
    margin-bottom: 1.5rem;
  }
  .crumbs a:hover {
    color: var(--primary);
  }
  .crumbs [aria-current] {
    color: var(--ink-soft);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 320px;
  }
  .post-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-faint);
  }
  .article-wrap h1 {
    font-size: clamp(1.9rem, 4.5vw, 2.7rem);
    letter-spacing: -0.03em;
    line-height: 1.08;
    margin-top: 0.7rem;
  }
  .lede {
    color: var(--ink-soft);
    font-size: 1.05rem;
    line-height: 1.65;
    margin-top: 0.9rem;
  }
  .tag-row {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  .post-body {
    margin-top: 2rem;
    font-size: 0.98rem;
    line-height: 1.75;
    color: var(--ink-soft);
  }
  .post-body :global(h2) {
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin: 2rem 0 0.7rem;
  }
  .post-body :global(p) {
    margin: 0 0 1.1rem;
  }
  .post-body :global(strong) {
    color: var(--ink);
  }
  .post-body :global(a) {
    color: var(--primary);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .post-body :global(ul),
  .post-body :global(ol) {
    margin: 0 0 1.1rem;
    padding-left: 1.3rem;
  }
  .post-body :global(li) {
    margin-bottom: 0.35rem;
  }
  .post-body :global(code) {
    font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
    font-size: 0.85em;
    background: var(--surface-raised);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 0.1rem 0.35rem;
  }
  .post-body :global(pre) {
    background: var(--surface-raised);
    border: 1px solid var(--border-strong);
    border-radius: 12px;
    padding: 1rem 1.1rem;
    overflow-x: auto;
    margin: 0 0 1.25rem;
  }
  .post-body :global(pre code) {
    background: none;
    border: none;
    padding: 0;
    font-size: 0.82rem;
    line-height: 1.6;
  }
  .cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    background: var(--surface);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-lg);
    padding: 1.25rem 1.35rem;
    margin-top: 2.5rem;
  }
  .cta strong {
    font-size: 1rem;
  }
  .cta p {
    font-size: 0.85rem;
    color: var(--ink-soft);
    margin-top: 0.3rem;
    max-width: 420px;
    line-height: 1.6;
  }
  .pager {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
  }
  .pager a {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: 0.9rem 1rem;
  }
  .pager a:hover {
    border-color: var(--primary);
  }
  .pager a span {
    font-size: 0.64rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-faint);
  }
  .pager a strong {
    font-size: 0.88rem;
    line-height: 1.4;
  }
  .pager a:last-child {
    text-align: right;
  }
  .foot {
    border-top: 1px solid var(--border);
    padding: 1.5rem;
    background: var(--surface);
  }
  .foot-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.6rem;
    font-size: 0.8rem;
    color: var(--ink-soft);
  }
  .foot-inner a:first-child {
    font-weight: 700;
    color: var(--ink);
  }
  .foot-inner a:first-child:hover {
    color: var(--primary);
  }
  @media (max-width: 560px) {
    .pager {
      grid-template-columns: 1fr;
    }
  }
</style>
