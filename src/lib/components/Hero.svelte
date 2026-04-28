<script>
	// Personal info — edit these to your own details
	const name = 'Jade Jabagat Angco';
	const role = 'Front-End Developer';
	const location = 'Bislig City, Surigao Del Sur,  Philippines 🇵🇭';
	const bio = `I'm a frontend-focused developer who loves building fast, responsive, and visually polished web interfaces. I specialize in SvelteKit and Vue.js, and I care deeply about the details — smooth interactions, clean layouts, and code that's easy to maintain. When I'm not pushing pixels, I'm exploring new UI patterns.`;
	const resumeLink = '#'; // Replace with actual resume link
</script>

<div class="min-h-screen flex items-center justify-center px-6 py-20 lg:py-0 mt-14 lg:mt-0 bg-gradient-to-b from-white via-white to-[#faf7f2]">
	<div class="max-w-3xl w-full">
		<!-- Eyebrow text -->
		<p class="text-xs text-[#c65d4b] font-semibold uppercase tracking-widest mb-4">Welcome</p>

		<!-- Name + Role -->
		<h1 class="text-6xl lg:text-7xl font-bold leading-tight text-[#1a1410]" style="font-family: 'Playfair Display', serif; letter-spacing: -0.02em;">
			{name}
		</h1>
		<h2 class="text-2xl lg:text-3xl font-semibold text-[#8b7355] mt-4">{role}</h2>

		<!-- Location -->
		<p class="text-base text-[#6b6560] mt-3 flex items-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 text-[#c65d4b]"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				/>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
			{location}
		</p>

		<!-- Divider -->
		<div class="h-px bg-[#e8e0d8] my-8 w-12"></div>

		<!-- Bio -->
		<p class="text-[#4a4440] leading-relaxed max-w-2xl text-base lg:text-lg">
			{bio}
		</p>

		<p class="text-[#8b7355] leading-relaxed max-w-2xl text-base mt-4">
			Junior Computer Information Technician & Frontend Developer with a BS in Computer Science from
			<span class="text-[#1a1410] font-semibold"
				>North Eastern Mindanao State University - Tagbina Campus</span
			>. Skilled in UI/UX design and IT support, with hands-on experience in both
			software and hardware troubleshooting. Certified in
			<span class="text-[#1a1410] font-semibold">Computer System Servicing NCII</span>.
		</p>
		<!-- CTAs -->
		<div class="flex flex-wrap gap-3 mt-10">
			<a
				href="https://github.com/JedjedAnko"
				target="_blank"
				rel="noopener noreferrer"
				class="px-6 py-3 rounded-lg font-medium text-white bg-[#c65d4b] hover:bg-[#b54a3a] transition-colors duration-200 flex items-center gap-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
					/>
				</svg>
				View on GitHub
			</a>
		</div>

		<!-- Stats row -->
		<div class="flex flex-wrap gap-12 mt-16">
			<div>
				<p class="text-4xl font-bold text-[#c65d4b]" style="font-family: 'Playfair Display', serif;">7</p>
				<p class="text-xs text-[#8b7355] uppercase tracking-widest mt-2 font-medium">Projects Completed</p>
			</div>
			<div>
				<p class="text-4xl font-bold text-[#c65d4b]" style="font-family: 'Playfair Display', serif;">5</p>
				<p class="text-xs text-[#8b7355] uppercase tracking-widest mt-2 font-medium">Live Sites</p>
			</div>
		</div>
	</div>
</div>
