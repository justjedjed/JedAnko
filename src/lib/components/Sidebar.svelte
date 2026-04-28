<script lang="ts">
	import Jade from '$lib/assets/img/Jade.jpg';
	import { onMount } from 'svelte';

	let {
		activeSection = 'about',
		scrollTo = (_id: string) => {}
	}: {
		activeSection: string;
		scrollTo: (id: string) => void;
	} = $props();

	const navItems = [
		{ id: 'about', label: 'About' },
		{ id: 'stack', label: 'Tech Stack' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'hosted', label: 'Hosted Sites' },
		{ id: 'contact', label: 'Contact' }
	];

	let drawerOpen = $state(false);
	let isDark = $state(true);

	onMount(() => {
		const saved = localStorage.getItem('theme') ?? 'night';
		isDark = saved === 'night';
		document.documentElement.setAttribute('data-theme', saved);
	});

	function toggleTheme() {
		isDark = !isDark;
		const theme = isDark ? 'night' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}
</script>

<!-- Mobile top bar -->
<div
	class="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e8e0d8] flex items-center px-4 h-14 shadow-sm"
>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button class="p-2 hover:bg-[#faf7f2] rounded-lg transition-colors" onclick={() => (drawerOpen = !drawerOpen)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 text-[#1a1410]"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>
	<span class="ml-3 font-semibold text-[#1a1410] tracking-widest text-sm" style="font-family: 'Playfair Display', serif;">Portfolio</span>
</div>

<!-- Mobile drawer overlay -->
{#if drawerOpen}
	<div
		class="lg:hidden fixed inset-0 z-40 bg-black/50"
		onclick={() => (drawerOpen = false)}
		onkeydown={(e) => e.key === 'Escape' && (drawerOpen = false)}
		role="button"
		tabindex="0"
	></div>
{/if}

<!-- Sidebar -->
<aside
	class="
  fixed top-0 left-0 h-full z-50 w-64
  bg-white border-r border-[#e8e0d8]
  flex flex-col py-8 px-6
  transition-transform duration-300
  shadow-sm
  {drawerOpen ? 'translate-x-0' : '-translate-x-full'}
  lg:translate-x-0
">
	<!-- Avatar + Name -->
	<div class="flex flex-col items-center gap-4 mb-12">
		<div class="w-24 h-24 rounded-2xl overflow-hidden shadow-sm ring ring-[#e8e0d8] ring-offset-2">
			<img src={Jade} alt="Avatar" class="w-full h-full object-cover" />
		</div>
		<div class="text-center">
			<p class="font-semibold text-[#1a1410] text-lg leading-tight" style="font-family: 'Playfair Display', serif;">Jade Jabagat Angco</p>
			<p class="text-xs text-[#8b7355] tracking-widest uppercase mt-1">Front-End Developer</p>
		</div>
	</div>

	<!-- Nav -->
	<nav class="flex flex-col gap-0.5 flex-1">
		{#each navItems as item}
			<button
				class="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
          {activeSection === item.id ? 'bg-[#c65d4b] text-white' : 'text-[#6b6560] hover:bg-[#faf7f2]'}"
				onclick={() => {
					scrollTo(item.id);
					drawerOpen = false;
				}}
			>
				{item.label}
			</button>
		{/each}
	</nav>

	<!-- Theme Toggle -->
	<div class="mt-6 flex items-center justify-between px-2 py-3 rounded-lg border border-[#e8e0d8]">
		<span class="text-xs text-[#8b7355] uppercase tracking-widest font-medium">
			{isDark ? 'Dark' : 'Light'}
		</span>
		<label class="swap swap-rotate cursor-pointer">
			<input type="checkbox" checked={isDark} onchange={toggleTheme} />
			<svg
				class="swap-off h-4 w-4 fill-current text-[#c65d4b]"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<path
					d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
				/>
			</svg>
			<svg
				class="swap-on h-4 w-4 fill-current text-[#c65d4b]"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<path
					d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
				/>
			</svg>
		</label>
	</div>

	<!-- Footer -->
	<div class="mt-6 pt-6 border-t border-[#e8e0d8] text-center">
		<p class="text-xs text-[#8b7355]">© 2026 Jade Angco</p>
	</div>
</aside>
