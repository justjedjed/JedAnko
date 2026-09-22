<script lang="ts">
  import { onMount } from "svelte";
  import type { Component } from "svelte";
  type Skill = { name: string; level: string; pct: number };
  type SkillGroup = { title: string; icon: Component; items: Skill[] };
  type Project = {
    title: string;
    kind: string;
    status: "Completed" | "In Development";
    desc: string;
    tags: string[];
    image: string;
    url?: string;
  };
  type Hosted = {
    title: string;
    role: string;
    desc: string;
    tags: string[];
    image: string;
    status: "Suspended" | "Live";
    url: string;
  };
  import {
    Moon,
    Sun,
    Sparkles,
    PenTool,
    Code,
    RefreshCw,
    LayoutGrid,
    Server,
    Database,
    Wrench,
    ArrowUpRight,
    ArrowRight,
    Mail,
    Check,
    Copy,
    Menu,
    X,
    BadgeCheck,
  } from "@lucide/svelte";

  const stats = [
    { value: "7", label: "Projects built" },
    { value: "5", label: "Live sites" },
    { value: "4+", label: "Clients served" },
    { value: "∞", label: "Experiments" },
  ];
  const aboutCards = [
    {
      title: "Detail Obsessed",
      desc: "Smooth micro-interactions, 60fps motion & pixel-perfect polish.",
      icon: Sparkles,
    },
    {
      title: "Design-Minded",
      desc: "Figma to code with precision — systems that scale beautifully.",
      icon: PenTool,
    },
    {
      title: "Clean Code",
      desc: "Readable, maintainable, tested. Future-you will thank you.",
      icon: Code,
    },
    {
      title: "Always Learning",
      desc: "Chasing new patterns, tools & delightful UX ideas daily.",
      icon: RefreshCw,
    },
  ];
  const aboutTags = [
    "SvelteKit",
    "Vue.js",
    "Nuxt",
    "TailwindCSS",
    "DaisyUI",
    "TypeScript",
    "CodeIgniter",
    "Firebase",
    "MySQL",
    "MongoDB",
    "Figma",
    "Vercel",
    "Docker",
    "Git",
    "Hono",
  ];
  const skillGroups: SkillGroup[] = [
    {
      title: "Frontend",
      icon: LayoutGrid,
      items: [
        { name: "SvelteKit", level: "Intermediate", pct: 65 },
        { name: "Nuxt / Vue.js", level: "Intermediate", pct: 60 },
        { name: "TailwindCSS", level: "Expert", pct: 95 },
        { name: "DaisyUI", level: "Expert", pct: 90 },
        { name: "TypeScript", level: "Intermediate", pct: 60 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      items: [
        { name: "CodeIgniter", level: "Intermediate", pct: 65 },
        { name: "Hono", level: "Beginner", pct: 30 },
        { name: "Firebase", level: "Intermediate", pct: 65 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      items: [
        { name: "MySQL", level: "Intermediate", pct: 65 },
        { name: "MongoDB", level: "Intermediate", pct: 55 },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      items: [
        { name: "Git & GitHub", level: "Advanced", pct: 85 },
        { name: "Vercel", level: "Advanced", pct: 85 },
        { name: "Render", level: "Intermediate", pct: 60 },
        { name: "Docker", level: "Beginner", pct: 30 },
        { name: "Figma", level: "Intermediate", pct: 60 },
      ],
    },
  ];
  const projects: Project[] = [
    {
      title: "Elnido Hideaway",
      kind: "Tourism Website",
      status: "Completed",
      desc: "Showcasing El Nido’s turquoise islands — destination cards, guides & immersive galleries.",
      tags: ["Nuxt", "TailwindCSS"],
      image: "/Elnido1.jpeg",
    },
    {
      title: "NutriGourmet",
      kind: "Food Blog",
      status: "Completed",
      desc: "Recipe publishing with rich cards, categories & editorial layout that tastes as good as it looks.",
      tags: ["CodeIgniter", "TailwindCSS"],
      image: "/Nutrigourment1.jpeg",
    },
    {
      title: "Student Wellness",
      kind: "Wellness Web App",
      status: "Completed",
      desc: "Mental-health monitoring — Random Forest predictions, editable profiles & admin analytics.",
      tags: ["Flutter", "MySQL"],
      image: "/MentalHealth.jpeg",
    },
    {
      title: "TravelHive",
      kind: "Tourism Mockup",
      status: "Completed",
      desc: "Surigao del Sur explorations — itineraries, coastal cards & local highlights.",
      tags: ["Nuxt", "TailwindCSS"],
      image: "/TravelHive.png",
    },
    {
      title: "Parinig",
      kind: "Anonymous Sharing",
      status: "In Development",
      desc: "Whisper freely — no names, no pressure. Real thoughts, real-time, reimagined.",
      tags: ["Svelte", "Firebase", "DaisyUI"],
      image: "/parinig.jpeg",
      url: "https://parinig.vercel.app/",
    },
    {
      title: "Reziofy",
      kind: "Resume Builder",
      status: "In Development",
      desc: "Polished resumes in minutes — smart templates, live preview & instant PDF.",
      tags: ["Svelte", "Firebase", "DaisyUI"],
      image: "/reziofy.png",
      url: "https://reziofy.web.app/",
    },
  ];
  const filters = ["All", "Completed", "In Development"];
  let activeFilter = $state("All");
  const filteredProjects = $derived(
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.status === activeFilter),
  );
  const hosted: Hosted[] = [
    {
      title: "MM Group of Companies",
      role: "DevOps & Hosting",
      desc: "The umbrella holding every MM venture — hotel, building, restobar & corporation. A unified digital front for the entire group.",
      tags: ["HTML/CSS"],
      image: "/mmcompanies.jpeg",
      status: "Live",
      url: "https://mmgroupcompanies.com/",
    },
    {
      title: "MM Hotel Tandag",
      role: "DevOps & Hosting",
      desc: "Full hotel experience — rooms, coffee lounge, restobar & banquet gallery.",
      tags: ["HTML/CSS"],
      image: "/mmhotel.png",
      status: "Live",
      url: "https://mmhoteltandag.mmgroupcompanies.com/",
    },
    {
      title: "MM Building",
      role: "DevOps & Hosting",
      desc: "Commercial + residential showcase — pool, elevator & event lighting.",
      tags: ["HTML/CSS"],
      image: "/mmbuilding.png",
      status: "Live",
      url: "https://mmcommercialbuilding.mmgroupcompanies.com/",
    },
    {
      title: "Michaela's Arabic Restobar",
      role: "DevOps & Hosting",
      desc: "Middle-Eastern & Asian flavors — menu, story & contact crafted warmly.",
      tags: ["HTML/CSS"],
      image: "/restobar.png",
      status: "Live",
      url: "https://michaelasarabicrestobar.mmgroupcompanies.com/",
    },
    {
      title: "'M Debt Corporation",
      role: "DevOps & Hosting",
      desc: "Corporate site for Caraga’s debt-management specialists — trust, built digitally.",
      tags: ["HTML/CSS"],
      image: "/mdebt.png",
      status: "Live",
      url: "https://mdebtcorporation.mmgroupcompanies.com/",
    },
  ];
  const tickerItems = [
    "SvelteKit",
    "Vue.js",
    "Nuxt",
    "TailwindCSS",
    "TypeScript",
    "Firebase",
    "MySQL",
    "Figma",
    "Vercel",
    "Open for work",
  ];
  const navLinks = ["About", "Skills", "Projects", "Live Sites", "Contact"];
  let name = $state(""),
    email = $state(""),
    subject = $state(""),
    message = $state(""),
    sending = $state(false),
    sent = $state(false),
    sendError = $state(false),
    copied = $state(false);
  async function handleSubmit(e: Event) {
    e.preventDefault();
    if (sending) return;
    sending = true;
    sendError = false;
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/jedboyjabagat@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            _subject: `Portfolio contact: ${subject || "New message"}`,
            _captcha: "false",
          }),
        },
      );
      if (!res.ok) throw new Error(`Formsubmit: ${res.status}`);
      sent = true;
      name = "";
      email = "";
      subject = "";
      message = "";
    } catch {
      sendError = true;
      window.location.href = `mailto:jedboyjabagat@gmail.com?subject=${encodeURIComponent(
        `Portfolio contact: ${subject || "New message"} from ${name} (${email})`,
      )}&body=${encodeURIComponent(message)}`;
    } finally {
      sending = false;
      if (sent) setTimeout(() => (sent = false), 2600);
    }
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("jedboyjabagat@gmail.com");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = "jedboyjabagat@gmail.com";
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        // Clipboard unavailable — user can copy manually.
      } finally {
        ta.remove();
      }
    }
    copied = true;
    setTimeout(() => (copied = false), 1800);
  }
  function trackResume(e: Event) {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    fetch("https://formsubmit.co/ajax/jedboyjabagat@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: "Portfolio resume download",
        event: "resume_download",
        url: target.href,
        time: new Date().toISOString(),
      }),
      keepalive: true,
    }).catch(() => {});
    window.open(target.href, "_blank", "noopener,noreferrer");
  }
  let theme: "dark" | "light" = $state("dark");
  let scrolled = $state(false);
  let menuOpen = $state(false);
  function closeMenu() {
    menuOpen = false;
  }
  onMount(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;
    theme = saved ?? (prefersLight ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
    const onScroll = () => (scrolled = window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  });
  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
</script>

<svelte:head>
  <title>Jade Angco — Front-End Developer • SvelteKit & Vue</title>
  <meta
    name="description"
    content="Male Front-End Developer specializing in SvelteKit, Vue.js, and Nuxt. Building responsive, visually polished web interfaces with modern technologies."
  />
  <meta
    name="keywords"
    content="Jade Angco, Front-End Developer, Web Developer, SvelteKit, Vue.js, Nuxt, TailwindCSS, DaisyUI, TypeScript, CodeIgniter, Firebase, Bislig City, Surigao del Sur, Philippines, Freelance Developer, UI/UX Developer, Computer Science, Full Stack Developer"
  />
  {@html `
		<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Jade Jabagat Angco",
			"gender": "Male",
			"url": "https://jadeangco-portfolio.onrender.com",
			"image": "https://jadeangco-portfolio.onrender.com/Jade.jpg",
			"jobTitle": "Front-End Developer",
			"worksFor": {
				"@type": "Organization",
				"name": "Freelance"
			},
			"description": "Male Front-End Developer specializing in SvelteKit, Vue.js, and modern web technologies. Building fast, responsive interfaces with clean code.",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Bislig City",
				"addressRegion": "Surigao del Sur",
				"addressCountry": "Philippines"
			},
			"email": "jedboyjabagat@gmail.com",
			"alumniOf": {
				"@type": "EducationalOrganization",
				"name": "North Eastern Mindanao State University",
				"location": "Tagbina"
			},
			"knowsAbout": [
				"SvelteKit",
				"Vue.js",
				"Nuxt",
				"TailwindCSS",
				"DaisyUI",
				"TypeScript",
				"CodeIgniter",
				"Firebase",
				"MySQL",
				"MongoDB",
				"Web Development",
				"Front-End Development",
				"UI/UX Design"
			],
			"sameAs": [
				"https://github.com/justjedjed",
				"https://www.facebook.com/just.jeddd"
			]
		}
		</script>
	`}
</svelte:head>

<svelte:window
  onkeydown={(e) => {
    if (e.key === "Escape") menuOpen = false;
  }}
/>

<a class="skip-link" href="#main">Skip to content</a>
<div class="topline" aria-hidden="true"></div>

<header class="mast" class:scrolled>
  <div class="section-inner mast-inner">
    <a href="#main" class="brand">
      <span class="brand-mark" aria-hidden="true">JA</span>
      <span class="brand-text">
        <strong>Jade Angco</strong>
        <span>Front-End Developer</span>
      </span>
    </a>
    <nav aria-label="Sections">
      <ul class="mast-nav">
        {#each navLinks as link}
          <li>
            <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`}>
              {link}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    <div class="mast-actions">
      <button
        type="button"
        class="theme-toggle"
        onclick={toggleTheme}
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        <span class="toggle-glyph" aria-hidden="true">
          {#if theme === "dark"}
            <Moon size={16} strokeWidth={2.25} />
          {:else}
            <Sun size={16} strokeWidth={2.25} />
          {/if}
        </span>
      </button>
      <button
        type="button"
        class="menu-button"
        onclick={() => (menuOpen = !menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span aria-hidden="true">
          {#if menuOpen}
            <X size={20} strokeWidth={2.25} />
          {:else}
            <Menu size={20} strokeWidth={2.25} />
          {/if}
        </span>
      </button>
    </div>
  </div>
  {#if menuOpen}
    <div class="mobile-panel" id="mobile-menu">
      <nav aria-label="Sections">
        <ul>
          {#each navLinks as link}
            <li>
              <a
                href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                onclick={closeMenu}
              >
                {link}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  {/if}
</header>

<main id="main">
  <!-- HERO -->
  <section class="section hero">
    <div class="section-inner hero-grid">
      <div class="hero-copy">
        <p class="status-row">
          <span class="pulse" aria-hidden="true"></span>
          <span>Available for work</span>
          <span class="status-sep" aria-hidden="true">/</span>
          <span>Bislig City, PH — Remote worldwide</span>
        </p>
        <h1 class="hero-title">
          Interfaces<br />with intent<span class="dot">.</span>
        </h1>
        <p class="lede">
          I’m Jade Angco. I build <strong>fast</strong>,
          <strong>responsive</strong>
          interfaces with editorial polish — design systems, crisp typography, and
          clean, maintainable code in <em>SvelteKit</em> & <em>Vue.js</em>.
        </p>
        <div class="hero-cta">
          <a
            href="https://reziofy.web.app/jadeangco?type=resume"
            class="btn btn-primary"
            onclick={trackResume}
            >View resume
            <span class="btn-icon" aria-hidden="true"
              ><ArrowUpRight size={15} strokeWidth={2.5} /></span
            ></a
          >
          <a href="#projects" class="btn btn-ghost"
            >Selected work
            <span aria-hidden="true"
              ><ArrowUpRight size={15} strokeWidth={2.5} /></span
            ></a
          >
        </div>
        <div class="hero-socials">
          <a
            href="https://github.com/justjedjed"
            target="_blank"
            rel="noopener"
            class="soc"
            aria-label="GitHub"
            title="GitHub">GitHub</a
          >
          <a
            href="https://www.facebook.com/just.jeddd"
            target="_blank"
            rel="noopener"
            class="soc"
            aria-label="Facebook"
            title="Facebook">Facebook</a
          >
          <a
            href="mailto:jedboyjabagat@gmail.com?subject=Portfolio%20inquiry"
            class="soc"
            aria-label="Email"
            title="Email">Email</a
          >
          <a
            href="https://reziofy.web.app/jadeangco?type=resume"
            class="soc"
            aria-label="Resume"
            title="Resume"
            onclick={trackResume}>Resume</a
          >
        </div>
      </div>
      <figure class="portrait">
        <div class="portrait-frame">
          <img
            src="/Jade.jpg"
            alt="Portrait of Jade Angco"
            fetchpriority="high"
          />
        </div>
        <figcaption class="portrait-cap">
          <span
            ><strong>Jade Jabagat Angco</strong> — BS Computer Science, NEMSU Tagbina</span
          >
          <span class="chip live"
            ><span class="chip-dot" aria-hidden="true"></span>Open</span
          >
        </figcaption>
      </figure>
    </div>
    <div class="section-inner">
      <ul class="trust" aria-label="Highlights">
        {#each stats as s}
          <li>
            <strong>{s.value}</strong><span>{s.label}</span>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <!-- TICKER -->
  <div class="ticker" aria-hidden="true">
    <div class="ticker-track">
      {#each [0, 1] as dup}
        <span class="ticker-seq">
          {#each tickerItems as t}
            <span class="ticker-item">{t}</span><span
              class="ticker-dot"
              aria-hidden="true"
            ></span>
          {/each}
        </span>
      {/each}
    </div>
  </div>

  <!-- ABOUT -->
  <section class="section rule" id="about">
    <div class="section-inner">
      <div class="sec-top">
        <div>
          <h2 class="sec-title">
            Engineer with an editor’s eye<span class="dot">.</span>
          </h2>
        </div>
        <p class="sec-sub">
          Junior Computer Information Technician & frontend developer crafting
          human-centered digital experiences.
        </p>
      </div>
      <div class="about-grid">
        <div class="about-main">
          <h3>
            BS Computer Science — North Eastern Mindanao State University,
            Tagbina. UI/UX + IT support, from hardware to high-fidelity
            interfaces.
          </h3>
          <p>
            I sweat the details — fluid motion, crisp typography, and code
            that’s a joy to maintain. When I’m not pushing pixels, I’m
            deconstructing delightful UI patterns and shipping side projects.
          </p>
          <p class="cert">
            <span aria-hidden="true"
              ><BadgeCheck size={18} strokeWidth={2.25} /></span
            >
            <span>
              <strong>Certified Computer Systems Servicing NCII</strong> — solid
              roots in both hardware & software.
            </span>
          </p>
          <div class="tag-cloud">
            {#each aboutTags as t}<span class="tag">{t}</span>{/each}
          </div>
        </div>
        <ol class="principles">
          {#each aboutCards as card, i}
            {@const PIcon = card.icon}
            <li>
              <span class="p-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4>
                  <span class="p-icon" aria-hidden="true"
                    ><PIcon size={16} strokeWidth={2.25} /></span
                  >
                  {card.title}
                </h4>
                <p>{card.desc}</p>
              </div>
            </li>
          {/each}
        </ol>
      </div>
    </div>
  </section>

  <!-- SKILLS -->
  <section class="section rule" id="skills">
    <div class="section-inner">
      <div class="sec-top">
        <div>
          <h2 class="sec-title">What I work with<span class="dot">.</span></h2>
        </div>
        <p class="sec-sub">
          Four disciplines, one bar to clear: does it ship, scale, and stay
          readable?
        </p>
      </div>
      <div class="stack-grid">
        {#each skillGroups as g}
          {@const GIcon = g.icon}
          <div class="stack-panel">
            <div class="stack-head">
              <span class="stack-icon" aria-hidden="true"
                ><GIcon size={15} strokeWidth={2.25} /></span
              >
              <h3>{g.title}</h3>
              <span class="chip">{g.items.length} skills</span>
            </div>
            <ul>
              {#each g.items as it}
                <li>
                  <div class="meter-row">
                    <span class="meter-name">{it.name}</span>
                    <span class="meter-level">{it.level}</span>
                  </div>
                  <div
                    class="meter"
                    role="img"
                    aria-label={`${it.name}: ${it.pct} percent`}
                  >
                    <div class="meter-fill" style={`width:${it.pct}%`}></div>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="section rule" id="projects">
    <div class="section-inner">
      <div class="sec-top">
        <div>
          <h2 class="sec-title">Things I’ve built<span class="dot">.</span></h2>
        </div>
        <div class="filters" role="group" aria-label="Filter projects">
          {#each filters as f}
            <button
              type="button"
              class="pill"
              class:active={activeFilter === f}
              aria-pressed={activeFilter === f}
              onclick={() => (activeFilter = f)}>{f}</button
            >
          {/each}
        </div>
      </div>
      <div class="work-list">
        {#each filteredProjects as p, i}
          <article class="work-row">
            {#if p.url}
              <a
                class="work-media"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.title}`}
              >
                <img src={p.image} alt={p.title} loading="lazy" />
                <span
                  class="chip"
                  class:live={p.status === "Completed"}
                  class:dev={p.status !== "Completed"}
                >
                  {p.status}
                </span>
                <span class="work-open" aria-hidden="true"
                  ><ArrowUpRight size={17} strokeWidth={2.5} /></span
                >
              </a>
            {:else}
              <div class="work-media">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span
                  class="chip"
                  class:live={p.status === "Completed"}
                  class:dev={p.status !== "Completed"}
                >
                  {p.status}
                </span>
              </div>
            {/if}
            <div class="work-body">
              <p class="work-meta">
                <span class="work-index">{String(i + 1).padStart(2, "0")}</span>
                <span class="work-kind">{p.kind}</span>
              </p>
              <h3>{p.title}</h3>
              <p class="work-desc">{p.desc}</p>
              <div class="tag-row">
                {#each p.tags as t}<span class="tag">{t}</span>{/each}
              </div>
              {#if p.url}
                <a
                  class="text-link"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site
                  <span aria-hidden="true"
                    ><ArrowUpRight size={14} strokeWidth={2.5} /></span
                  >
                </a>
              {:else}
                <a class="text-link" href="#contact">
                  Case study on request
                  <span aria-hidden="true"
                    ><ArrowRight size={14} strokeWidth={2.5} /></span
                  >
                </a>
              {/if}
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <!-- LIVE SITES -->
  <section class="section rule" id="live-sites">
    <div class="section-inner">
      <div class="sec-top">
        <div>
          <h2 class="sec-title">Hosted websites<span class="dot">.</span></h2>
        </div>
        <p class="sec-sub">
          Real-world sites designed, developed & deployed for clients — live,
          fast & maintained.
        </p>
      </div>
      <ul class="site-list">
        {#each hosted as h, i}
          <li class="site-row">
            <span class="site-num">{String(i + 1).padStart(2, "0")}</span>
            <img class="site-thumb" src={h.image} alt={h.title} loading="lazy" />
            <div class="site-body">
              <div class="site-head">
                <h3>{h.title}</h3>
                <span class="chip live">{h.status}</span>
              </div>
              <p class="site-role">{h.role}</p>
              <p class="site-desc">{h.desc}</p>
              <div class="tag-row">
                {#each h.tags as t}<span class="tag">{t}</span>{/each}
              </div>
            </div>
            <a
              class="site-visit"
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${h.title}`}
            >
              <span aria-hidden="true"
                ><ArrowUpRight size={18} strokeWidth={2.25} /></span
              >
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="section rule" id="contact">
    <div class="section-inner">
      <div class="sec-top">
        <div>
          <h2 class="sec-title">
            Let’s build something sharp<span class="dot">.</span>
          </h2>
        </div>
        <p class="sec-sub">
          Have a project, question, or just want to say hi? My inbox is always
          open.
        </p>
      </div>
      <div class="contact-grid">
        <aside class="contact-aside">
          <p class="aside-note">
            Typically replies within <strong>24 hours</strong>. For urgent —
            Facebook Messenger is fastest.
          </p>
          <button type="button" class="channel" onclick={copyEmail}>
            <span class="channel-label">Email — click to copy</span>
            <strong
              >{copied
                ? "Copied to clipboard!"
                : "jedboyjabagat@gmail.com"}</strong
            >
            <span class="channel-arrow" aria-hidden="true">
              {#if copied}
                <Check size={16} strokeWidth={2.5} />
              {:else}
                <Copy size={16} strokeWidth={2.25} />
              {/if}
            </span>
          </button>
          <a href="mailto:jedboyjabagat@gmail.com?subject=Portfolio%20inquiry" class="channel">
            <span class="channel-label">Prefer your mail app?</span>
            <strong>Compose an email directly</strong>
            <span class="channel-arrow" aria-hidden="true"
              ><Mail size={16} strokeWidth={2.25} /></span
            >
          </a>
          <a
            href="https://www.facebook.com/just.jeddd"
            target="_blank"
            rel="noopener"
            class="channel"
          >
            <span class="channel-label">Facebook</span>
            <strong>facebook.com/just.jeddd</strong>
            <span class="channel-arrow" aria-hidden="true"
              ><ArrowRight size={16} strokeWidth={2.25} /></span
            >
          </a>
          <a
            href="https://github.com/justjedjed"
            target="_blank"
            rel="noopener"
            class="channel"
          >
            <span class="channel-label">GitHub</span>
            <strong>github.com/justjedjed</strong>
            <span class="channel-arrow" aria-hidden="true"
              ><ArrowRight size={16} strokeWidth={2.25} /></span
            >
          </a>
          <div class="channel static">
            <span class="channel-label">Location</span>
            <strong>Bislig City, Surigao del Sur, Philippines</strong>
          </div>
        </aside>
        <form class="contact-form" onsubmit={handleSubmit}>
          <div class="form-row">
            <label for="cf-name"
              ><span>Name *</span><input
                id="cf-name"
                name="name"
                type="text"
                bind:value={name}
                placeholder="Ada Lovelace"
                autocomplete="name"
                required
              /></label
            >
            <label for="cf-email"
              ><span>Email *</span><input
                id="cf-email"
                name="email"
                type="email"
                bind:value={email}
                placeholder="ada@lovelace.dev"
                autocomplete="email"
                required
              /></label
            >
          </div>
          <label for="cf-subject"
            ><span>Subject</span><input
              id="cf-subject"
              name="subject"
              type="text"
              bind:value={subject}
              placeholder="Project inquiry, collaboration..."
              autocomplete="off"
            /></label
          >
          <label for="cf-message"
            ><span>Message *</span><textarea
              id="cf-message"
              name="message"
              rows="5"
              bind:value={message}
              placeholder="Tell me about your idea..."
              required
            ></textarea></label
          >
          <button
            type="submit"
            class="btn btn-primary btn-block"
            class:sent
            disabled={sending}
          >
            {#if sending}
              Sending…
            {:else if sent}
              <span class="btn-icon" aria-hidden="true"
                ><Check size={15} strokeWidth={2.5} /></span
              > Message sent — thank you!
            {:else}
              Send message
              <span class="btn-icon" aria-hidden="true"
                ><ArrowRight size={15} strokeWidth={2.5} /></span
              >
            {/if}
          </button>
          {#if sendError}
            <p class="form-note" role="alert">
              Couldn’t send automatically — your mail app should have opened
              instead.
            </p>
          {:else}
            <p class="form-note">
              I reply within 24 hours. Your details stay private.
            </p>
          {/if}
        </form>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="section-inner footer-inner">
    <p class="foot-big">Available worldwide<span class="dot">.</span></p>
    <div class="foot-row">
      <span class="foot-brand">&lt;JA/&gt; <span>2026</span></span>
      <span class="foot-mid"
        >Crafted in Bislig · <span class="avail">● Available for new work</span
        ></span
      >
      <span class="foot-legal"
        >© 2026 Jade Jabagat Angco — Designed & built in Bislig City, PH</span
      >
    </div>
  </div>
</footer>

<style>
  .topline {
    height: 4px;
    background: var(--primary);
    position: sticky;
    top: 0;
    z-index: 60;
  }

  .mast {
    position: sticky;
    top: 4px;
    z-index: 50;
    background: var(--nav-bg);
    backdrop-filter: blur(16px) saturate(1.3);
    border-bottom: 1px solid var(--border);
  }
  .mast.scrolled {
    box-shadow: var(--shadow-soft);
  }
  .mast-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }
  .brand-mark {
    width: 38px;
    height: 38px;
    background: var(--primary);
    color: var(--on-primary);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 0.04em;
    border-radius: 8px;
  }
  .brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.15;
  }
  .brand-text strong {
    font-size: 0.92rem;
    letter-spacing: -0.01em;
  }
  .brand-text span {
    font-size: 0.68rem;
    color: var(--ink-soft);
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .mast-nav {
    display: flex;
    gap: 1.4rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .mast-nav a {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-soft);
    display: inline-flex;
    gap: 0.35rem;
    align-items: baseline;
    padding: 0.3rem 0;
    border-bottom: 2px solid transparent;
  }
  .mast-nav a:hover {
    color: var(--ink);
    border-color: var(--primary);
  }
  .menu-button {
    display: none;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: var(--surface-raised);
    border: 1px solid var(--border-strong);
    color: var(--ink);
  }
  .menu-button:hover {
    background: var(--surface-hover);
    border-color: var(--ink);
  }
  .menu-button span {
    display: inline-flex;
  }
  .mobile-panel {
    border-top: 1px solid var(--border);
    padding: 0.6rem 1.5rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    background: var(--nav-bg);
  }
  .mobile-panel ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .mobile-panel a:not(.btn) {
    display: block;
    padding: 0.7rem 0.1rem;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-soft);
    border-bottom: 1px solid var(--border);
  }
  .mobile-panel a:not(.btn):hover {
    color: var(--primary);
  }
  .mast-actions {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  .theme-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    background: var(--surface-raised);
    border: 1px solid var(--border-strong);
    border-radius: 999px;
    padding: 0.45rem 0.8rem;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink);
  }
  .theme-toggle:hover {
    background: var(--surface-hover);
    border-color: var(--ink);
  }
  .toggle-glyph {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    color: var(--primary);
  }
  .theme-toggle:hover .toggle-glyph {
    color: var(--ink);
  }

  .hero {
    padding-top: 3.5rem;
    overflow: hidden;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 3rem;
    align-items: center;
  }
  .status-row {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    flex-wrap: wrap;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-soft);
    border: 1px solid var(--border-strong);
    background: var(--surface);
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
  }
  .pulse {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary);
    box-shadow: var(--green-glow);
    animation: ping 1.8s infinite;
  }
  @keyframes ping {
    0% {
      transform: scale(0.75);
      opacity: 0.6;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
  .status-sep {
    color: var(--primary);
  }
  .hero-title {
    font-size: clamp(3rem, 7.5vw, 4.9rem);
    font-weight: 700;
    letter-spacing: -0.045em;
    line-height: 0.98;
    margin-top: 0.6rem;
  }
  .hero-title .dot {
    color: var(--primary);
  }
  .lede {
    margin-top: 1.2rem;
    color: var(--ink-soft);
    line-height: 1.75;
    font-size: 1rem;
    max-width: 540px;
  }
  .lede strong {
    color: var(--ink);
  }
  .lede em {
    font-style: normal;
    color: var(--primary);
    font-weight: 700;
  }
  .hero-cta {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.7rem;
    flex-wrap: wrap;
  }
  .hero-cta .btn > span,
  .btn-icon {
    display: inline-flex;
    flex: none;
  }
  .hero-socials {
    display: flex;
    gap: 1.1rem;
    margin-top: 1.4rem;
    flex-wrap: wrap;
  }
  .soc {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-soft);
    border-bottom: 2px solid var(--border-strong);
    padding-bottom: 0.2rem;
  }
  .soc:hover {
    color: var(--primary);
    border-color: var(--primary);
  }

  .portrait {
    margin: 0;
  }
  .portrait-frame {
    position: relative;
    border-radius: var(--radius-xl);
    overflow: hidden;
    border: 1px solid var(--border-strong);
    background: var(--surface-raised);
    box-shadow: var(--shadow-heavy);
  }
  .portrait-frame::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-top: 4px solid var(--primary);
  }
  .portrait-frame img {
    width: 100%;
    height: 460px;
    object-fit: cover;
    display: block;
    filter: saturate(0.92);
  }
  .portrait-cap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    margin-top: 0.7rem;
    font-size: 0.78rem;
    color: var(--ink-soft);
    border: 1px solid var(--border);
    background: var(--surface);
    border-radius: var(--radius-md);
    padding: 0.7rem 0.85rem;
  }
  .portrait-cap strong {
    color: var(--ink);
  }
  .chip-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
    display: inline-block;
  }

  .trust {
    display: flex;
    flex-wrap: wrap;
    margin: 2.6rem 0 0;
    padding: 0;
    list-style: none;
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-lg);
    background: var(--surface);
    overflow: hidden;
  }
  .trust li {
    flex: 1 1 0;
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    padding: 1.1rem 1.25rem;
    border-left: 1px solid var(--border);
    white-space: nowrap;
  }
  .trust li:first-child {
    border-left: none;
  }
  .trust strong {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  .trust span {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }

  .ticker {
    background: var(--primary);
    color: var(--on-primary);
    overflow: hidden;
    border-top: 1px solid var(--primary);
    border-bottom: 1px solid var(--primary);
  }
  .ticker-track {
    display: flex;
    width: max-content;
    animation: marquee 28s linear infinite;
  }
  .ticker:hover .ticker-track {
    animation-play-state: paused;
  }
  .ticker-seq {
    display: flex;
    align-items: center;
    padding: 0.65rem 0;
  }
  .ticker-item {
    font-family: var(--font-display);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 0 1rem;
    white-space: nowrap;
  }
  .ticker-dot {
    width: 7px;
    height: 7px;
    flex: none;
    margin: 0 1rem;
    background: currentColor;
    opacity: 0.8;
    transform: rotate(45deg);
  }
  @keyframes marquee {
    to {
      transform: translateX(-50%);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    :global(html) {
      scroll-behavior: auto;
    }
    .ticker-track,
    .pulse {
      animation: none;
    }
    .work-media img,
    .work-open,
    .btn {
      transition: none;
    }
    .work-row:hover .work-media img {
      transform: none;
    }
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 2.5rem;
    align-items: start;
  }
  .about-main h3 {
    font-size: 1.15rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
  }
  .about-main p {
    color: var(--ink-soft);
    line-height: 1.75;
    margin-top: 1rem;
    font-size: 0.94rem;
  }
  .cert {
    display: flex;
    align-items: flex-start;
    gap: 0.7rem;
    border: 1px solid var(--border-strong);
    background: var(--green-tint);
    padding: 0.8rem 0.9rem;
    border-radius: var(--radius-md);
  }
  .cert > span:first-child {
    display: inline-flex;
    flex: none;
    margin-top: 0.15rem;
    color: var(--primary);
  }
  .cert strong {
    color: var(--ink);
  }
  .tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 1.2rem;
  }
  .principles {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--border-strong);
  }
  .principles li {
    display: flex;
    gap: 1rem;
    padding: 1.1rem 0.2rem;
    border-bottom: 1px solid var(--border);
  }
  .p-num {
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--primary);
    font-size: 0.85rem;
    padding-top: 0.15rem;
  }
  .principles h4 {
    font-size: 0.98rem;
    margin-bottom: 0.3rem;
  }
  .p-icon {
    display: inline-flex;
    vertical-align: -3px;
    color: var(--primary);
    margin-right: 0.35rem;
  }
  .principles p {
    font-size: 0.86rem;
    color: var(--ink-soft);
    line-height: 1.6;
  }

  .stack-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .stack-panel {
    background: var(--surface);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-lg);
    padding: 1.35rem;
    box-shadow: var(--shadow-soft);
  }
  .stack-head {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 1.1rem;
    padding-bottom: 0.9rem;
    border-bottom: 1px solid var(--border);
  }
  .stack-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--on-primary);
    background: var(--primary);
    border-radius: 6px;
    padding: 0.3rem;
  }
  .stack-head h3 {
    font-size: 1.05rem;
  }
  .stack-head .chip {
    margin-left: auto;
  }
  .stack-panel ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .meter-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.45rem;
  }
  .meter-name {
    font-size: 0.9rem;
    font-weight: 600;
  }
  .meter-level {
    font-size: 0.64rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--primary);
  }
  .meter {
    height: 6px;
    border-radius: 999px;
    background: var(--surface-raised);
    border: 1px solid var(--border);
    overflow: hidden;
  }
  .meter-fill {
    height: 100%;
    background: var(--primary);
    border-radius: 999px;
  }

  .filters {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .pill {
    padding: 0.55rem 1.05rem;
    border-radius: 999px;
    border: 1px solid var(--border-strong);
    background: var(--surface);
    font-size: 0.66rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: var(--ink-soft);
    text-transform: uppercase;
  }
  .pill:hover {
    border-color: var(--primary);
    color: var(--ink);
  }
  .pill.active {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--on-primary);
  }

  .work-list {
    display: flex;
    flex-direction: column;
  }
  .work-row {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 1.75rem;
    padding: 1.75rem 0;
    border-top: 1px solid var(--border-strong);
    align-items: center;
  }
  .work-list .work-row:last-child {
    border-bottom: 1px solid var(--border-strong);
  }
  .work-media {
    position: relative;
    display: block;
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid var(--border-strong);
    background: var(--surface-raised);
    aspect-ratio: 16/10;
  }
  .work-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.35s var(--ease-smooth);
  }
  .work-row:hover .work-media img {
    transform: scale(1.035);
  }
  .work-media .chip {
    position: absolute;
    top: 0.7rem;
    left: 0.7rem;
    background: rgba(0, 0, 0, 0.72);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
  }
  .work-media .chip.live {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--on-primary);
  }
  .work-open {
    position: absolute;
    right: 0.7rem;
    bottom: 0.7rem;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--primary);
    color: var(--on-primary);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    opacity: 0;
    transform: translateY(6px);
    transition:
      opacity 0.2s,
      transform 0.25s var(--ease-spring);
  }
  .work-row:hover .work-open {
    opacity: 1;
    transform: translateY(0);
  }
  .channel-arrow,
  .site-visit span {
    display: inline-flex;
  }
  .work-meta {
    display: flex;
    align-items: baseline;
    gap: 0.7rem;
  }
  .work-index {
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--primary);
    font-size: 0.85rem;
  }
  .work-kind {
    font-size: 0.64rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ink-faint);
  }
  .work-body h3 {
    font-size: 1.45rem;
    letter-spacing: -0.02em;
    margin-top: 0.35rem;
  }
  .work-desc {
    color: var(--ink-soft);
    line-height: 1.65;
    margin-top: 0.55rem;
    font-size: 0.92rem;
    max-width: 520px;
  }
  .tag-row {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    margin-top: 0.85rem;
  }
  .text-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: 1rem;
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
    padding-bottom: 0.15rem;
  }
  .text-link:hover {
    color: var(--ink);
    border-color: var(--ink);
  }

  .site-list {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--border-strong);
  }
  .site-row {
    display: grid;
    grid-template-columns: auto 150px 1fr auto;
    gap: 1.25rem;
    align-items: center;
    padding: 1.1rem 0.25rem;
    border-bottom: 1px solid var(--border);
    transition: background 0.15s;
  }
  .site-row:hover {
    background: var(--surface);
  }
  .site-num {
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--ink-faint);
    font-size: 0.85rem;
  }
  .site-thumb {
    width: 150px;
    height: 92px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid var(--border-strong);
    display: block;
    background: var(--surface-raised);
  }
  .site-head {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    flex-wrap: wrap;
  }
  .site-head h3 {
    font-size: 1.02rem;
  }
  .site-role {
    font-size: 0.62rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--primary);
    margin-top: 0.3rem;
  }
  .site-desc {
    font-size: 0.85rem;
    color: var(--ink-soft);
    line-height: 1.6;
    margin-top: 0.4rem;
    max-width: 560px;
  }
  .site-row .tag-row {
    margin-top: 0.6rem;
  }
  .site-visit {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid var(--border-strong);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: var(--ink);
  }
  .site-visit:hover {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--on-primary);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 1.25rem;
    align-items: start;
  }
  .contact-aside {
    background: var(--primary);
    color: var(--on-primary);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    box-shadow: var(--shadow-heavy);
  }
  .aside-note {
    font-size: 0.9rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.92);
  }
  .aside-note strong {
    color: #fff;
  }
  .channel {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.15rem 0.7rem;
    align-items: center;
    background: rgba(0, 0, 0, 0.22);
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 10px;
    padding: 0.8rem 0.9rem;
    color: #fff;
    width: 100%;
    font: inherit;
    text-align: left;
    appearance: none;
  }
  a.channel:hover,
  button.channel:hover {
    background: rgba(0, 0, 0, 0.34);
    border-color: #fff;
  }
  .channel-label {
    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.78);
    grid-column: 1;
  }
  .channel strong {
    font-size: 0.86rem;
    word-break: break-all;
    grid-column: 1;
  }
  .channel-arrow {
    grid-column: 2;
    grid-row: 1 / span 2;
    font-weight: 800;
  }
  .channel.static {
    background: rgba(255, 255, 255, 0.12);
  }
  .contact-form {
    background: var(--surface);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.95rem;
    box-shadow: var(--shadow-soft);
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.9rem;
  }
  .contact-form label {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    font-size: 0.64rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }
  .contact-form input,
  .contact-form textarea {
    font-family: var(--font-body);
    border: 1px solid var(--border-strong);
    border-radius: 8px;
    padding: 0.75rem 0.9rem;
    font-size: 0.88rem;
    font-weight: 500;
    letter-spacing: normal;
    text-transform: none;
    background: var(--surface-raised);
    color: var(--ink);
    outline: none;
    transition:
      border-color 0.15s,
      box-shadow 0.15s;
  }
  .contact-form textarea {
    resize: vertical;
    min-height: 120px;
  }
  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: var(--placeholder);
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--green-tint);
    background: var(--surface);
  }
  .btn-primary.sent {
    background: var(--ink);
    color: var(--bg);
  }
  .form-note {
    font-size: 0.7rem;
    color: var(--ink-faint);
    text-align: center;
  }

  .footer {
    border-top: 4px solid var(--primary);
    padding: 2.5rem 1.5rem 2rem;
    background: var(--surface);
  }
  .foot-big {
    font-family: var(--font-display);
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    font-weight: 700;
    letter-spacing: -0.03em;
  }
  .foot-big .dot {
    color: var(--primary);
  }
  .foot-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1.2rem;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--ink-soft);
  }
  .foot-brand {
    color: var(--ink);
    font-weight: 800;
  }
  .foot-brand span {
    color: var(--ink-faint);
    font-weight: 600;
  }
  .avail {
    color: var(--primary);
    font-weight: 800;
  }

  @media (max-width: 980px) {
    .hero-grid,
    .about-grid,
    .contact-grid {
      grid-template-columns: 1fr;
    }
    .portrait-frame img {
      height: 380px;
    }
    .stack-grid {
      grid-template-columns: 1fr;
    }
    .trust li {
      flex: 1 1 40%;
      border-top: 1px solid var(--border);
    }
    .trust li:nth-child(-n + 2) {
      border-top: none;
    }
    .trust li:nth-child(3) {
      border-left: none;
    }
    .work-row {
      grid-template-columns: 1fr;
      gap: 1.1rem;
    }
    .site-row {
      grid-template-columns: auto 1fr auto;
    }
    .site-thumb {
      width: 64px;
      height: 64px;
      border-radius: 10px;
    }
  }
  @media (max-width: 860px) {
    .mast-nav {
      display: none;
    }
    .menu-button {
      display: inline-flex;
    }
  }
  @media (max-width: 560px) {
    .form-row {
      grid-template-columns: 1fr;
    }
    .hero-title {
      font-size: 2.9rem;
    }
    .mast-inner {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .brand-text span {
      display: none;
    }
  }
</style>
