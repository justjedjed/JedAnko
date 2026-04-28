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

<div class="min-h-screen flex items-center px-6 py-20 bg-[#faf7f2]">
	<div class="max-w-3xl w-full mx-auto">
		<!-- Header -->
		<div class="mb-16">
			<p class="text-xs text-[#c65d4b] font-semibold uppercase tracking-widest mb-2">What I work with</p>
			<h2 class="text-5xl lg:text-6xl font-bold text-[#1a1410]" style="font-family: 'Playfair Display', serif;">Tech Stack</h2>
			<p class="text-[#6b6560] mt-4 text-base max-w-md leading-relaxed">
				A curated set of tools and technologies I use to build modern, scalable web applications.
			</p>
		</div>

		<!-- Categories grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each categories as cat}
				<div
					class="rounded-2xl bg-white border border-[#e8e0d8] p-6 shadow-sm hover:shadow-md transition-all duration-200"
				>
					<div class="flex items-center gap-3 mb-6">
						<span class="px-3 py-1 rounded-full text-xs font-semibold text-white bg-[#c65d4b]">{cat.label}</span>
					</div>
					<div class="flex flex-col gap-4">
						{#each cat.techs as tech}
							<div>
								<div class="flex justify-between items-center mb-2">
									<span class="text-sm font-medium text-[#1a1410] flex items-center gap-2">
										<span class="text-base">{tech.icon}</span>
										{tech.name}
									</span>
									<span class="text-xs text-[#8b7355] font-medium">{tech.level}</span>
								</div>
								<div class="w-full bg-[#e8e0d8] rounded-full h-2">
									<div
										class="h-2 rounded-full bg-gradient-to-r from-[#c65d4b] to-[#d4a574] {levelWidth[
											tech.level
										]} transition-all duration-700"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
