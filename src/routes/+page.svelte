<script lang="ts">
  import { onMount } from 'svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import TechStack from '$lib/components/TechStack.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import HostedSites from '$lib/components/HostedSites.svelte';
  import Contact from '$lib/components/Contact.svelte';

  const sections = ['about', 'stack', 'projects', 'hosted', 'contact'];
  let activeSection = $state('about');

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    activeSection = id;
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  });
</script>

<div class="flex min-h-screen bg-base-100">
  <Sidebar {activeSection} scrollTo={scrollToSection} />

  <main class="flex-1 lg:ml-64 w-full">
    <section id="about"><Hero /></section>
    <section id="stack"><TechStack /></section>
    <section id="projects"><Projects /></section>
    <section id="hosted"><HostedSites /></section>
    <section id="contact"><Contact /></section>
  </main>
</div>