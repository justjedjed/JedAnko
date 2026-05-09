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
			tech: ['Pure HTML/CSS'],
			thumbnail: mmhotel,
			maintenance: false
		},
		{
			name: 'MM Building',
			url: 'https://mmbuilding.onrender.com/',
			description:
				'A commercial and residential property website for MM Building in Agusan Del Sur. Highlights key facilities including a function hall, swimming pool, elevator, rooms, lights and sound system, and a projector setup for events.',
			role: 'DevOps & Hosting',
			tech: ['Pure HTML/CSS'],
			thumbnail: mmbuilding,
			maintenance: false
		},
		{
			name: "Michaela's Arabic Restobar",
			url: 'https://michaelasarabicrestobar.com/',
			description:
				"A restaurant website for Michaela's Arabic Restobar in San Francisco, Agusan Del Sur — blending Middle Eastern and Asian flavors. Features a full menu showcase, about section, special dish highlight, and contact details.",
			role: 'DevOps & Hosting',
			tech: ['Pure HTML/CSS'],
			thumbnail: michaelarestobar,
			maintenance: false
		},
		{
			name: 'M Debt corporation',
			url: 'https://mdebt-corporation.com/',
			description:
				' M Debt corporation is one of the few offices in Caraga Region established on a Debt Corporation and management background & who have combined legal & professional skills matched with experience to service your requirements effectively.',
			role: 'DevOps & Hosting',
			tech: ['Pure HTML/CSS'],
			maintenance: false
		}
	];
</script>

<div class="min-h-screen flex items-center px-6 py-20 bg-base-200">
	<div class="max-w-3xl w-full mx-auto">
		<!-- Header -->
		<div class="mb-12">
			<p class="text-xs text-primary font-bold uppercase tracking-widest mb-1">Live on the web</p>
			<h2 class="text-4xl font-black text-base-content">Hosted Websites</h2>
			<p class="text-base-content/50 mt-2 text-sm max-w-md">
				Real-world websites I helped design, develop, and deploy for clients and organizations.
			</p>
		</div>

		<!-- Sites list -->
		<div class="flex flex-col gap-4">
			{#each sites as site}
				<div
					class="card card-side bg-base-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden border {site.maintenance
						? 'border-amber-500/30'
						: 'border-base-300'}"
				>
					<!-- Thumbnail -->
					<figure class="w-36 shrink-0 hidden sm:block relative">
						<img
							src={site.thumbnail}
							alt={site.name}
							class="h-full w-full object-cover {site.maintenance ? 'grayscale' : ''}"
						/>
						{#if site.maintenance}
							<div class="absolute inset-0 bg-black/40 flex items-center justify-center">
								<span
									class="text-[10px] font-bold text-white bg-amber-500 px-2 py-0.5 rounded rotate-[-20deg] shadow-md"
								>
									🚧 Maintenance
								</span>
							</div>
						{/if}
					</figure>

					<div class="card-body p-4 gap-2">
						<!-- Name + Badges -->
						<div class="flex items-start justify-between gap-2 flex-wrap">
							<h3 class="font-bold text-base text-base-content">{site.name}</h3>
							<div class="flex gap-1.5 flex-wrap items-center">
								<span class="badge badge-primary badge-outline badge-sm shrink-0">{site.role}</span>
								{#if site.maintenance}
									<!-- Solid amber bg, white text — readable in BOTH light and dark -->
									<span
										class="badge badge-sm shrink-0 bg-amber-500 text-white border-transparent font-semibold"
									>
										🚧 Under Maintenance
									</span>
								{/if}
							</div>
						</div>

						<!-- Description -->
						<p class="text-sm text-base-content/60 leading-relaxed">{site.description}</p>

						<!-- Tech tags -->
						<div class="flex flex-wrap gap-1.5">
							{#each site.tech as t}
								<span class="badge badge-ghost badge-xs">{t}</span>
							{/each}
						</div>

						<!-- CTA -->
						<div class="mt-1 flex items-center gap-2">
							{#if site.maintenance}
								<button disabled class="btn btn-xs btn-disabled gap-1 cursor-not-allowed">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-3.5 w-3.5"
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
								</button>
								<!-- Solid amber text, readable in both modes -->
								<span class="text-xs font-semibold text-amber-600 dark:text-amber-400">
									Website under maintenance
								</span>
							{:else}
								<a
									href={site.url}
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-xs btn-primary gap-1"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-3.5 w-3.5"
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
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
