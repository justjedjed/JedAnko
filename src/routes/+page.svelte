<script lang="ts">
  import { onMount } from "svelte";
  import emailjs from "@emailjs/browser";
  import type { Component } from "svelte";
  type Skill = { name: string; level: string };
  type SkillGroup = { title: string; icon: Component; items: Skill[] };
  type Project = {
    title: string;
    kind: string;
    status: "Completed" | "In Development";
    desc: string;
    tags: string[];
    image: string;
    url?: string;
    year: string;
    role: string;
    highlights: string[];
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
        { name: "SvelteKit", level: "Intermediate" },
        { name: "Nuxt / Vue.js", level: "Intermediate" },
        { name: "TailwindCSS", level: "Expert" },
        { name: "DaisyUI", level: "Expert" },
        { name: "TypeScript", level: "Intermediate" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      items: [
        { name: "CodeIgniter", level: "Intermediate" },
        { name: "Hono", level: "Familiar" },
        { name: "Firebase", level: "Intermediate" },
      ],
    },
    {
      title: "Database",
      icon: Database,
      items: [
        { name: "MySQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      items: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Vercel", level: "Advanced" },
        { name: "Render", level: "Intermediate" },
        { name: "Docker", level: "Familiar" },
        { name: "Figma", level: "Intermediate" },
      ],
    },
  ];
  const projects: Project[] = [
    {
      title: "Elnido Hideaway",
      kind: "Tourism Website",
      status: "Completed",
      desc: "Showcasing El Nido's turquoise islands — destination cards, guides & immersive galleries.",
      tags: ["Nuxt", "TailwindCSS", "Responsive", "SEO"],
      image: "/Elnido1.webp",
      year: "2024",
      role: "Design & Frontend",
      highlights: [
        "Destination cards with imagery, ratings & quick facts",
        "Travel guides plus immersive photo galleries",
        "Mobile-first responsive layout with fast image loading",
        "SEO-friendly routing and meta structure",
      ],
    },
    {
      title: "NutriGourmet",
      kind: "Food Blog",
      status: "Completed",
      desc: "Recipe publishing with rich cards, categories & editorial layout that tastes as good as it looks.",
      tags: ["CodeIgniter", "TailwindCSS", "MySQL", "CRUD"],
      image: "/Nutrigourment1.webp",
      year: "2024",
      role: "Full-Stack Build",
      highlights: [
        "Recipe publishing with categories and rich cards",
        "Admin CRUD for recipes, categories and featured posts",
        "Editorial reading layout optimized for mobile",
        "Search-friendly slugs and clean URLs",
      ],
    },
    {
      title: "Student Wellness",
      kind: "Wellness Web App",
      status: "Completed",
      desc: "Mental-health monitoring — Random Forest predictions, editable profiles & admin analytics.",
      tags: ["Flutter", "MySQL", "Python", "Random Forest"],
      image: "/MentalHealth.webp",
      year: "2025",
      role: "Frontend & Data Integration",
      highlights: [
        "Wellness check-ins with Random Forest risk prediction",
        "Editable student profiles plus history tracking",
        "Admin dashboard with trends and analytics",
        "Privacy-conscious UI for sensitive data",
      ],
    },
    {
      title: "TravelHive",
      kind: "Tourism Mockup",
      status: "Completed",
      desc: "Surigao del Sur explorations — itineraries, coastal cards & local highlights.",
      tags: ["Nuxt", "TailwindCSS", "UI Mockup", "Responsive"],
      image: "/TravelHive.webp",
      year: "2024",
      role: "Design & Frontend",
      highlights: [
        "Curated itineraries for Surigao del Sur spots",
        "Coastal destination cards and local highlights",
        "High-fidelity mockup turned into working UI",
        "Reusable card and section component system",
      ],
    },
    {
      title: "Parinig",
      kind: "Anonymous Sharing",
      status: "In Development",
      desc: "Whisper freely — no names, no pressure. Real thoughts, real-time, reimagined.",
      tags: ["Svelte", "Firebase", "DaisyUI"],
      image: "/parinig.webp",
      url: "https://parinig.vercel.app/",
      year: "2025",
      role: "Design & Frontend",
      highlights: [
        "Anonymous real-time posting with Firebase",
        "No-signup UX focused on safety and simplicity",
        "Live feed with moderation-friendly structure",
        "PWA-ready Svelte plus DaisyUI interface",
      ],
    },
    {
      title: "Reziofy",
      kind: "Resume Builder",
      status: "In Development",
      desc: "Polished resumes in minutes — smart templates, live preview & instant PDF.",
      tags: ["Svelte", "Firebase", "DaisyUI"],
      image: "/reziofy.webp",
      url: "https://reziofy.web.app/",
      year: "2025",
      role: "Design & Frontend",
      highlights: [
        "Smart resume templates with live preview",
        "Shareable public link plus instant PDF export",
        "Firebase auth and cloud saving",
        "ATS-friendly structure and typography",
      ],
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
      tags: ["HTML/CSS", "Nginx", "Cloudflare Tunnel", "Cloudflare DNS", "Cloudflare SSL"],
      image: "/mmcompanies.jpeg",
      status: "Live",
      url: "https://mmgroupcompanies.com/",
    },
    {
      title: "MM Hotel Tandag",
      role: "DevOps & Hosting",
      desc: "Full hotel experience — rooms, coffee lounge, restobar & banquet gallery.",
      tags: ["HTML/CSS", "Nginx", "Cloudflare Tunnel", "Cloudflare DNS", "Cloudflare SSL"],
      image: "/mmhotel.webp",
      status: "Live",
      url: "https://mmhoteltandag.mmgroupcompanies.com/",
    },
    {
      title: "MM Building",
      role: "DevOps & Hosting",
      desc: "Commercial + residential showcase — pool, elevator & event lighting.",
      tags: ["HTML/CSS", "Nginx", "Cloudflare Tunnel", "Cloudflare DNS", "Cloudflare SSL"],
      image: "/mmbuilding.webp",
      status: "Live",
      url: "https://mmcommercialbuilding.mmgroupcompanies.com/",
    },
    {
      title: "Michaela's Arabic Restobar",
      role: "DevOps & Hosting",
      desc: "Middle-Eastern & Asian flavors — menu, story & contact crafted warmly.",
      tags: ["HTML/CSS", "Nginx", "Cloudflare Tunnel", "Cloudflare DNS", "Cloudflare SSL"],
      image: "/restobar.webp",
      status: "Live",
      url: "https://michaelasarabicrestobar.mmgroupcompanies.com/",
    },
    {
      title: "'M Debt Corporation",
      role: "DevOps & Hosting",
      desc: "Corporate site for Caraga's debt-management specialists — trust, built digitally.",
      tags: ["HTML/CSS", "Nginx", "Cloudflare Tunnel", "Cloudflare DNS", "Cloudflare SSL"],
      image: "/mdebt.webp",
      status: "Live",
      url: "https://mdebtcorporation.mmgroupcompanies.com/",
    },
  ];
  let liveStatus = $state<Record<string, "checking" | "online" | "offline">>({});
  let liveLatency = $state<Record<string, number>>({});
  let selectedProject = $state<Project | null>(null);
  function openProject(p: Project) {
    selectedProject = p;
    document.body.style.overflow = "hidden";
  }
  function closeProject() {
    selectedProject = null;
    document.body.style.overflow = "";
  }
  async function checkSite(url: string) {
    liveStatus[url] = "checking";
    const started = performance.now();
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 8000);
      await fetch(url, { mode: "no-cors", cache: "no-store", signal: ctrl.signal });
      clearTimeout(t);
      liveStatus[url] = "online";
      liveLatency[url] = Math.round(performance.now() - started);
    } catch {
      liveStatus[url] = "offline";
    }
  }
  const liveCount = $derived(hosted.filter((h) => h.status === "Live").length);
  const stats = $derived([
    { value: String(projects.length), label: "Projects built" },
    { value: String(liveCount), label: "Live sites" },
    { value: "4+", label: "Clients served" },
    { value: String(aboutTags.length), label: "Tech & tools" },
  ]);
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
  const navLinks = ["About", "Skills", "Projects", "Live Sites", "Blog", "Contact"];
  const navHref = (link: string) =>
    link === "Blog" ? "/blog" : `#${link.toLowerCase().replaceAll(" ", "-")}`;
  let name = $state(""),
    email = $state(""),
    subject = $state(""),
    message = $state(""),
    sending = $state(false),
    sent = $state(false),
    sendError = $state(false),
    copied = $state(false);
  // EmailJS (free, customizable templates): fill these in from
  // https://dashboard.emailjs.com — until then the form keeps working
  // through the FormSubmit fallback below.
  const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
  const EMAILJS_SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
  const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
  const emailJsReady =
    !EMAILJS_PUBLIC_KEY.startsWith("YOUR_") &&
    !EMAILJS_SERVICE_ID.startsWith("YOUR_") &&
    !EMAILJS_TEMPLATE_ID.startsWith("YOUR_");
  async function sendViaFormSubmit() {
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
  }
  async function handleSubmit(e: Event) {
    e.preventDefault();
    if (sending) return;
    sending = true;
    sendError = false;
    try {
      if (emailJsReady) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            reply_to: email,
            subject: subject || "New message",
            message,
          },
          { publicKey: EMAILJS_PUBLIC_KEY },
        );
      } else {
        await sendViaFormSubmit();
      }
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
    hosted.forEach((h) => checkSite(h.url));
    const uptimeTimer = setInterval(
      () => hosted.forEach((h) => checkSite(h.url)),
      60000,
    );
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(uptimeTimer);
    };
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
    content="Jade Angco — Front-End Developer specializing in SvelteKit, Vue.js, and Nuxt. Building fast, responsive, visually polished web interfaces. Based in Bislig City, Surigao del Sur, Philippines — available for remote freelance worldwide."
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
				"streetAddress": "Purok 4 Dela Silva Street, Poblacion",
				"addressLocality": "Bislig City",
				"addressRegion": "Surigao del Sur",
				"postalCode": "8311",
				"addressCountry": "PH"
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
  {@html `
		<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "Jade Angco Portfolio",
			"url": "https://jadeangco-portfolio.onrender.com/",
			"inLanguage": "en",
			"author": {
				"@type": "Person",
				"name": "Jade Jabagat Angco"
			}
		}
		</script>
	`}
  {@html `
		<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "FAQPage",
					"mainEntity": [
						{
							"@type": "Question",
							"name": "What services do you offer?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Front-end development with SvelteKit, Vue.js, and Nuxt — from Figma to production — plus website hosting and DevOps: Nginx, Cloudflare Tunnel, DNS, SSL, and live uptime monitoring."
							}
						},
						{
							"@type": "Question",
							"name": "Where are you based, and do you work remotely?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "I'm based in Poblacion, Bislig City, Surigao del Sur, Philippines, and I work with clients remotely worldwide. I typically reply within 24 hours."
							}
						},
						{
							"@type": "Question",
							"name": "What technologies do you work with?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "SvelteKit, Vue.js and Nuxt, TailwindCSS and DaisyUI, TypeScript, Firebase, MySQL and MongoDB, with back ends in CodeIgniter and Hono — deployed on Vercel, Render, and Cloudflare-backed servers."
							}
						},
						{
							"@type": "Question",
							"name": "Can you take over or fix my existing website?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Yes. I currently host and maintain five live client websites — handling DNS, SSL, Nginx, and Cloudflare Tunnel — so migrations, fixes, and ongoing maintenance are part of the job."
							}
						},
						{
							"@type": "Question",
							"name": "How do we start working together?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Send a message through the contact form or email describing your project. We'll have a short discovery chat, agree on scope, and I'll give you a clear plan and timeline before any work starts."
							}
						}
					]
				},
				{
					"@type": "ProfessionalService",
					"name": "Jade Angco — Front-End Development & Hosting",
					"url": "https://jadeangco-portfolio.onrender.com/",
					"image": "https://jadeangco-portfolio.onrender.com/og-image.png",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "Purok 4 Dela Silva Street, Poblacion",
						"addressLocality": "Bislig City",
						"addressRegion": "Surigao del Sur",
						"postalCode": "8311",
						"addressCountry": "PH"
					},
					"areaServed": ["Bislig City, Philippines", "Worldwide (remote)"],
					"sameAs": [
						"https://github.com/justjedjed",
						"https://www.facebook.com/just.jeddd"
					]
				}
			]
		}
		</script>
	`}
