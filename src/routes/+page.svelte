<script lang="ts">
  import { onMount } from "svelte";
  type Skill = { name: string; level: string; pct: number };
  type SkillGroup = { title: string; icon: string; items: Skill[] };
  type Project = {
    title: string;
    kind: string;
    status: "Completed" | "In Development";
    desc: string;
    tags: string[];
    gradient: string;
    accent: string;
    image: string;
    url?: string;
  };
  type Hosted = {
    title: string;
    role: string;
    desc: string;
    tags: string[];
    big?: boolean;
    gradient: string;
    image: string;
    status: "Suspended" | "Live";
    url: string;
    group?: string;
  };

  const stats = [
    { value: "7", label: "Projects Built", sub: "Shipped", icon: "◩" },
    { value: "5", label: "Live Sites", sub: "Deployed", icon: "⬢" },
    { value: "4+", label: "Clients Served", sub: "Trusted", icon: "◐" },
    { value: "∞", label: "Experiments", sub: "Exploring", icon: "✦" },
  ];
  const aboutCards = [
    {
      title: "Detail Obsessed",
      desc: "Smooth micro-interactions, 60fps motion & pixel-perfect polish.",
      icon: "✦",
    },
    {
      title: "Design-Minded",
      desc: "Figma to code with precision — systems that scale beautifully.",
      icon: "⬣",
    },
    {
      title: "Clean Code",
      desc: "Readable, maintainable, tested. Future-you will thank you.",
      icon: "{ }",
    },
    {
      title: "Always Learning",
      desc: "Chasing new patterns, tools & delightful UX ideas daily.",
      icon: "↻",
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
      icon: "⬢",
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
      icon: "⬣",
      items: [
        { name: "CodeIgniter", level: "Intermediate", pct: 65 },
        { name: "Hono", level: "Beginner", pct: 30 },
        { name: "Firebase", level: "Intermediate", pct: 65 },
      ],
    },
    {
      title: "Database",
      icon: "▦",
      items: [
        { name: "MySQL", level: "Intermediate", pct: 65 },
        { name: "MongoDB", level: "Intermediate", pct: 55 },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: "⚙",
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
      gradient: "linear-gradient(135deg,#a8e6cf 0%,#1a8a6a 55%,#0f3d2e 100%)",
      accent: "#1ed760",
      image: "/Elnido1.jpeg",
    },
    {
      title: "NutriGourmet",
      kind: "Food Blog",
      status: "Completed",
      desc: "Recipe publishing with rich cards, categories & editorial layout that tastes as good as it looks.",
      tags: ["CodeIgniter", "TailwindCSS"],
      gradient: "linear-gradient(135deg,#ffecd2 0%,#fcb69f 40%,#8b3a2a 100%)",
      accent: "#ffa42b",
      image: "/Nutrigourment1.jpeg",
    },
    {
      title: "Student Wellness",
      kind: "Wellness Web App",
      status: "Completed",
      desc: "Mental-health monitoring — Random Forest predictions, editable profiles & admin analytics.",
      tags: ["Flutter", "MySQL"],
      gradient: "linear-gradient(135deg,#e0d6ff 0%,#8a6cf0 45%,#1a1040 100%)",
      accent: "#8a6cf0",
      image: "/MentalHealth.jpeg",
    },
    {
      title: "TravelHive",
      kind: "Tourism Mockup",
      status: "Completed",
      desc: "Surigao del Sur explorations — itineraries, coastal cards & local highlights.",
      tags: ["Nuxt", "TailwindCSS"],
      gradient: "linear-gradient(135deg,#b8e6fe 0%,#3a9ad9 45%,#0a2a4a 100%)",
      accent: "#539df5",
      image: "/TravelHive.png",
    },
    {
      title: "Parinig",
      kind: "Anonymous Sharing",
      status: "In Development",
      desc: "Whisper freely — no names, no pressure. Real thoughts, real-time, reimagined.",
      tags: ["Svelte", "Firebase", "DaisyUI"],
      gradient: "",
      accent: "#1ed760",
      image: "/parinig.jpeg",
      url: "https://parinig.vercel.app/",
    },
    {
      title: "Reziofy",
      kind: "Resume Builder",
      status: "In Development",
      desc: "Polished resumes in minutes — smart templates, live preview & instant PDF.",
      tags: ["Svelte", "Firebase", "DaisyUI"],
      gradient: "",
      accent: "#1ed760",
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
      big: true,
      gradient: "linear-gradient(180deg,#2a3a3a 0%,#0c1414 100%)",
      image: "/mmcompanies.jpeg",
      status: "Live",
      url: "https://mmgroupcompanies.com/",
    },
    {
      title: "MM Hotel Tandag",
      role: "DevOps & Hosting",
      desc: "Full hotel experience — rooms, coffee lounge, restobar & banquet gallery.",
      tags: ["HTML/CSS"],
      gradient: "linear-gradient(180deg,#2a3a3a 0%,#0c1414 100%)",
      image: "/mmhotel.png",
      status: "Live",
      url: "https://mmhoteltandag.mmgroupcompanies.com/",
    },
    {
      title: "MM Building",
      role: "DevOps & Hosting",
      desc: "Commercial + residential showcase — pool, elevator & event lighting.",
      tags: ["HTML/CSS"],
      gradient: "",
      image: "/mmbuilding.png",
      status: "Live",
      url: "https://mmcommercialbuilding.mmgroupcompanies.com/",
    },
    {
      title: "Michaela's Arabic Restobar",
      role: "DevOps & Hosting",
      desc: "Middle-Eastern & Asian flavors — menu, story & contact crafted warmly.",
      tags: ["HTML/CSS"],
      gradient: "",
      image: "/restobar.png",
      status: "Live",
      url: "https://michaelasarabicrestobar.mmgroupcompanies.com/",
    },
    {
      title: "'M Debt Corporation",
      role: "DevOps & Hosting",
      desc: "Corporate site for Caraga’s debt-management specialists — trust, built digitally.",
      tags: ["HTML/CSS"],
      gradient: "",
      image: "/mdebt.png",
      status: "Live",
      url: "https://mdebtcorporation.mmgroupcompanies.com/",
    },
  ];
  const navLinks = ["About", "Skills", "Projects", "Live Sites", "Contact"];
  let name = $state(""),
    email = $state(""),
    subject = $state(""),
    message = $state(""),
    sent = $state(false);
  function handleSubmit(e: Event) {
    e.preventDefault();
    sent = true;
    setTimeout(() => (sent = false), 2600);
  }
  let theme: "dark" | "light" = $state("dark");
  let scrolled = $state(false);
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
	<meta name="description" content="Male Front-End Developer specializing in SvelteKit, Vue.js, and Nuxt. Building responsive, visually polished web interfaces with modern technologies." />
	<meta name="keywords" content="Jade Angco, Front-End Developer, Web Developer, SvelteKit, Vue.js, Nuxt, TailwindCSS, DaisyUI, TypeScript, CodeIgniter, Firebase, Bislig City, Surigao del Sur, Philippines, Freelance Developer, UI/UX Developer, Computer Science, Full Stack Developer" />
	{@html `
		<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Jade Jabagat Angco",
			"url": "https://jadeangco-portfolio.onrender.com",
			"image": "https://jadeangco-portfolio.onrender.com/Jade.jpg",
			"jobTitle": "Front-End Developer",
			"worksFor": {
				"@type": "Organization",
				"name": "Freelance"
			},
			"description": "Front-End Developer specializing in SvelteKit, Vue.js, and modern web technologies. Building fast, responsive interfaces with clean code.",
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

<nav class="navbar" class:scrolled>
  <div class="navbar-inner">
    <a href="#top" class="logo"
      ><span class="logo-mark">◉</span><span class="logo-type">&lt;JA/&gt;</span
      ><span class="logo-dot"></span></a
    >
    <ul class="nav-links">
      {#each navLinks as link, i}<li style="--i:{i}">
          <a href={`#${link.toLowerCase().replace(" ", "-")}`}>{link}</a>
        </li>{/each}
    </ul>
    <div class="navbar-actions">
      <button
        class="theme-btn"
        onclick={toggleTheme}
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        <span class="theme-track"
          ><span class="theme-thumb" class:light={theme === "light"}
            >{theme === "dark" ? "☾" : "☀"}</span
          ></span
        >
      </button>
      <a href="#contact" class="btn btn-green btn-sm">Hire me — available</a>
    </div>
  </div>
</nav>

<header class="hero" id="top">
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="hero-inner">
    <div class="avatar-stack">
      <div class="avatar-ring-outer"></div>
      <div class="avatar"><img src="/Jade.jpg" alt="Jade Angco" /></div>
      <span class="avatar-status" title="Available"
        ><span></span> Available</span
      >
    </div>
    <p class="hero-kicker">Hi, I’m <span>Jade Angco</span></p>
    <h1 class="hero-title">
      Front-End<br /><span class="hero-accent">Developer</span>
    </h1>
    <p class="hero-desc">
      I build <strong>fast</strong>, <strong>responsive</strong> & visually
      polished interfaces — obsessed with buttery 60fps interactions, design
      systems & clean, maintainable code in <em>SvelteKit</em> &
      <em>Vue.js</em>.
    </p>
    <p class="hero-location">
      <span class="loc-dot"></span> Bislig City, Surigao del Sur, Philippines —
      <span class="loc-remote">Remote • Worldwide</span>
    </p>
    <div class="hero-cta">
      <a href="#contact" class="btn btn-green btn-lg"
        >Get in touch <span class="btn-arrow">→</span></a
      >
      <a href="#projects" class="btn btn-ghost">View projects <span>↗</span></a>
    </div>
    <div class="hero-socials">
      <a
        href="https://github.com/justjedjed"
        target="_blank"
        rel="noopener"
        class="social-btn"
        aria-label="GitHub"
        title="GitHub"><span>⬢</span></a
      >
      <a
        href="https://www.facebook.com/just.jeddd"
        target="_blank"
        rel="noopener"
        class="social-btn"
        aria-label="Facebook"
        title="Facebook"><span>◍</span></a
      >
      <a
        href="mailto:jedboyjabagat@gmail.com"
        class="social-btn"
        aria-label="Email"><span>✉</span></a
      >
    </div>
    <div class="hero-scroll"><span></span> Scroll to explore</div>
  </div>
</header>

<section class="section" id="about">
  <div class="section-inner">
    <div class="section-head">
      <span class="eyebrow">01 — About</span>
      <h2 class="section-title">Who I Am<span class="title-dot">.</span></h2>
      <p class="section-sub">
        Junior Computer Information Technician & Frontend Developer crafting
        human-centered digital experiences.
      </p>
    </div>
    <div class="about-grid">
      <div class="about-text">
        <h3>
          BS Computer Science — North Eastern Mindanao State University,
          Tagbina. UI/UX + IT support, from hardware to high-fidelity
          interfaces.
        </h3>
        <p>
          I sweat the details — fluid motion, crisp typography, and code that’s
          a joy to maintain. When I’m not pushing pixels, I’m deconstructing
          delightful UI patterns and shipping side projects.
        </p>
        <p class="cert">
          ▸ Certified <strong>Computer Systems Servicing NCII</strong> — solid roots
          in both hardware & software.
        </p>
        <div class="tag-cloud">
          {#each aboutTags as t}<span class="tag">{t}</span>{/each}
        </div>
      </div>
      <div class="about-cards">
        {#each aboutCards as card, i}
          <div class="feature-card" style="--d:{i * 70}ms">
            <span class="feature-icon">{card.icon}</span>
            <div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
            <span class="card-arrow">→</span>
          </div>
        {/each}
      </div>
    </div>
    <div class="stats-row">
      {#each stats as s}
        <div class="stat-card">
          <div class="stat-top">
            <span class="stat-icon">{s.icon}</span><span class="stat-sub"
              >{s.sub}</span
            >
          </div>
          <strong>{s.value}</strong>
          <span class="stat-label">{s.label}</span>
          <span class="stat-bar"></span>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section alt" id="skills">
  <div class="section-inner">
    <div class="section-head">
      <span class="eyebrow">02 — Skills</span>
      <h2 class="section-title">What I Work With</h2>
    </div>
    <div class="skills-grid">
      {#each skillGroups as g}
        <div class="skill-card">
          <div class="skill-head">
            <span class="skill-icon">{g.icon}</span>
            <h4>{g.title}</h4>
            <span class="skill-count">{g.items.length}</span>
          </div>
          <ul>
            {#each g.items as it}
              <li>
                <div class="skill-row">
                  <span class="skill-name">{it.name}</span><span
                    class="skill-level">{it.level}</span
                  >
                </div>
                <div class="skill-bar">
                  <div class="skill-fill" style={`width:${it.pct}%`}>
                    <span class="fill-glow"></span>
                  </div>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section" id="projects">
  <div class="section-inner">
    <div class="section-head row">
      <div>
        <span class="eyebrow">03 — Projects</span>
        <h2 class="section-title">Things I’ve Built</h2>
      </div>
      <div class="filter-pills">
        {#each filters as f}<button
            class="pill"
            class:active={activeFilter === f}
            onclick={() => (activeFilter = f)}>{f.toUpperCase()}</button
          >{/each}
      </div>
    </div>
    <div class="projects-grid">
      {#each filteredProjects as p, i}
        <article class="project-card" style="--i:{i}">
          <div class="project-media">
            <img
              class="project-img"
              src={p.image}
              alt={p.title}
              loading="lazy"
            />
            <div class="browser-bar">
              <span></span><span></span><span></span><span class="bar-url"
                >{p.kind}</span
              >
            </div>
            <div class="project-img-overlay"></div>
            <span class="status-pill" class:dev={p.status === "In Development"}
              >{p.status === "Completed"
                ? "● Completed"
                : "○ In Development"}</span
            >
            {#if p.url}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                class="view-btn"
                aria-label="View project">↗</a
              >
            {/if}
          </div>
          <div class="project-body">
            <span class="project-kind">{p.kind.toUpperCase()}</span>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
            <div class="tag-row">
              {#each p.tags as t}<span class="tag">{t}</span>{/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section alt" id="live-sites">
  <div class="section-inner">
    <div class="section-head">
      <span class="eyebrow">04 — Live on the Web</span>
      <h2 class="section-title">Hosted Websites</h2>
      <p class="section-sub">
        Real-world sites designed, developed & deployed for clients — live, fast
        & maintained.
      </p>
    </div>
    <div class="hosted-grid">
      {#each hosted as h}
        <article class="hosted-card" class:suspended={h.status === "Suspended"}>
          <div class="hosted-media">
            <img
              class="hosted-img"
              src={h.image}
              alt={h.title}
              loading="lazy"
            />
            <div class="hosted-shine"></div>
            {#if h.status === "Live"}<span class="live-dot">● LIVE</span
              >{:else}<span class="suspend-dot">◐ SUSPENDED — REVAMP</span>{/if}
          </div>
          <div class="hosted-body">
            <div class="hosted-head">
              <h4>{h.title}</h4>
              <a
                href={h.url}
                target="_blank"
                rel="noopener noreferrer"
                class="link-icon"
                aria-label="Open">↗</a
              >
            </div>
            <span class="hosted-role">{h.role.toUpperCase()}</span>
            <p>{h.desc}</p>
            <div class="tag-row">
              {#each h.tags as t}<span class="tag">{t}</span>{/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section" id="contact">
  <div class="section-inner">
    <div class="section-head">
      <span class="eyebrow">05 — Contact</span>
      <h2 class="section-title">
        Let’s Connect<span class="title-dot">.</span>
      </h2>
      <p class="section-sub">
        Have a project, question, or just want to say hi? My inbox is always
        open.
      </p>
    </div>
    <div class="contact-grid">
      <div class="contact-info">
        <div class="info-card primary">
          <span class="info-label">✦ Let’s talk</span>
          <p>
            Typically reply within <strong>24 hours</strong>. For urgent —
            Facebook Messenger is fastest.
          </p>
        </div>
        <a href="mailto:jedboyjabagat@gmail.com" class="info-card link"
          ><span class="info-label">✉ Email</span><strong
            >jedboyjabagat@gmail.com</strong
          ><span class="info-arrow">→</span></a
        >
        <a
          href="https://www.facebook.com/just.jeddd"
          target="_blank"
          rel="noopener"
          class="info-card link"
          ><span class="info-label">◈ Facebook</span><strong
            >facebook.com/just.jeddd</strong
          ><span class="info-arrow">→</span></a
        >
        <a
          href="https://github.com/justjedjed"
          target="_blank"
          rel="noopener"
          class="info-card link"
          ><span class="info-label">⬢ GitHub</span><strong
            >github.com/justjedjed</strong
          ><span class="info-arrow">→</span></a
        >
        <div class="info-card loc">
          <span class="info-label">◎ Location</span><span
            >Bislig City, Surigao del Sur, Philippines</span
          >
        </div>
      </div>
      <form class="contact-form" onsubmit={handleSubmit}>
        <div class="form-row">
          <label
            ><span>Name *</span><input
              type="text"
              bind:value={name}
              placeholder="Ada Lovelace"
              required
            /></label
          >
          <label
            ><span>Email *</span><input
              type="email"
              bind:value={email}
              placeholder="ada@lovelace.dev"
              required
            /></label
          >
        </div>
        <label
          ><span>Subject</span><input
            type="text"
            bind:value={subject}
            placeholder="Project inquiry, collaboration..."
          /></label
        >
        <label
          ><span>Message *</span><textarea
            rows="5"
            bind:value={message}
            placeholder="Tell me about your idea..."
            required
          ></textarea></label
        >
        <button type="submit" class="btn btn-green btn-block" class:sent
          >{sent ? "✓ Message sent — thank you!" : "Send message →"}</button
        >
        <p class="form-note">
          By sending, you agree to be awesome. No spam, ever.
        </p>
      </form>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="section-inner footer-inner">
    <span class="foot-logo">◉ &lt;JA/&gt; <span>2026</span></span>
    <span class="foot-mid"
      >Crafted in Bislig · Available worldwide · <span
        style="color:var(--green)">● Available for new work</span
      ></span
    >
    <span class="foot-legal"
      >© Jade Jabagat Angco — Designed & built with ♥</span
    >
  </div>
</footer>
<div class="availability-dock">
  <span class="dock-dot"></span>
  <div class="dock-meta">
    <span>Available for work</span><strong
      >Freelance & part-time — remote worldwide</strong
    >
  </div>
  <a href="#contact" class="dock-cta">Hire me</a>
</div>

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    background: var(--nav-bg);
    backdrop-filter: blur(18px) saturate(1.4);
    border-bottom: 1px solid var(--border);
    transition:
      background 0.2s,
      box-shadow 0.2s,
      border-color 0.2s;
  }
  .navbar.scrolled {
    background: var(--surface-glass);
    box-shadow: var(--shadow-soft);
    border-color: var(--border-strong);
  }
  .navbar-inner {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 1.5rem;
    gap: 1rem;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 800;
    font-family: var(--font-display);
    letter-spacing: 0.02em;
    font-size: 0.95rem;
  }
  .logo-mark {
    color: var(--green);
    font-size: 1.05rem;
    filter: drop-shadow(0 0 8px rgba(30, 215, 96, 0.6));
  }
  .logo-type {
    letter-spacing: 0.04em;
  }
  .logo-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: var(--green-glow);
    margin-left: 0.15rem;
  }
  .nav-links {
    display: flex;
    gap: 1.6rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav-links li {
    --i: 0;
  }
  .nav-links a {
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--ink-soft);
    position: relative;
    padding: 0.2rem 0;
    transition: color 0.15s;
  }
  .nav-links a::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 2px;
    background: var(--green);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s var(--ease-smooth);
    border-radius: 999px;
  }
  .nav-links a:hover {
    color: var(--ink);
  }
  .nav-links a:hover::after {
    transform: scaleX(1);
  }
  .navbar-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .theme-btn {
    background: transparent;
    border: none;
    padding: 0;
  }
  .theme-track {
    display: inline-flex;
    align-items: center;
    width: 56px;
    height: 30px;
    border-radius: 9999px;
    background: var(--surface-raised);
    border: 1px solid var(--border-strong);
    padding: 2px;
    position: relative;
    transition: background 0.2s;
  }
  .theme-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--ink);
    color: var(--bg);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.78rem;
    transform: translateX(0);
    transition:
      transform 0.35s var(--ease-spring),
      background 0.2s;
  }
  .theme-thumb.light {
    transform: translateX(26px);
    background: #111;
    color: #fff;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.8rem 1.55rem;
    border-radius: 9999px;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border: 1px solid transparent;
    transition:
      transform 0.15s var(--ease-spring),
      background 0.15s,
      box-shadow 0.15s,
      border-color 0.15s;
    white-space: nowrap;
  }
  .btn:hover {
    transform: translateY(-1px) scale(1.015);
  }
  .btn:active {
    transform: scale(0.985);
  }
  .btn-sm {
    padding: 0.5rem 1rem;
    font-size: 0.66rem;
  }
  .btn-lg {
    padding: 0.9rem 1.75rem;
    font-size: 0.78rem;
  }
  .btn-green {
    background: var(--green);
    color: #fff;
    box-shadow: 0 8px 24px rgba(30, 215, 96, 0.28);
  }
  .btn-green:hover {
    background: var(--green-hover);
    box-shadow: 0 10px 28px rgba(30, 215, 96, 0.38);
  }
  :global([data-theme="light"]) .btn-green {
    background: #16a34a;
    color: #ffffff;
    box-shadow: 0 6px 16px rgba(22, 163, 74, 0.25);
  }
  :global([data-theme="light"]) .btn-green:hover {
    background: #15803d;
  }
  .btn-green.sent {
    background: var(--ink);
    color: var(--bg);
  }
  .btn-ghost {
    background: transparent;
    border-color: var(--border-strong);
    color: var(--ink);
    backdrop-filter: blur(8px);
  }
  .btn-ghost:hover {
    background: var(--surface-hover);
    border-color: var(--ink);
  }
  .btn-arrow {
    transition: transform 0.2s;
  }
  .btn:hover .btn-arrow {
    transform: translateX(3px);
  }
  @media (max-width: 860px) {
    .nav-links {
      display: none;
    }
  }

  .hero {
    position: relative;
    text-align: center;
    padding: 4.2rem 1.5rem 3.2rem;
    overflow: hidden;
    isolation: isolate;
  }
  .hero-glow {
    position: absolute;
    inset: -20% -10% 30% -10%;
    background:
      radial-gradient(
        700px 420px at 50% 0%,
        rgba(30, 215, 96, 0.16),
        transparent 68%
      ),
      radial-gradient(
        500px 300px at 50% 20%,
        rgba(255, 255, 255, 0.06),
        transparent 70%
      );
    pointer-events: none;
    filter: blur(0.5px);
  }
  :global([data-theme="light"]) .hero-glow {
    background:
      radial-gradient(
        700px 420px at 50% 0%,
        rgba(30, 215, 96, 0.18),
        transparent 68%
      ),
      radial-gradient(
        500px 300px at 50% 15%,
        rgba(0, 0, 0, 0.04),
        transparent 70%
      );
  }
  .hero-inner {
    max-width: 640px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  .hero-badge {
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: var(--ink-soft);
    background: transparent;
    border: none;
    padding: 0;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.7rem;
    box-shadow: none;
    text-transform: none;
  }
  .hero-badge .badge-left {
    width: 18px;
    height: 1px;
    background: var(--green);
    opacity: 0.9;
    display: block;
    border-radius: 999px;
  }
  .hero-badge .badge-sep {
    opacity: 0.4;
    margin: 0 0.1rem;
  }
  .pulse {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--green);
    position: relative;
    flex-shrink: 0;
  }
  .pulse::after {
    display: none;
  }
  @keyframes ping {
    0% {
      transform: scale(0.7);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
  .avatar-stack {
    position: relative;
    margin-bottom: 1.5rem;
  }
  .avatar-ring-outer {
    position: absolute;
    inset: -14px;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      var(--green),
      transparent 30%,
      transparent 70%,
      var(--green)
    );
    opacity: 0.18;
    filter: blur(7px);
    animation: spin 8s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .avatar {
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1e1e1e, #070707);
    color: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.08);
    box-shadow:
      var(--shadow-heavy),
      0 0 0 8px var(--green-tint);
    position: relative;
  }
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .avatar-status {
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--surface);
    border: 1px solid var(--border-strong);
    color: var(--ink);
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.28rem 0.65rem;
    border-radius: 9999px;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    white-space: nowrap;
    box-shadow: var(--shadow-soft);
  }
  .avatar-status span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: var(--green-glow);
    display: inline-block;
  }
  .hero-kicker {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }
  .hero-kicker span {
    color: var(--ink);
    font-weight: 800;
    letter-spacing: 0.04em;
  }
  .hero-title {
    font-size: clamp(2.6rem, 7vw, 3.8rem);
    font-weight: 800;
    line-height: 0.92;
    letter-spacing: -0.04em;
    margin-top: 0.55rem;
  }
  .hero-accent {
    background: linear-gradient(90deg, var(--green), #7cffd0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero-desc {
    margin-top: 1.15rem;
    color: var(--ink-soft);
    line-height: 1.72;
    font-size: 0.96rem;
    max-width: 560px;
  }
  .hero-desc strong {
    color: var(--ink);
  }
  .hero-desc em {
    font-style: normal;
    color: var(--green);
    font-weight: 600;
  }
  .hero-location {
    margin-top: 0.9rem;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-faint);
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .loc-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--ink-faint);
  }
  .loc-remote {
    color: var(--ink-soft);
  }
  .hero-cta {
    display: flex;
    gap: 0.8rem;
    margin-top: 1.7rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .hero-socials {
    display: flex;
    gap: 0.55rem;
    margin-top: 1.7rem;
  }
  .social-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--surface);
    border: 1px solid var(--border);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--ink-soft);
    font-size: 0.85rem;
    transition:
      transform 0.15s var(--ease-spring),
      background 0.15s,
      color 0.15s,
      border-color 0.15s;
  }
  .social-btn:hover {
    transform: translateY(-2px);
    background: var(--surface-hover);
    color: var(--ink);
    border-color: var(--border-strong);
  }
  .hero-scroll {
    margin-top: 1.6rem;
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-faint);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.45rem;
  }
  .hero-scroll span {
    width: 1px;
    height: 22px;
    background: linear-gradient(180deg, var(--ink-faint), transparent);
    display: block;
    border-radius: 999px;
  }

  .section-head {
    margin-bottom: 2rem;
  }
  .section-head.row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  .section-title {
    font-size: clamp(1.7rem, 3.2vw, 2.25rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    margin-top: 0.45rem;
  }
  .title-dot {
    color: var(--green);
  }
  .section-sub {
    margin-top: 0.55rem;
    color: var(--ink-soft);
    font-size: 0.92rem;
    line-height: 1.6;
    max-width: 560px;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.9fr;
    gap: 2rem;
    margin-top: 1.2rem;
  }
  .about-text h3 {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.45;
    max-width: 520px;
  }
  .about-text p {
    color: var(--ink-soft);
    line-height: 1.7;
    margin-top: 0.9rem;
    font-size: 0.92rem;
  }
  .about-text strong {
    color: var(--ink);
  }
  .cert {
    background: var(--green-tint);
    border: 1px solid rgba(30, 215, 96, 0.18);
    padding: 0.6rem 0.8rem;
    border-radius: 12px;
    font-size: 0.84rem !important;
  }
  .tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 1.15rem;
  }
  .about-cards {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  .feature-card {
    display: flex;
    gap: 0.9rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1rem 1.05rem;
    position: relative;
    overflow: hidden;
    transition:
      transform 0.2s var(--ease-smooth),
      background 0.2s,
      border-color 0.2s,
      box-shadow 0.2s;
  }
  .feature-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(30, 215, 96, 0.06),
      transparent 55%
    );
    opacity: 0;
    transition: opacity 0.2s;
  }
  .feature-card:hover {
    transform: translateY(-2px);
    background: var(--surface-hover);
    border-color: var(--border-strong);
    box-shadow: var(--shadow-soft);
  }
  .feature-card:hover::before {
    opacity: 1;
  }
  .feature-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--surface-raised);
    border: 1px solid var(--border);
    color: var(--green);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    flex-shrink: 0;
  }
  .feature-card h4 {
    font-size: 0.84rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
  }
  .feature-card p {
    font-size: 0.8rem;
    color: var(--ink-soft);
    line-height: 1.5;
  }
  .card-arrow {
    margin-left: auto;
    align-self: center;
    opacity: 0;
    transform: translateX(-6px);
    color: var(--ink-faint);
    font-size: 0.75rem;
    transition:
      opacity 0.2s,
      transform 0.2s;
  }
  .feature-card:hover .card-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  .stats-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.9rem;
    margin-top: 1.8rem;
  }
  .stat-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.2rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    position: relative;
    overflow: hidden;
    transition:
      transform 0.2s var(--ease-spring),
      border-color 0.2s;
  }
  .stat-card:hover {
    transform: translateY(-2px);
    border-color: var(--border-strong);
  }
  .stat-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .stat-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--surface-raised);
    border: 1px solid var(--border);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    color: var(--green);
  }
  .stat-sub {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-faint);
  }
  .stat-card strong {
    font-family: var(--font-display);
    font-size: 1.65rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.02em;
  }
  .stat-label {
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }
  .stat-bar {
    height: 2px;
    border-radius: 999px;
    background: var(--surface-raised);
    margin-top: 0.55rem;
    position: relative;
    overflow: hidden;
  }
  .stat-bar::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    background: var(--green);
    opacity: 0.9;
    border-radius: 999px;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.35rem;
    margin-top: 1.6rem;
  }
  .skill-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 2.1rem 1.75rem;
    position: relative;
    overflow: hidden;
    min-height: 340px;
    box-shadow: var(--shadow-soft);
  }
  .skill-card::after {
    content: "";
    position: absolute;
    top: -60px;
    right: -60px;
    width: 180px;
    height: 180px;
    background: radial-gradient(
      circle,
      rgba(30, 215, 96, 0.12),
      transparent 70%
    );
    pointer-events: none;
  }
  .skill-head {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 1.6rem;
  }
  .skill-head h4 {
    font-size: 1.22rem;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
  .skill-icon {
    color: var(--green);
    font-size: 1.25rem;
    filter: drop-shadow(0 0 8px rgba(30, 215, 96, 0.4));
  }
  .skill-count {
    margin-left: auto;
    font-size: 0.74rem;
    font-weight: 700;
    background: var(--surface-raised);
    border: 1px solid var(--border);
    padding: 0.28rem 0.65rem;
    border-radius: 999px;
    color: var(--ink-faint);
  }
  .skill-card ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
  }
  .skill-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .skill-name {
    font-size: 0.98rem;
    font-weight: 600;
  }
  .skill-level {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--green);
  }
  .skill-bar {
    height: 8px;
    border-radius: 999px;
    background: var(--surface-raised);
    overflow: hidden;
  }
  .skill-fill {
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--green), #7cf3a8);
    position: relative;
    box-shadow: 0 0 12px rgba(30, 215, 96, 0.4);
  }
  .fill-glow {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 12px #fff;
    opacity: 1;
  }

  .filter-pills {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .pill {
    padding: 0.48rem 1rem;
    border-radius: 9999px;
    border: 1px solid var(--border);
    background: var(--surface);
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--ink-soft);
    transition:
      background 0.15s,
      color 0.15s,
      border-color 0.15s,
      transform 0.15s;
  }
  .pill:hover {
    background: var(--surface-hover);
    color: var(--ink);
    transform: translateY(-1px);
  }
  .pill.active {
    background: var(--ink);
    color: var(--bg);
    border-color: var(--ink);
    box-shadow: var(--shadow-soft);
  }
  :global([data-theme="light"]) .pill.active {
    background: #0a0a0a;
    color: #fff;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 1.4rem;
  }
  .project-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition:
      transform 0.25s var(--ease-smooth),
      box-shadow 0.25s,
      border-color 0.25s;
  }
  .project-card:hover {
    transform: translateY(-4px);
    border-color: var(--border-strong);
    box-shadow: var(--shadow-heavy);
  }
  .project-media {
    height: 176px;
    position: relative;
    overflow: hidden;
    display: block;
    background: var(--surface-raised);
  }
  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition:
      transform 0.35s var(--ease-smooth),
      filter 0.3s;
  }
  .project-card:hover .project-img {
    transform: scale(1.04);
    filter: brightness(1.06);
  }
  .browser-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 26px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 10px;
    background: rgba(0, 0, 0, 0.42);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    z-index: 2;
  }
  .browser-bar span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.32);
    display: block;
  }
  .browser-bar span:nth-child(1) {
    background: #ff5f57;
  }
  .browser-bar span:nth-child(2) {
    background: #ffbd2e;
  }
  .browser-bar span:nth-child(3) {
    background: #28c840;
  }
  .bar-url {
    margin-left: auto;
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.85);
    background: rgba(255, 255, 255, 0.14);
    padding: 0.12rem 0.45rem;
    border-radius: 999px;
    max-width: 110px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .project-img-overlay {
    position: absolute;
    inset: 26px 0 0 0;
    background: linear-gradient(
      180deg,
      transparent 30%,
      rgba(0, 0, 0, 0.42) 100%
    );
    pointer-events: none;
  }
  .status-pill {
    position: absolute;
    top: 0.65rem;
    right: 0.65rem;
    z-index: 2;
    background: rgba(0, 0, 0, 0.72);
    backdrop-filter: blur(10px);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.14);
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    padding: 0.24rem 0.55rem;
    border-radius: 9999px;
  }
  .status-pill.dev {
    background: rgba(255, 255, 255, 0.9);
    color: #0a0a0a;
  }
  :global([data-theme="light"]) .status-pill {
    background: rgba(255, 255, 255, 0.92);
    color: #0a0a0a;
  }
  .view-btn {
    position: absolute;
    bottom: 0.65rem;
    right: 0.65rem;
    z-index: 2;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--green);
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.78rem;
    font-weight: 700;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
    transform: translateY(6px) scale(0.92);
    opacity: 0;
    transition:
      transform 0.25s var(--ease-spring),
      opacity 0.2s,
      background 0.15s;
    text-decoration: none;
  }
  :global([data-theme="light"]) .view-btn {
    background: #16a34a;
    color: #ffffff;
  }
  .project-card:hover .view-btn {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  .view-btn:hover {
    background: var(--green-hover);
    transform: scale(1.06) !important;
  }
  .project-body {
    padding: 1rem 1.1rem 1.1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }
  .project-kind {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--green);
  }
  .project-body h4 {
    font-size: 0.98rem;
    font-weight: 700;
    letter-spacing: -0.015em;
  }
  .project-body p {
    font-size: 0.8rem;
    color: var(--ink-soft);
    line-height: 1.56;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
  }
  .tag-row {
    display: flex;
    gap: 0.35rem;
    flex-wrap: wrap;
    margin-top: 0.2rem;
  }

  .hosted-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1.4rem;
  }
  .hosted-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    transition:
      transform 0.2s var(--ease-smooth),
      box-shadow 0.2s;
    display: flex;
    flex-direction: column;
  }
  .hosted-media {
    height: 165px;
    position: relative;
    overflow: hidden;
    background: var(--surface-raised);
    flex-shrink: 0;
  }
  .hosted-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s;
  }
  .hosted-card:hover .hosted-img {
    transform: scale(1.03);
  }
  .hosted-shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      100deg,
      transparent 40%,
      rgba(255, 255, 255, 0.08) 50%,
      transparent 60%
    );
    transform: translateX(-60%);
    transition: transform 0.6s;
    pointer-events: none;
  }
  .hosted-card:hover .hosted-shine {
    transform: translateX(60%);
  }
  .live-dot {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    background: #ff3b30;
    color: #fff;
    font-size: 0.58rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    padding: 0.22rem 0.5rem;
    border-radius: 999px;
    z-index: 2;
  }
  .suspend-dot {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    background: #2a2a2a;
    color: #b3b3b3;
    border: 1px solid rgba(255, 255, 255, 0.14);
    font-size: 0.58rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    padding: 0.22rem 0.52rem;
    border-radius: 999px;
    z-index: 2;
  }
  .suspend-dot.small {
    font-size: 0.56rem;
    padding: 0.18rem 0.42rem;
    top: 0.55rem;
    left: 0.55rem;
  }
  :global([data-theme="light"]) .suspend-dot {
    background: #1c1e1b;
    color: #e6e1d8;
    border-color: rgba(0, 0, 0, 0.12);
  }
  .hosted-card.suspended {
    opacity: 0.92;
  }
  .hosted-card.suspended .hosted-img,
  .hosted-card.suspended .hosted-thumb img {
    filter: grayscale(0.18) brightness(0.92);
  }
  .hosted-body {
    padding: 1.1rem 1.15rem;
  }
  .hosted-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;
  }
  .hosted-head h4 {
    font-size: 0.95rem;
    font-weight: 700;
  }
  .link-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--surface-raised);
    border: 1px solid var(--border);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    color: var(--ink-soft);
    transition:
      background 0.15s,
      color 0.15s,
      transform 0.15s;
  }
  .link-icon:hover {
    background: var(--green);
    color: #000;
    transform: rotate(12deg) scale(1.05);
    border-color: var(--green);
  }
  .hosted-role {
    display: block;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--green);
    margin: 0.25rem 0 0.6rem;
  }
  .hosted-body p {
    font-size: 0.8rem;
    color: var(--ink-soft);
    line-height: 1.55;
    margin-bottom: 0.75rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.25fr;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }
  .info-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 0.95rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: 0.84rem;
    position: relative;
    overflow: hidden;
  }
  .info-card.primary {
    background: linear-gradient(135deg, #16a34a, #0f7a33);
    color: #ffffff;
    border-color: transparent;
  }
  .info-card.primary .info-label {
    color: rgba(255, 255, 255, 0.85);
  }
  .info-card.primary p {
    color: #ffffff;
  }
  .info-card.primary strong {
    color: #ffffff;
  }
  .info-card.link {
    text-decoration: none;
    transition:
      transform 0.15s,
      border-color 0.15s;
  }
  .info-card.link:hover {
    transform: translateY(-1px);
    border-color: var(--border-strong);
  }
  .info-arrow {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.4;
  }
  .info-label {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--ink-faint);
  }
  .info-card strong {
    font-weight: 700;
    word-break: break-all;
  }
  .contact-form {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.35rem;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
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
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }
  .contact-form label span {
    padding-left: 0.15rem;
  }
  .contact-form input,
  .contact-form textarea {
    font-family: var(--font-body);
    border: 1px solid var(--border);
    border-radius: 9999px;
    padding: 0.72rem 0.95rem;
    font-size: 0.86rem;
    background: var(--surface-raised);
    color: var(--ink);
    outline: none;
    transition:
      border-color 0.15s,
      box-shadow 0.15s,
      background 0.15s;
  }
  .contact-form textarea {
    border-radius: 16px;
    resize: vertical;
    min-height: 118px;
  }
  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: var(--ink-faint);
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: var(--green);
    box-shadow: 0 0 0 3px var(--green-tint);
    background: var(--surface);
  }
  .form-note {
    font-size: 0.68rem;
    color: var(--ink-faint);
    text-align: center;
    margin-top: -0.2rem;
  }
  .btn-block {
    width: 100%;
    margin-top: 0.15rem;
  }

  .footer {
    border-top: 1px solid var(--border);
    padding: 1.35rem 1.5rem 4.8rem;
    background: transparent;
  }
  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.7rem;
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--ink-faint);
  }
  .foot-logo {
    color: var(--ink);
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }
  .foot-logo span {
    font-weight: 600;
    color: var(--ink-faint);
  }
  .foot-mid {
    color: var(--ink-soft);
    text-transform: none;
    letter-spacing: 0;
    font-weight: 500;
    font-size: 0.74rem;
  }

  .availability-dock {
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: min(560px, calc(100% - 1.5rem));
    background: #181818;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 9999px;
    padding: 0.5rem 0.6rem 0.5rem 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
    z-index: 40;
    backdrop-filter: blur(12px);
  }
  .dock-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #1ed760;
    box-shadow: 0 0 12px rgba(30, 215, 96, 0.6);
    flex-shrink: 0;
    animation: ping 1.8s infinite;
  }
  .dock-meta {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
    flex: 1;
    min-width: 0;
  }
  .dock-meta span {
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #b3b3b3;
  }
  .dock-meta strong {
    font-size: 0.76rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
  }
  .dock-cta {
    background: #1ed760;
    color: #ffffff;
    font-size: 0.66rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.5rem 0.95rem;
    border-radius: 9999px;
    white-space: nowrap;
  }
  :global([data-theme="light"]) .dock-cta {
    background: #16a34a;
    color: #ffffff;
  }
  :global([data-theme="light"]) .availability-dock {
    background: #ffffff;
    color: #1c1e1b;
    border: 1px solid #d8d2c6;
    box-shadow:
      0 12px 32px rgba(28, 30, 27, 0.12),
      0 2px 8px rgba(28, 30, 27, 0.06);
  }
  :global([data-theme="light"]) .dock-meta span {
    color: #6b7280;
  }
  :global([data-theme="light"]) .dock-meta strong {
    color: #1c1e1b;
  }
  :global([data-theme="light"]) .dock-dot {
    box-shadow: 0 0 10px rgba(22, 163, 74, 0.35);
  }

  @media (max-width: 980px) {
    .about-grid,
    .contact-grid {
      grid-template-columns: 1fr;
    }
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .hosted-grid {
      grid-template-columns: 1fr;
    }
    .hosted-card.big {
      grid-column: 1 / -1;
    }
    .hosted-card.big .hosted-media {
      height: 240px;
    }
    .hosted-card.big .hosted-body {
      padding: 1.4rem 1.5rem;
    }
    .hosted-card.big .hosted-body h4 {
      font-size: 1.15rem;
    }
    .hosted-card.big .hosted-body p {
      font-size: 0.88rem;
    }
    .stats-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 560px) {
    .skills-grid,
    .projects-grid {
      grid-template-columns: 1fr;
    }
    .form-row {
      grid-template-columns: 1fr;
    }
    .hero-title {
      font-size: 2.35rem;
    }
    .availability-dock {
      bottom: 0.6rem;
      padding: 0.5rem;
    }
    .dock-meta strong {
      font-size: 0.72rem;
    }
  }
</style>
