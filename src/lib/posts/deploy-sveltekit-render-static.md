---
title: Deploying a SvelteKit static site on Render
excerpt: adapter-static, a render.yaml blueprint, and the two gotchas that bite everyone — fallback pages and prerendered routes.
date: 2026-09-21
tags: [SvelteKit, Render, Deployment]
og: og-blog-deploy-sveltekit-render-static.png
---

My portfolio is a SvelteKit app served as plain static files on Render. No Node server, no cold starts, free hosting. Here's the full setup — this site is the proof it works.

## 1. adapter-static

Install it and point the output at a `build` folder:

```js
// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: true,
      strict: true
    })
  }
};
```

Three settings matter:

- **`fallback: '404.html'`** — generates a fallback page so unknown URLs (and client-rendered routes like my project modals' deep links) don't hit a dead end. It also doubles as your custom 404 page.
- **`precompress: true`** — emits gzip + brotli versions of everything at build time. Free bandwidth savings.
- **`strict: true`** — fails the build if any route isn't prerenderable, so you catch dynamic-route mistakes before deploying, not after.

## 2. Prerender every route, including dynamic ones

Static output means every URL must exist at build time. Normal pages just work. Dynamic routes like my `/blog/[slug]` pages need an `entries()` function telling SvelteKit which slugs to generate:

```ts
// src/routes/blog/[slug]/+page.ts
export const prerender = true;

export function entries() {
  return posts.map((p) => ({ slug: p.slug }));
}
```

Forget this and the build fails under `strict` — which is exactly what you want.

## 3. The Render blueprint

One `render.yaml` in the repo root turns deploys into "push to branch, done":

```yaml
services:
  - type: web
    name: jadeangco-portfolio
    env: static
    buildCommand: npm ci && npm run build
    staticPublishPath: ./build
```

Connect it via **New → Blueprint** in the Render dashboard. Every push rebuilds and republishes. Keep the publish path and the adapter output (`build`) in sync or you'll deploy an empty site — I speak from experience.

## 4. Don't ship megabytes

Before my last deploy, four PNG screenshots weighed **7.8 MB**. I converted every referenced image to WebP (same folder, code updated) and the total dropped to **548 KB** — a 93% cut with no visible difference. Image weight is the cheapest Core Web Vitals win on a portfolio.

The short version: static adapter + strict prerendering + blueprint deploys + light images. If you want this exact setup, it's all running [right here](/) — and if you'd rather hire someone to do it for your site, [that's me](/#contact).
