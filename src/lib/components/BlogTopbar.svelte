<script lang="ts">
  import { onMount } from "svelte";
  import { Moon, Sun } from "@lucide/svelte";

  interface Props {
    links: { label: string; href: string }[];
  }
  let { links }: Props = $props();

  let theme: "dark" | "light" = $state("dark");
  onMount(() => {
    theme =
      (document.documentElement.getAttribute("data-theme") as
        | "dark"
        | "light") || "dark";
  });
  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Private mode — theme just won't persist.
    }
  }
</script>

<header class="topbar">
  <div class="section-inner topbar-inner">
    <a href="/" class="brandlink" aria-label="Back to portfolio">
      <span aria-hidden="true">←</span> Jade Angco
    </a>
    <nav aria-label="Sections">
      {#each links as l}<a href={l.href}>{l.label}</a>{/each}
    </nav>
    <button
      type="button"
      class="theme-btn"
      onclick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span aria-hidden="true">
        {#if theme === "dark"}
          <Moon size={16} strokeWidth={2.25} />
        {:else}
          <Sun size={16} strokeWidth={2.25} />
        {/if}
      </span>
    </button>
  </div>
</header>

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
  .theme-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: var(--surface-raised);
    border: 1px solid var(--border-strong);
    color: var(--ink);
    flex-shrink: 0;
  }
  .theme-btn:hover {
    background: var(--surface-hover);
    border-color: var(--ink);
  }
  .theme-btn span {
    display: inline-flex;
  }
  @media (max-width: 640px) {
    .topbar nav {
      display: none;
    }
  }
</style>
