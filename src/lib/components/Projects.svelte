<script lang="ts">
	import elnido from '$lib/assets/projects/Elnido1.jpeg';
	import nutrigourmet from '$lib/assets/projects/Nutrigourment3.jpeg';
	import eventease from '$lib/assets/projects/EventEase1.jpeg';
	import pea from '$lib/assets/projects/PEA.jpeg';
	import mentalhealth from '$lib/assets/projects/MentalHealth.jpeg';
	import travelhive from '$lib/assets/projects/TravelHive.png';
	import edushare from '$lib/assets/projects/edushare.jpeg';
	import parinig from '$lib/assets/projects/parinig.jpeg';

	type Project = {
		title: string;
		description: string;
		tags: string[];
		status: 'Completed' | 'Under Development';
		image: string;
		demo?: string;
	};
	const projects: Project[] = [
		{
			title: 'Elnido Hideaway',
			description:
				'A website showcasing the stunning tourist spots of El Nido, featuring local attractions and destination highlights. Fully developed but intended for local use.',
			tags: ['Nuxt', 'TailwindCSS'],
			status: 'Completed',
			image: elnido
		},
		{
			title: 'NutriGourmet – Food Blog',
			description:
				'A recipe-sharing website where users can publish and share cooking creations. Completed but locally used only.',
			tags: ['CodeIgniter', 'TailwindCSS'],
			status: 'Completed',
			image: nutrigourmet
		},
		{
			title: 'EventEase – Info Website',
			description:
				'An informational website for EventEase that presents upcoming events, schedules, and venue details. Completed but locally used only.',
			tags: ['CodeIgniter', 'TailwindCSS'],
			status: 'Completed',
			image: eventease
		},
		{
			title: 'Employee Turnover Attrition (Thesis)',
			description:
				'My undergraduate thesis project using Gradient Boosting to predict employee attrition based on structured datasets and organizational features.',
			tags: ['Chakra', 'TailwindCSS'],
			status: 'Completed',
			image: pea
		},
		{
			title: 'Student Mental Health',
			description:
				'A mental health monitoring web app for students built with Flet and MySQL. Predicts stress and risk levels using Random Forest, with session-based login, editable profiles, and admin analytics.',
			tags: ['Flutter', 'MySQL'],
			status: 'Completed',
			image: mentalhealth
		},
		{
			title: 'TravelHive',
			description:
				'A mockup design of tourist spots in Surigao Del Sur, commissioned from a Hotel Management student.',
			tags: ['Nuxt', 'TailwindCSS'],
			demo: 'https://travelhive-tour.onrender.com/',
			status: 'Completed',
			image: travelhive
		},
		{
			title: 'Edushare',
			description:
				'A platform for sharing educational resources — currently under active development.',
			tags: ['Nuxt', 'TailwindCSS', 'Firebase'],
			demo: 'https://edushare-free.onrender.com/',
			status: 'Under Development',
			image: edushare
		},
		{
			title: 'Parinig',
			description:
				'A quiet space to say what’s on your mind—no names, no pressure. Just real thoughts, shared freely.',
			tags: ['Svelte', 'TailwindCSS', 'Firebase', 'DaisyUI'],
			demo: 'https://parinig.vercel.app/',
			status: 'Under Development',
			image: parinig
		}
	];

	// Status badge: fully explicit classes so no DaisyUI color bleed
	const statusStyles: Record<Project['status'], string> = {
		Completed:
			'bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700/50',
		'Under Development':
			'bg-sky-100 text-sky-700 border border-sky-200 dark:bg-sky-900/40 dark:text-sky-300 dark:border-sky-700/50'
	};

	const statusDot: Record<Project['status'], string> = {
		Completed: 'bg-emerald-500',
		'Under Development': 'bg-sky-400'
	};
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
					class="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group overflow-hidden"
				>
					<!-- Image -->
					{#if project.image}
						<figure class="overflow-hidden">
							<img
								src={project.image}
								alt={project.title}
								class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
							/>
						</figure>
					{/if}

					<div class="card-body p-5 flex flex-col gap-3">
						<!-- Title + Status -->
						<div class="flex items-start justify-between gap-2 flex-wrap">
							<h3
								class="font-bold text-base-content text-base leading-snug group-hover:text-primary transition-colors"
							>
								{project.title}
							</h3>
							<!-- Fully explicit badge — readable in light AND dark -->
							<span
								class="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0 {statusStyles[
									project.status
								]}"
							>
								<span class="w-1.5 h-1.5 rounded-full shrink-0 {statusDot[project.status]}"></span>
								{project.status}
							</span>
						</div>

						<!-- Description -->
						<p class="text-sm text-base-content/60 leading-relaxed flex-1">
							{project.description}
						</p>

						<!-- Tags -->
						<div class="flex flex-wrap gap-1.5">
							{#each project.tags as tag}
								<span
									class="text-[11px] font-medium px-2 py-0.5 rounded-full bg-base-200 text-base-content/60 border border-base-300"
								>
									{tag}
								</span>
							{/each}
						</div>

						<!-- Links -->
						{#if project.demo}
							<div class="mt-1">
								<a
									href={project.demo}
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
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
									Live Demo
								</a>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
