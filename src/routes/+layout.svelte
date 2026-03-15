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
</svelte:head>

{@render children()}
