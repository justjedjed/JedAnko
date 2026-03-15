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

<div class="min-h-screen flex items-center px-6 py-20">
	<div class="max-w-3xl w-full mx-auto">
		<!-- Header -->
		<div class="mb-12">
			<p class="text-xs text-primary font-bold uppercase tracking-widest mb-1">What I've built</p>
			<h2 class="text-4xl font-black text-base-content">Projects</h2>
			<p class="text-base-content/50 mt-2 text-sm max-w-md">
				Personal and freelance projects — from side experiments to production-ready applications.
			</p>
		</div>

		<!-- Projects grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
			{#each projects as project}
				<div
					class="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
				>
					{#if project.image}
						<figure>
							<img src={project.image} alt={project.title} class="w-full h-40 object-cover" />
						</figure>
					{/if}

					<div class="card-body p-5 flex flex-col gap-3">
						<!-- Title + Status -->
						<div class="flex items-start justify-between gap-2">
							<h3
								class="font-bold text-base-content text-base leading-snug group-hover:text-primary transition-colors"
							>
								{project.title}
							</h3>
							<span class="badge {project.statusColor} badge-sm shrink-0 text-white"
								>{project.status}</span
							>
						</div>

						<!-- Description -->
						<p class="text-sm text-base-content/60 leading-relaxed flex-1">
							{project.description}
						</p>

						<!-- Tags -->
						<div class="flex flex-wrap gap-1.5 mt-1">
							{#each project.tags as tag}
								<span class="badge badge-outline badge-xs text-base-content/50">{tag}</span>
							{/each}
						</div>

						<!-- Links -->
						<div class="flex gap-2 mt-2">
							<!-- {#if project.github}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-ghost btn-xs gap-1"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-3.5 w-3.5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
										/>
									</svg>
									Code
								</a>
							{/if} -->

							{#if project.demo}
								<a
									href={project.demo}
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-ghost btn-xs gap-1 text-primary"
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
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
									Live Demo
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
