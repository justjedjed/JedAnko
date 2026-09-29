<script lang="ts">
  import BlogTopbar from '$lib/components/BlogTopbar.svelte';
  import BlogFooter from '$lib/components/BlogFooter.svelte';
  import { setContactIntent } from '$lib/contactIntent';
  import { siteUrl } from '$lib/posts';

  const title = 'Case study: hosting 5 business websites on one server — MM Group';
  const desc =
    'How I moved five MM Group business websites onto a single hardened server with Nginx + Cloudflare Tunnel: problem, architecture, and verified live results.';
  const url = `${siteUrl}/work/mm-group-hosting`;
  const sites = [
    { name: 'MM Group of Companies', href: 'https://mmgroupcompanies.com/' },
    { name: 'MM Hotel Tandag', href: 'https://mmhoteltandag.mmgroupcompanies.com/' },
    {
      name: 'MM Building',
      href: 'https://mmcommercialbuilding.mmgroupcompanies.com/',
    },
    {
      name: "Michaela's Arabic Restobar",
      href: 'https://michaelasarabicrestobar.mmgroupcompanies.com/',
    },
    {
      name: "'M Debt Corporation",
      href: 'https://mdebtcorporation.mmgroupcompanies.com/',
    },
  ];
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  <meta
    name="keywords"
    content="MM Group, web hosting case study, Nginx, Cloudflare Tunnel, Jade Angco, Bislig City, Philippines"
  />
  <link rel="canonical" href={url} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={`${siteUrl}/og-image.png`} />
  <meta property="article:published_time" content="2026-09-29" />
  <meta property="article:author" content="Jade Jabagat Angco" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={desc} />
  <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
  {@html `
		<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Article",
			"headline": ${JSON.stringify(title)},
			"description": ${JSON.stringify(desc)},
			"image": "${siteUrl}/og-image.png",
			"datePublished": "2026-09-29",
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
    { label: 'Portfolio', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ]}
/>

<main id="main">
  <article class="section">
    <div class="section-inner article-wrap">
      <nav class="crumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/#live-sites">Live Sites</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">MM Group hosting</span>
      </nav>
      <p class="eyebrow">Case study · DevOps & Hosting</p>
      <h1>Five business websites. One server. Zero open ports.</h1>
      <p class="lede">
        How the MM Group of Companies — hotel, commercial building, restobar,
        and corporation — ended up on a single hardened server I host and
        monitor, instead of five scattered hosting bills nobody watched.
      </p>

      <h2>The problem</h2>
      <p>
        Five business websites means five things that can go down, five renewals
        to forget, and five logins nobody remembers. The group needed every site
        fast, always online, and looked after by one accountable person — not a
        ticket queue.
      </p>

      <h2>What I did</h2>
      <ol class="steps">
        <li>
          <strong>Audited everything</strong> — every domain, registrar login,
          DNS record, and expiry date in one inventory. You can't host what you
          haven't mapped.
        </li>
        <li>
          <strong>Consolidated onto one server</strong> — a single VPS running
          Nginx virtual hosts, one per site, serving static files in
          milliseconds.
        </li>
        <li>
          <strong>Connected one Cloudflare Tunnel</strong> — an outbound-only
          connection, so the firewall stays shut. No port forwarding, no
          exposed origin IP.
        </li>
        <li>
          <strong>Locked down TLS end to end</strong> — wildcard origin
          certificate, Full Strict encryption, WAF and rate limiting at the
          Cloudflare edge, scoped per site.
        </li>
        <li>
          <strong>Made it self-watching</strong> — health checks that restart
          the tunnel on silent drops, auto security patching, log rotation, and
          private admin access with automated snapshots.
        </li>
      </ol>

      <h2>The architecture</h2>
      <pre class="diagram">Visitor → Cloudflare edge (DNS + SSL + WAF)
        → Cloudflare Tunnel (outbound only, no open ports)
        → Nginx (routes each domain)
        → site files / apps</pre>

      <h2>Verified results</h2>
      <ul class="results">
        <li><strong>5 / 5 sites live</strong> — check for yourself:</li>
      </ul>
      <ul class="site-links">
        {#each sites as s}
          <li>
            <a href={s.href} target="_blank" rel="noopener noreferrer"
              >{s.name} <span aria-hidden="true">↗</span></a
            >
          </li>
        {/each}
      </ul>
      <p>
        Every site on my <a href="/#live-sites">Live Sites list</a> carries a
        badge that pings its real URL from your browser and shows the
        round-trip time — proof, not promises. Adding site number six is now a
        five-minute routine: one folder, one Nginx block, one tunnel route.
      </p>

      <aside class="cta">
        <div>
          <strong>Want this for your business?</strong>
          <p>
            Migration, hardening, monitoring, and someone to call — one
            accountable person instead of five hosting bills.
          </p>
        </div>
        <a
          class="btn btn-primary btn-sm"
          href="/#contact"
          onclick={() =>
            setContactIntent({
              subject: 'Hosting setup inquiry (via MM Group case study)',
              message:
                "Hi Jade! I read your MM Group hosting case study. Here's my current setup:\n\n- Sites:\n- Registrar/DNS:\n- Biggest worry:\n",
            })}>Get scoped →</a
        >
      </aside>
    </div>
  </article>
</main>

<BlogFooter backHref="/#live-sites" backLabel="← Back to live sites" />

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
  }
  .eyebrow {
    margin-bottom: 0.7rem;
  }
  .article-wrap h1 {
    font-size: clamp(1.9rem, 4.5vw, 2.7rem);
    letter-spacing: -0.03em;
    line-height: 1.08;
  }
  .lede {
    color: var(--ink-soft);
    font-size: 1.05rem;
    line-height: 1.65;
    margin-top: 0.9rem;
  }
  .article-wrap h2 {
    font-size: 1.35rem;
    letter-spacing: -0.02em;
    margin: 2.2rem 0 0.7rem;
  }
  .article-wrap p {
    color: var(--ink-soft);
    line-height: 1.7;
    font-size: 0.95rem;
    margin: 0 0 1rem;
  }
  .article-wrap p a {
    color: var(--primary);
    font-weight: 600;
  }
  .steps {
    margin: 0 0 1rem;
    padding-left: 1.3rem;
    color: var(--ink-soft);
    line-height: 1.7;
    font-size: 0.95rem;
  }
  .steps li {
    margin-bottom: 0.6rem;
  }
  .steps strong {
    color: var(--ink);
  }
  .diagram {
    background: var(--surface-raised);
    border: 1px solid var(--border-strong);
    border-radius: 12px;
    padding: 1rem 1.1rem;
    overflow-x: auto;
    font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
    font-size: 0.8rem;
    line-height: 1.7;
    color: var(--ink-soft);
    margin: 0 0 1rem;
  }
  .results {
    list-style: none;
    margin: 0;
    padding: 0;
    color: var(--ink-soft);
    font-size: 0.95rem;
  }
  .site-links {
    list-style: none;
    margin: 0.7rem 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }
  .site-links a {
    display: inline-block;
    font-weight: 700;
    font-size: 0.92rem;
    color: var(--ink);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: 0.6rem 0.85rem;
  }
  .site-links a:hover {
    border-color: var(--primary);
    color: var(--primary);
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
    margin-top: 0.3rem;
    max-width: 420px;
  }
</style>