</svelte:head>

<svelte:window
  onkeydown={(e) => {
    if (e.key === "Escape") {
      menuOpen = false;
      closeProject();
    }
  }}
/>

<a class="skip-link" href="#main">Skip to content</a>
<div class="topline" aria-hidden="true"></div>

<header class="mast" class:scrolled>
  <div class="section-inner mast-inner">
    <a href="#main" class="brand">
      <span class="brand-text">
        <strong>Jade Angco</strong>
        <span>Front-End Developer</span>
      </span>
    </a>
    <nav aria-label="Sections">
      <ul class="mast-nav">
        {#each navLinks as link}
          <li>
            <a href={navHref(link)}>
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
              <a href={navHref(link)} onclick={closeMenu}>
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
        <p class="status-row" title="Purok 4 Dela Silva Street, Poblacion, Bislig City, Surigao del Sur 8311, Philippines">
          <span class="pulse" aria-hidden="true"></span>
          <span>Available for work</span>
          <span class="status-sep" aria-hidden="true">/</span>
          <span>Poblacion, Bislig City, PH — Remote worldwide</span>
        </p>
        <h1 class="hero-title">
          <span class="sr-only">Jade Angco — Front-End Developer: </span
          >Interfaces<br />with intent<span class="dot">.</span>
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
        </div>
      </div>
      <figure class="portrait">
        <div class="portrait-frame">
          <img
            src="/Jade.jpg"
            alt="Portrait of Jade Angco"
            fetchpriority="high"
            decoding="async"
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
              {#each g.items as it, j}
                <li
                  class="meter-row"
                  class:meter-first={j === 0}
                  class:meter-last={j === g.items.length - 1}
                >
                  <span class="meter-name">{it.name}</span>
                  <span class="meter-level">{it.level}</span>
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
            <div
              class="work-media"
              role="button"
              tabindex="0"
              aria-label={`View details for ${p.title}`}
              onclick={() => openProject(p)}
              onkeydown={(e) => {
                if (e.key === "Enter" || e.key === " ") openProject(p);
              }}
            >
              <img
                src={p.image}
                alt={`${p.title} — ${p.kind} preview`}
                loading="lazy" decoding="async"
              />
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
            </div>
            <div class="work-body">
              <p class="work-meta">
                <span class="work-index">{String(i + 1).padStart(2, "0")}</span>
                <span class="work-kind">{p.kind} · {p.year}</span>
              </p>
              <h3>{p.title}</h3>
              <p class="work-desc">{p.desc}</p>
              <div class="tag-row">
                {#each p.tags as t}<span class="tag">{t}</span>{/each}
              </div>
              <div class="work-links">
                <button
                  type="button"
                  class="text-link as-button"
                  onclick={() => openProject(p)}
                >
                  View details
                  <span aria-hidden="true"
                    ><ArrowRight size={14} strokeWidth={2.5} /></span
                  >
                </button>
                {#if p.url}
                  <a
                    class="text-link"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onclick={(e) => e.stopPropagation()}
                  >
                    Visit site
                    <span aria-hidden="true"
                      ><ArrowUpRight size={14} strokeWidth={2.5} /></span
                    >
                  </a>
                {:else}
                  <a
                    class="text-link muted"
                    href="#contact"
                    title="Ask for a walkthrough or source access"
                  >
                    Request demo
                    <span aria-hidden="true"
                      ><ArrowRight size={14} strokeWidth={2.5} /></span
                    >
                  </a>
                {/if}
              </div>
            </div>
          </article>
        {/each}
      </div>
      {#if selectedProject}
        <div
          class="modal-backdrop"
          role="presentation"
          onclick={closeProject}
          onkeydown={(e) => {
            if (e.key === "Escape" || e.key === "Enter") closeProject();
          }}
        >
          <div
            class="modal-card"
            role="dialog"
            tabindex="-1"
            aria-modal="true"
            aria-label={`${selectedProject.title} details`}
            onclick={(e) => e.stopPropagation()}
            onkeydown={(e) => e.stopPropagation()}
          >
            <div class="modal-media">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} — ${selectedProject.kind} preview`}
                decoding="async"
              />
              <button
                type="button"
                class="modal-close"
                onclick={closeProject}
                aria-label="Close details"
              >
                <span aria-hidden="true"
                  ><X size={16} strokeWidth={2.5} /></span
                >
              </button>
              <span
                class="chip modal-status"
                class:live={selectedProject.status === "Completed"}
                class:dev={selectedProject.status !== "Completed"}
              >
                {selectedProject.status}
              </span>
            </div>
            <div class="modal-body">
              <p class="work-meta">
                <span class="work-kind"
                  >{selectedProject.kind} · {selectedProject.year} · {selectedProject.role}</span
                >
              </p>
              <h3>{selectedProject.title}</h3>
              <p class="work-desc">{selectedProject.desc}</p>
              <h4 class="modal-sub">Key highlights</h4>
              <ul class="modal-list">
                {#each selectedProject.highlights as hl}<li>{hl}</li>{/each}
              </ul>
              <div class="tag-row">
                {#each selectedProject.tags as t}<span class="tag">{t}</span>{/each}
              </div>
              <div class="modal-cta">
                {#if selectedProject.url}
                  <a
                    class="btn btn-primary btn-sm"
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit live site
                    <span class="btn-icon" aria-hidden="true"
                      ><ArrowUpRight size={14} strokeWidth={2.5} /></span
                    >
                  </a>
                {:else}
                  <span class="modal-note"
                    >Demo available on request — source walkthrough via
                    call.</span
                  >
                {/if}
                <a
                  class="btn btn-ghost btn-sm"
                  href="#contact"
                  onclick={closeProject}>Ask about this</a
                >
              </div>
            </div>
          </div>
        </div>
      {/if}
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
            <img
              class="site-thumb"
              src={h.image}
              alt={`${h.title} — live client website preview`}
              loading="lazy" decoding="async"
            />
            <div class="site-body">
              <div class="site-head">
                <h3>{h.title}</h3>
                {#if liveStatus[h.url] === "offline"}
                  <span
                    class="chip offline"
                    title="Not responding — checked just now in your browser"
                    >○ Offline</span
                  >
                {:else if liveStatus[h.url] === "online"}
                  <span
                    class="chip live"
                    title={liveLatency[h.url]
                      ? `Responding in ${liveLatency[h.url]}ms — re-checked every 60s in your browser`
                      : "Responding now — checked in your browser"}
                    >● Live{liveLatency[h.url]
                      ? ` · ${liveLatency[h.url]}ms`
                      : ""}</span
                  >
                {:else}
                  <span class="chip checking" title="Checking live reachability…"
                    >○ Checking…</span
                  >
                {/if}
              </div>
              <p class="site-role">
                {h.role} · Nginx + Cloudflare Tunnel
              </p>
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

  <!-- FAQ -->
  <section class="section rule" id="faq">
    <div class="section-inner">
      <div class="sec-top">
        <div>
          <h2 class="sec-title">Questions, answered<span class="dot">.</span></h2>
        </div>
        <p class="sec-sub">
          Hiring a front-end developer or need hosting help? Start here.
        </p>
      </div>
      <div class="faq-list">
        <details>
          <summary>What services do you offer?</summary>
          <p>
            Front-end development with SvelteKit, Vue.js, and Nuxt — from
            Figma to production — plus website hosting and DevOps: Nginx,
            Cloudflare Tunnel, DNS, SSL, and live uptime monitoring.
          </p>
        </details>
        <details>
          <summary>Where are you based, and do you work remotely?</summary>
          <p>
            I’m based in Poblacion, Bislig City, Surigao del Sur,
            Philippines, and I work with clients remotely worldwide. I
            typically reply within 24 hours.
          </p>
        </details>
        <details>
          <summary>What technologies do you work with?</summary>
          <p>
            SvelteKit, Vue.js and Nuxt, TailwindCSS and DaisyUI, TypeScript,
            Firebase, MySQL and MongoDB, with back ends in CodeIgniter and
            Hono — deployed on Vercel, Render, and Cloudflare-backed servers.
          </p>
        </details>
        <details>
          <summary>Can you take over or fix my existing website?</summary>
          <p>
            Yes. I currently host and maintain five live client websites —
            handling DNS, SSL, Nginx, and Cloudflare Tunnel — so migrations,
            fixes, and ongoing maintenance are part of the job.
          </p>
        </details>
        <details>
          <summary>How do we start working together?</summary>
          <p>
            Send a message through the contact form or email describing your
            project. We’ll have a short discovery chat, agree on scope, and
            I’ll give you a clear plan and timeline before any work starts.
          </p>
        </details>
      </div>
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
            <strong
              >Purok 4 Dela Silva St., Poblacion, Bislig City, Surigao del
              Sur 8311, Philippines</strong
            >
            <a
              class="map-link"
              href="https://www.google.com/maps/search/?api=1&query=Purok+4+Dela+Silva+Street+Poblacion+Bislig+City+Surigao+del+Sur+8311"
              target="_blank"
              rel="noopener">View on map ↗</a
            >
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
      <a href="/blog" class="foot-blog">Blog ↗</a>
      <span class="foot-mid"
        >Crafted in Poblacion, Bislig City · <span class="avail">● Available for new work</span
        ></span
      >
      <span class="foot-legal"
        >© 2026 Jade Jabagat Angco — Designed & built in Poblacion, Bislig City, PH</span
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
  }
  .meter-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--border);
  }
  .meter-first {
    padding-top: 0;
  }
  .meter-last {
    border-bottom: none;
    padding-bottom: 0;
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
    border: 1px solid var(--border-strong);
    border-radius: 999px;
    padding: 0.2rem 0.6rem;
    white-space: nowrap;
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
  .work-media {
    cursor: pointer;
  }
  .work-media:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 3px;
  }
  .work-links {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    flex-wrap: wrap;
    margin-top: 0.25rem;
  }
  .text-link.as-button {
    background: none;
    border: none;
    border-bottom: 2px solid var(--primary);
    border-radius: 0;
    padding: 0 0 0.15rem;
    cursor: pointer;
    font-family: inherit;
  }
  .text-link.muted {
    color: var(--ink-faint);
    border-color: var(--border-strong);
  }
  .chip.checking {
    background: var(--surface-raised);
    color: var(--ink-soft);
    border: 1px solid var(--border-strong);
  }
  .chip.offline {
    background: #3a3a3a;
    color: #ffd7d7;
    border: 1px solid #6b4444;
  }
  .map-link {
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--on-primary);
    text-decoration: underline;
    text-underline-offset: 3px;
    margin-top: 0.35rem;
    display: inline-block;
  }
  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 80;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .modal-card {
    width: min(580px, 100%);
    max-height: 90vh;
    overflow-y: auto;
    background: var(--surface);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-heavy);
    color: var(--ink);
  }
  .modal-media {
    position: relative;
    height: 230px;
    overflow: hidden;
    background: var(--surface-raised);
    border-bottom: 1px solid var(--border);
  }
  .modal-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .modal-status {
    position: absolute;
    top: 0.7rem;
    left: 0.7rem;
  }
  .modal-close {
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: rgba(0, 0, 0, 0.62);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .modal-close:hover {
    background: rgba(0, 0, 0, 0.85);
  }
  .modal-body {
    padding: 1.25rem 1.35rem 1.4rem;
  }
  .modal-body h3 {
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    margin-top: 0.35rem;
  }
  .modal-sub {
    margin: 0.9rem 0 0.4rem;
    font-size: 0.66rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-faint);
  }
  .modal-list {
    margin: 0;
    padding-left: 1.15rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    font-size: 0.87rem;
    color: var(--ink-soft);
    line-height: 1.6;
  }
  .modal-cta {
    display: flex;
    gap: 0.7rem;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1.1rem;
  }
  .modal-note {
    font-size: 0.8rem;
    color: var(--ink-soft);
    background: var(--surface-raised);
    border: 1px solid var(--border);
    padding: 0.55rem 0.75rem;
    border-radius: 10px;
    flex: 1;
    min-width: 200px;
  }
  @media (hover: none), (pointer: coarse) {
    .work-open {
      opacity: 1;
      transform: translateY(0);
    }
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

  .faq-list {
    border-top: 1px solid var(--border-strong);
  }
  .faq-list details {
    border-bottom: 1px solid var(--border);
    padding: 1.05rem 0.25rem;
  }
  .faq-list summary {
    cursor: pointer;
    font-family: var(--font-display);
    font-size: 1.02rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    list-style-position: inside;
  }
  .faq-list summary::marker {
    color: var(--primary);
  }
  .faq-list summary:hover {
    color: var(--primary);
  }
  .faq-list details p {
    margin: 0.6rem 0 0.15rem;
    color: var(--ink-soft);
    line-height: 1.65;
    font-size: 0.9rem;
    max-width: 640px;
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
  .foot-blog {
    font-weight: 800;
    color: var(--ink);
  }
  .foot-blog:hover {
    color: var(--primary);
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
