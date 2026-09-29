<script lang="ts">
  import BlogTopbar from '$lib/components/BlogTopbar.svelte';
  import BlogFooter from '$lib/components/BlogFooter.svelte';
  import { setContactIntent } from '$lib/contactIntent';
  import { siteUrl } from '$lib/posts';

  let { data } = $props();
  const post = $derived(data.post);
  const prev = $derived(data.prev);
  const next = $derived(data.next);
  const url = $derived(`${siteUrl}/blog/${data.post.slug}`);

  // Add copy buttons to code blocks (runs on mount + when switching posts).
  $effect(() => {
    const slug = post.slug; // track post changes
    const blocks = document.querySelectorAll('.post-body pre');
    blocks.forEach((pre) => {
      const el = pre as HTMLElement;
      if (el.parentElement?.classList.contains('code-wrap')) return;
      const wrap = document.createElement('div');
      wrap.className = 'code-wrap';
      el.replaceWith(wrap);
      wrap.append(el);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn';
      btn.textContent = 'Copy';
      btn.setAttribute('aria-label', 'Copy code to clipboard');
      btn.onclick = async () => {
        try {
          await navigator.clipboard.writeText(el.innerText);
        } catch {
          const ta = document.createElement('textarea');
          ta.value = el.innerText;
          document.body.appendChild(ta);
          ta.select();
          try {
            document.execCommand('copy');
          } catch {
            // Clipboard unavailable.
          } finally {
            ta.remove();
          }
        }
        btn.textContent = 'Copied!';
        setTimeout(() => (btn.textContent = 'Copy'), 1600);
      };
      wrap.append(btn);
    });
  });
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
  <meta property="og:image" content={`${siteUrl}${post.ogImage}`} />
  <meta property="article:published_time" content={post.date} />
  <meta property="article:author" content="Jade Jabagat Angco" />
  {#each post.tags as t}<meta property="article:tag" content={t} />{/each}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={`${post.title} — Jade Angco`} />
  <meta name="twitter:description" content={post.excerpt} />
  <meta name="twitter:image" content={`${siteUrl}${post.ogImage}`} />
  {@html `
		<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Article",
			"headline": ${JSON.stringify(post.title)},
			"description": ${JSON.stringify(post.excerpt)},
			"image": "${siteUrl}${post.ogImage}",
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

<BlogTopbar
  links={[
    { label: 'All posts', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ]}
/>

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
        <a
          class="btn btn-primary btn-sm"
          href="/#contact"
          onclick={() =>
            setContactIntent({
              subject: `Project inquiry (via "${post.title}")`,
              message: `Hi Jade! I just read your post "${post.title}". Here's what I need:\n\n`,
            })}>Work with me →</a
        >
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

<BlogFooter backHref="/blog" backLabel="← All posts" />

<style>
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
  .post-body :global(.code-wrap) {
    position: relative;
    margin: 0 0 1.25rem;
  }
  .post-body :global(.code-wrap pre) {
    margin: 0;
  }
  .post-body :global(.copy-btn) {
    position: absolute;
    top: 0.55rem;
    right: 0.55rem;
    font-family: var(--font-body);
    font-size: 0.64rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-faint);
    background: var(--surface);
    border: 1px solid var(--border-strong);
    border-radius: 8px;
    padding: 0.3rem 0.6rem;
    cursor: pointer;
  }
  .post-body :global(.copy-btn:hover) {
    color: var(--primary);
    border-color: var(--primary);
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
  @media (max-width: 560px) {
    .pager {
      grid-template-columns: 1fr;
    }
  }
</style>
