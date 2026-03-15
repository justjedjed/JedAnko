<script lang="ts">
	// Edit this list to match your actual stack
	type Level = 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';

	const categories: {
		label: string;
		color: string;
		techs: { name: string; icon: string; level: Level }[];
	}[] = [
		{
			label: 'Frontend',
			color: 'badge-primary',
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
			color: 'badge-secondary',
			techs: [
				// { name: 'Node.js', icon: '🟩', level: 'Advanced' },
				// { name: 'Express', icon: '🚂', level: 'Advanced' },
				{ name: 'CodeIgniter', icon: '🔴', level: 'Intermediate' },
				{ name: 'Hono', icon: '⚡', level: 'Beginner' },
				{ name: 'Firebase', icon: '🔥', level: 'Intermediate' }
			]
		},
		{
			label: 'Database',
			color: 'badge-accent',
			techs: [
				// { name: 'PostgreSQL', icon: '🐘', level: 'Advanced' },
				{ name: 'MySQL', icon: '🐬', level: 'Intermediate' },
				{ name: 'MongoDB', icon: '🍃', level: 'Intermediate' }
				// { name: 'Redis', icon: '❤️', level: 'Beginner' }
			]
		},
		{
			label: 'Tools & DevOps',
			color: 'badge-neutral',
			techs: [
				{ name: 'Git & GitHub', icon: '🐙', level: 'Intermediate' },
				{ name: 'Docker', icon: '🐳', level: 'Beginner' },
				{ name: 'Vercel', icon: '▲', level: 'Advanced' },
				{ name: 'Render', icon: '🟣', level: 'Intermediate' },
				{ name: 'Figma', icon: '🎭', level: 'Intermediate' }
			]
		}
	];

	const levelColor: Record<Level, string> = {
		Expert: 'progress-primary',
		Advanced: 'progress-secondary',
		Intermediate: 'progress-accent',
		Beginner: 'progress-neutral'
	};
	const levelWidth: Record<Level, string> = {
		Expert: 'w-full',
		Advanced: 'w-4/5',
		Intermediate: 'w-3/5',
		Beginner: 'w-2/5'
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
					class="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow"
				>
					<div class="card-body p-5">
						<div class="flex items-center gap-2 mb-4">
							<div class="badge {cat.color} badge-sm font-semibold">{cat.label}</div>
						</div>
						<div class="flex flex-col gap-3">
							{#each cat.techs as tech}
								<div>
									<div class="flex justify-between items-center mb-1">
										<span class="text-sm font-medium text-base-content flex items-center gap-1.5">
											<span>{tech.icon}</span>
											{tech.name}
										</span>
										<span class="text-xs text-base-content/40">{tech.level}</span>
									</div>
									<div class="w-full bg-base-300 rounded-full h-1.5">
										<div
											class="h-1.5 rounded-full bg-primary {levelWidth[
												tech.level
											]} transition-all duration-700"
										></div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
