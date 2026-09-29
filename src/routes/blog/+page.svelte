<script lang="ts">
  import BlogTopbar from '$lib/components/BlogTopbar.svelte';
  import BlogFooter from '$lib/components/BlogFooter.svelte';
  import { posts, siteUrl } from '$lib/posts';

  const title = 'Blog — Jade Angco | Front-End Developer';
  const desc =
    'Notes on SvelteKit, Vue.js, Nginx, Cloudflare Tunnel, and freelance web development — from Bislig City, Philippines to the world.';
  const url = `${siteUrl}/blog`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  <link rel="canonical" href={url} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={`${siteUrl}/og-image.png`} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={desc} />
  <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="Jade Angco — Blog"
    href={`${siteUrl}/blog/rss.xml`}
  />
  {@html `
		<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Blog",
			"name": "Jade Angco — Blog",
			"url": "${url}",
			"inLanguage": "en",
			"author": {
				"@type": "Person",
				"name": "Jade Jabagat Angco",
				"url": "${siteUrl}/"
			}
		}
		</script>
	`}
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<BlogTopbar
  links={[
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Live Sites', href: '/#live-sites' },
    { label: 'Contact', href: '/#contact' },
  ]}
/>

<main id="main">
  <section class="section">
    <div class="section-inner">
      <div class="sec-top">
        <div>
          <p class="eyebrow">Writing</p>
          <h1 class="sec-title">Blog<span class="dot">.</span></h1>
        </div>
        <p class="sec-sub">
          Practical notes from real builds — SvelteKit, Vue.js, hosting, and
          freelancing. No fluff, everything tested on this very site.
        </p>
      </div>
      <div class="blog-bar">
        <a class="btn btn-ghost btn-sm" href="/blog/rss.xml">Subscribe via RSS ↗</a
        >
      </div>
      <ul class="post-list">
        {#each posts as p}
          <li>
            <article class="post-card">
              <p class="post-meta">
                <time datetime={p.date}>{p.date}</time>
                <span aria-hidden="true">·</span>
                <span>{p.readingMins} min read</span>
              </p>
              <h2><a href={`/blog/${p.slug}`}>{p.title}</a></h2>
              <p class="post-excerpt">{p.excerpt}</p>
              <div class="tag-row">
                {#each p.tags as t}<span class="tag">{t}</span>{/each}
              </div>
              <a class="textlink" href={`/blog/${p.slug}`}
                >Read post <span aria-hidden="true">→</span></a
              >
            </article>
          </li>
        {/each}
      </ul>
    </div>
  </section>
</main>

<BlogFooter backHref="/" backLabel="← Back to portfolio" />

<style>
  .eyebrow {
    margin-bottom: 0.6rem;
  }
  .blog-bar {
    margin-bottom: 1.25rem;
  }
  .post-list {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--border-strong);
  }
  .post-card {
    padding: 1.75rem 0.25rem;
    border-bottom: 1px solid var(--border);
  }
  .post-card:hover h2 a {
    color: var(--primary);
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
  .post-card h2 {
    font-size: clamp(1.25rem, 2.6vw, 1.7rem);
    letter-spacing: -0.02em;
    margin-top: 0.5rem;
    line-height: 1.2;
  }
  .post-excerpt {
    color: var(--ink-soft);
    line-height: 1.65;
    margin-top: 0.6rem;
    font-size: 0.93rem;
    max-width: 640px;
  }
  .tag-row {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    margin-top: 0.85rem;
  }
  .textlink {
    display: inline-block;
    margin-top: 1rem;
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
    padding-bottom: 0.15rem;
  }
  .textlink:hover {
    color: var(--ink);
    border-color: var(--ink);
  }
</style>
