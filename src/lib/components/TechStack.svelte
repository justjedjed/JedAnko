<script lang="ts">
	type Level = 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';

	const categories: {
		label: string;
		icon: string;
		techs: { name: string; icon: string; level: Level }[];
	}[] = [
		{
			label: 'Frontend',
			icon: '🖥️',
			techs: [
				{ name: 'SvelteKit', icon: '🧡', level: 'Intermediate' },
				{ name: 'Nuxt', icon: '💚', level: 'Intermediate' },
				{ name: 'TailwindCSS', icon: '🎨', level: 'Expert' },
				{ name: 'DaisyUI', icon: '🌸', level: 'Expert' },
				{ name: 'TypeScript', icon: '🔷', level: 'Intermediate' }
			]
		},
		{
			label: 'Backend',
			icon: '⚙️',
			techs: [
				{ name: 'CodeIgniter', icon: '🔴', level: 'Intermediate' },
				{ name: 'Hono', icon: '⚡', level: 'Beginner' },
				{ name: 'Firebase', icon: '🔥', level: 'Intermediate' }
			]
		},
		{
			label: 'Database',
			icon: '🗄️',
			techs: [
				{ name: 'MySQL', icon: '🐬', level: 'Intermediate' },
				{ name: 'MongoDB', icon: '🍃', level: 'Intermediate' }
			]
		},
		{
			label: 'Tools & DevOps',
			icon: '🛠️',
			techs: [
				{ name: 'Git & GitHub', icon: '🐙', level: 'Intermediate' },
				{ name: 'Docker', icon: '🐳', level: 'Beginner' },
				{ name: 'Vercel', icon: '▲', level: 'Advanced' },
				{ name: 'Render', icon: '🟣', level: 'Intermediate' },
				{ name: 'Figma', icon: '🎭', level: 'Intermediate' }
			]
		}
	];

	// Fully explicit — no DaisyUI badge color bleed
	const categoryStyle: Record<string, string> = {
		Frontend:
			'bg-violet-100 text-violet-700 border border-violet-200 dark:bg-violet-900/40 dark:text-violet-300 dark:border-violet-700/50',
		Backend:
			'bg-orange-100 text-orange-700 border border-orange-200 dark:bg-orange-900/40 dark:text-orange-300 dark:border-orange-700/50',
		Database:
			'bg-teal-100 text-teal-700 border border-teal-200 dark:bg-teal-900/40 dark:text-teal-300 dark:border-teal-700/50',
		'Tools & DevOps':
			'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-600/50'
	};

	const categoryAccent: Record<string, string> = {
		Frontend: 'bg-violet-500',
		Backend: 'bg-orange-500',
		Database: 'bg-teal-500',
		'Tools & DevOps': 'bg-slate-500'
	};

	// Level: dots instead of a bar — no color bleed risk
	const levelConfig: Record<Level, { dots: number; label: string; color: string }> = {
		Expert: {
			dots: 4,
			label: 'Expert',
			color: 'bg-emerald-500 dark:bg-emerald-400'
		},
		Advanced: {
			dots: 3,
			label: 'Advanced',
			color: 'bg-sky-500 dark:bg-sky-400'
		},
		Intermediate: {
			dots: 2,
			label: 'Intermediate',
			color: 'bg-amber-500 dark:bg-amber-400'
		},
		Beginner: {
			dots: 1,
			label: 'Beginner',
			color: 'bg-rose-400 dark:bg-rose-400'
		}
	};
</script>

<div class="min-h-screen flex items-center px-6 py-20 bg-base-200">
	<div class="max-w-3xl w-full mx-auto">
		<!-- Header -->
		<div class="mb-12">
			<p class="text-xs text-primary font-bold uppercase tracking-widest mb-1">What I work with</p>
			<h2 class="text-4xl font-black text-base-content">Tech Stack</h2>
			<p class="text-base-content/50 mt-2 text-sm max-w-md">
				A curated set of tools and technologies I use to build modern, scalable web applications.
			</p>
		</div>

		<!-- Categories grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each categories as cat}
				<div
					class="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
				>
					<div class="card-body p-5">
						<!-- Category header -->
						<div class="flex items-center gap-2 mb-5">
							<span
								class="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full {categoryStyle[
									cat.label
								]}"
							>
								<span>{cat.icon}</span>
								{cat.label}
							</span>
						</div>

						<!-- Tech rows -->
						<div class="flex flex-col gap-3.5">
							{#each cat.techs as tech}
								{@const cfg = levelConfig[tech.level]}
								<div class="flex items-center justify-between gap-3">
									<!-- Name -->
									<span
										class="flex items-center gap-2 text-sm font-medium text-base-content min-w-0"
									>
										<span class="text-base leading-none">{tech.icon}</span>
										<span class="truncate">{tech.name}</span>
									</span>

									<!-- Level: dot indicators + label -->
									<div class="flex items-center gap-2 shrink-0">
										<span class="text-[11px] text-base-content/40 font-medium hidden sm:block">
											{cfg.label}
										</span>
										<div class="flex gap-0.5">
											{#each { length: 4 } as _, i}
												<span
													class="w-2 h-2 rounded-full transition-colors {i < cfg.dots
														? cfg.color
														: 'bg-base-300'}"
												></span>
											{/each}
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Legend -->
		<div class="flex flex-wrap gap-4 mt-8 justify-center">
			{#each Object.entries(levelConfig) as [label, cfg]}
				<div class="flex items-center gap-1.5">
					<div class="flex gap-0.5">
						{#each { length: 4 } as _, i}
							<span class="w-1.5 h-1.5 rounded-full {i < cfg.dots ? cfg.color : 'bg-base-300'}"
							></span>
						{/each}
					</div>
					<span class="text-xs text-base-content/50">{label}</span>
				</div>
			{/each}
		</div>
	</div>
</div>
