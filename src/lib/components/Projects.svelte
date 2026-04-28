<script lang="ts">
	import elnido from '$lib/assets/projects/Elnido1.jpeg';
	import nutrigourmet from '$lib/assets/projects/Nutrigourment3.jpeg';
	import eventease from '$lib/assets/projects/EventEase1.jpeg';
	import pea from '$lib/assets/projects/PEA.jpeg';
	import mentalhealth from '$lib/assets/projects/MentalHealth.jpeg';
	import travelhive from '$lib/assets/projects/TravelHive.png';
	import edushare from '$lib/assets/projects/edushare.jpeg';

	const projects = [
		{
			title: 'Elnido Hideaway',
			description:
				'A website showcasing the stunning tourist spots of El Nido, featuring local attractions and destination highlights. Fully developed but intended for local use.',
			tags: ['Nuxt', 'TailwindCSS'],
			status: 'Completed',
			statusColor: 'badge-success',
			image: elnido
		},
		{
			title: 'NutriGourmet – Food Blog',
			description:
				'A recipe-sharing website where users can publish and share cooking creations. Completed but locally used only.',
			tags: ['CodeIgniter', 'TailwindCSS'],
			status: 'Completed',
			statusColor: 'badge-success',
			image: nutrigourmet
		},
		{
			title: 'EventEase – Info Website',
			description:
				'An informational website for EventEase that presents upcoming events, schedules, and venue details. Completed but locally used only.',
			tags: ['CodeIgniter', 'TailwindCSS'],
			status: 'Completed',
			statusColor: 'badge-success',
			image: eventease
		},
		{
			title: 'Employee Turnover Attrition (Thesis)',
			description:
				'My undergraduate thesis project using Gradient Boosting to predict employee attrition based on structured datasets and organizational features.',
			tags: ['Chakra', 'TailwindCSS'],
			status: 'Completed',
			statusColor: 'badge-success',
			image: pea
		},
		{
			title: 'Student Mental Health',
			description:
				'A mental health monitoring web app for students built with Flet and MySQL. It predicts stress and risk levels using a Random Forest algorithm, features session-based login, editable user profiles, and admin analytics dashboards.',
			tags: ['Flutter', 'TailwindCSS'],
			status: 'Completed',
			statusColor: 'badge-success',
			image: mentalhealth
		},
		{
			title: 'TravelHive',
			description:
				'A mockup design of tourist spots in Surigao Del Sur, commissioned from a Hotel Management student.',
			tags: ['Nuxt', 'TailwindCSS'],
			demo: 'https://travelhive-tour.onrender.com/',
			status: 'Completed',
			statusColor: 'badge-success',
			image: travelhive
		},
		{
			title: 'Edushare',
			description: 'Under development. A platform for sharing educational resources.',
			tags: ['Nuxt', 'TailwindCSS', 'Firebase'],
			demo: 'https://edushare-free.onrender.com/',
			status: 'Under Development',
			statusColor: 'badge-info',
			image: edushare
		}
	];
</script>

<div class="min-h-screen flex items-center px-6 py-20 bg-white">
	<div class="max-w-3xl w-full mx-auto">
		<!-- Header -->
		<div class="mb-16">
			<p class="text-xs text-[#c65d4b] font-semibold uppercase tracking-widest mb-2">What I've built</p>
			<h2 class="text-5xl lg:text-6xl font-bold text-[#1a1410]" style="font-family: 'Playfair Display', serif;">Projects</h2>
			<p class="text-[#6b6560] mt-4 text-base max-w-md leading-relaxed">
				Personal and freelance projects — from side experiments to production-ready applications.
			</p>
		</div>

		<!-- Projects grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each projects as project}
				<div
					class="rounded-2xl bg-[#faf7f2] border border-[#e8e0d8] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group flex flex-col"
				>
					{#if project.image}
						<div class="overflow-hidden h-48 bg-[#f0eae2]">
							<img src={project.image} alt={project.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
						</div>
					{/if}

					<div class="p-6 flex flex-col gap-3 flex-1">
						<!-- Title + Status -->
						<div class="flex items-start justify-between gap-2">
							<h3
								class="font-semibold text-[#1a1410] text-lg leading-snug group-hover:text-[#c65d4b] transition-colors"
								style="font-family: 'Playfair Display', serif;"
							>
								{project.title}
							</h3>
							<span class="px-2 py-1 rounded text-xs font-semibold text-white whitespace-nowrap shrink-0 {project.statusColor === 'badge-success' ? 'bg-green-600' : 'bg-blue-600'}"
								>{project.status}</span
							>
						</div>

						<!-- Description -->
						<p class="text-sm text-[#6b6560] leading-relaxed flex-1">
							{project.description}
						</p>

						<!-- Tags -->
						<div class="flex flex-wrap gap-2 mt-2">
							{#each project.tags as tag}
								<span class="text-xs px-2 py-1 rounded-full bg-white border border-[#e8e0d8] text-[#8b7355] font-medium">{tag}</span>
							{/each}
						</div>

						<!-- Links -->
						<div class="flex gap-2 mt-3 pt-3 border-t border-[#e8e0d8]">
							{#if project.demo}
								<a
									href={project.demo}
									target="_blank"
									rel="noopener noreferrer"
									class="text-xs font-semibold text-[#c65d4b] hover:text-[#b54a3a] flex items-center gap-1 transition-colors"
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
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
									View Live
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
