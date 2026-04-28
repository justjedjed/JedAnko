<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Jade Angco | Frontend Developer</title>
	<meta
		name="description"
		content="Portfolio of Jade Jabagat Angco — Frontend Developer specializing in SvelteKit, Nuxt, and TailwindCSS."
	/>
	<link rel="icon" href={favicon} />
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<style>
	:global(html) {
		background-color: rgb(250, 247, 242);
		color: rgb(26, 20, 16);
	}

	:global(body) {
		font-family: 'Inter', sans-serif;
		background-color: rgb(250, 247, 242);
		color: rgb(26, 20, 16);
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Playfair Display', serif;
		font-weight: 600;
	}
</style>

{@render children()}
