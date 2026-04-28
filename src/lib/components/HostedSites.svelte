<script lang="ts">
	import mmhotel from '$lib/assets/projects/mmhotel.png';
	import mmbuilding from '$lib/assets/projects/mmbuilding.png';
	import michaelarestobar from '$lib/assets/projects/restobar.png';

	const sites = [
		{
			name: 'MM Hotel Tandag',
			url: 'https://www.mmhotel-tandag.com/',
			description:
				"A full hotel website for M'M Hotel in Tandag City featuring room showcases, amenities, a coffee lounge and bar, restobar, function hall and banquet rentals, guest reviews, and a photo gallery.",
			role: 'DevOps & Hosting',
			tech: [],
			thumbnail: mmhotel
		},
		{
			name: 'MM Building',
			url: 'https://mmbuilding.onrender.com/',
			description:
				'A commercial and residential property website for MM Building in Agusan Del Sur. Highlights key facilities including a function hall, swimming pool, elevator, rooms, lights and sound system, and a projector setup for events.',
			role: 'DevOps & Hosting',
			tech: [],
			thumbnail: mmbuilding
		},
		{
			name: "Michaela's Arabic Restobar",
			url: 'https://michaelasarabicrestobar.com/',
			description:
				"A restaurant website for Michaela's Arabic Restobar in San Francisco, Agusan Del Sur — blending Middle Eastern and Asian flavors. Features a full menu showcase, about section, special dish highlight, and contact details.",
			role: 'DevOps & Hosting',
			tech: [],
			thumbnail: michaelarestobar
		}
	];
</script>

<div class="min-h-screen flex items-center px-6 py-20 bg-[#faf7f2]">
	<div class="max-w-3xl w-full mx-auto">
		<!-- Header -->
		<div class="mb-16">
			<p class="text-xs text-[#c65d4b] font-semibold uppercase tracking-widest mb-2">Live on the web</p>
			<h2 class="text-5xl lg:text-6xl font-bold text-[#1a1410]" style="font-family: 'Playfair Display', serif;">Hosted Websites</h2>
			<p class="text-[#6b6560] mt-4 text-base max-w-md leading-relaxed">
				Real-world websites I helped design, develop, and deploy for clients and organizations.
			</p>
		</div>

		<!-- Sites list -->
		<div class="flex flex-col gap-5">
			{#each sites as site}
				<div
					class="group rounded-2xl bg-white border border-[#e8e0d8] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col sm:flex-row"
				>
					<!-- Thumbnail -->
					<div class="w-full sm:w-40 sm:shrink-0 h-40 sm:h-auto overflow-hidden bg-[#f0eae2]">
						<img src={site.thumbnail} alt={site.name} class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
					</div>

					<div class="p-6 gap-3 flex flex-col flex-1">
						<div class="flex items-start justify-between gap-2 flex-wrap">
							<h3 class="font-semibold text-lg text-[#1a1410]" style="font-family: 'Playfair Display', serif;">{site.name}</h3>
							<span class="px-2 py-1 rounded text-xs font-semibold text-white bg-[#c65d4b] shrink-0">{site.role}</span>
						</div>
						<p class="text-sm text-[#6b6560] leading-relaxed">{site.description}</p>
						<div class="flex flex-wrap gap-2 mt-1">
							{#each site.tech as t}
								<span class="text-xs px-2 py-1 rounded-full bg-[#faf7f2] border border-[#e8e0d8] text-[#8b7355]">{t}</span>
							{/each}
						</div>
						<div class="mt-2">
							<a
								href={site.url}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c65d4b] text-white font-medium text-sm hover:bg-[#b54a3a] transition-colors"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
									/>
								</svg>
								Visit Site
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
