---
title: SvelteKit vs Nuxt after building real sites in both
excerpt: I built tourism sites in Nuxt and apps in SvelteKit. Here's my honest comparison — and which one I'd pick for your project.
date: 2026-09-14
tags: [SvelteKit, Nuxt, Vue.js, Comparison]
---

Most framework comparisons are written by people who read the docs. I built production sites in both: tourism websites in **Nuxt** (Elnido Hideaway, TravelHive) and live apps in **Svelte/SvelteKit** (Parinig, Reziofy). Here's what actually differs day to day.

## Reactivity: runes vs refs

Svelte 5 runes (`$state`, `$derived`) feel like writing plain JavaScript that happens to be reactive. No `.value` unwrapping, no thinking about refs vs reactive objects:

```svelte
let activeFilter = $state("All");
const filtered = $derived(
  activeFilter === "All" ? projects : projects.filter((p) => p.status === activeFilter)
);
```

Vue's Composition API is excellent, but `.value` ceremony adds up across a large codebase. For speed of writing, Svelte wins.

## Ecosystem: Nuxt wins on breadth

Need auth, i18n, image optimization, content? Nuxt has a first-party module for all of it. SvelteKit's ecosystem is younger — you'll assemble more yourself. For a content-heavy marketing site with a team, Nuxt's module catalog is a genuine advantage.

## Output and performance

Both ship fast static sites. Svelte's compiler approach (no virtual DOM, tiny runtime) gives it the edge in bundle size on interactive apps — noticeable on Philippine mobile data, which is the network half my users are on.

## When I'd pick which

- **Pick Nuxt** for content sites with a team, when you need its module ecosystem, or when hiring Vue developers later matters.
- **Pick SvelteKit** for interactive apps, dashboards, and solo/small-team builds where velocity matters most.

My portfolio runs SvelteKit; my tourism sites run Nuxt. Both choices were right for those projects. If you're deciding for yours, [describe it to me](/#contact) and I'll give you a straight answer — including when the answer is "plain HTML is enough."
