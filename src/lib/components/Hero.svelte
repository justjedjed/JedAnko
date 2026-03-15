<script>
	// Personal info — edit these to your own details
	const name = 'Jade Jabagat Angco';
	const role = 'Front-End Developer';
	const location = 'Bislig City, Surigao Del Sur,  Philippines 🇵🇭';
	const bio = `I'm a frontend-focused developer who loves building fast, responsive, and visually polished web interfaces. I specialize in SvelteKit and Vue.js, and I care deeply about the details — smooth interactions, clean layouts, and code that's easy to maintain. When I'm not pushing pixels, I'm exploring new UI patterns or contributing to open-source projects.`;
	const resumeLink = '#'; // Replace with actual resume link
</script>

<div class="min-h-screen flex items-center justify-center px-6 py-20 lg:py-0 mt-14 lg:mt-0">
	<div class="max-w-3xl w-full">
		<!-- Badge -->
		<!-- <div class="badge badge-primary badge-outline mb-4 text-xs tracking-widest uppercase">Available for hire</div> -->

		<!-- Name + Role -->
		<h1 class="text-5xl lg:text-6xl font-black text-base-content leading-tight">
			{name}
		</h1>
		<h2 class="text-xl lg:text-2xl font-semibold text-primary mt-2">{role}</h2>

		<!-- Location -->
		<p class="text-sm text-base-content/50 mt-2 flex items-center gap-1">
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
		<div class="divider my-6 w-24 mx-0"></div>

		<!-- Bio -->
		<p class="text-base-content/70 leading-relaxed max-w-xl text-base">
			{bio}
		</p>

		<p class="text-base-content/50 leading-relaxed max-w-xl text-sm mt-3">
			Junior Computer Information Technician & Frontend Developer with a BS in Computer Science from
			<span class="text-base-content/70 font-medium"
				>North Eastern Mindanao State University - Tagbina Campus</span
			>. Skilled in PHP development, UI/UX design, and IT support, with hands-on experience in both
			software and hardware troubleshooting. Certified in
			<span class="text-base-content/70 font-medium">Computer System Servicing NCII</span>.
		</p>
		<!-- CTAs -->
		<div class="flex flex-wrap gap-3 mt-8">
			<!-- <a href={resumeLink} class="btn btn-primary btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Download Resume
      </a> -->
			<a
				href="https://github.com/JedjedAnko"
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-outline btn-sm gap-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
					/>
				</svg>
				GitHub
			</a>
			<!-- <a
				href="https://linkedin.com/in/yourusername"
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-outline btn-sm gap-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
					/>
				</svg>
				LinkedIn
			</a> -->
		</div>

		<!-- Stats row -->
		<div class="flex flex-wrap gap-8 mt-12">
			<!-- <div>
				<p class="text-3xl font-black text-primary">2+</p>
				<p class="text-xs text-base-content/50 uppercase tracking-wider">Years Exp.</p>
			</div> -->
			<div>
				<p class="text-3xl font-black text-primary">7</p>
				<p class="text-xs text-base-content/50 uppercase tracking-wider">Projects</p>
			</div>
			<div>
				<p class="text-3xl font-black text-primary">5</p>
				<p class="text-xs text-base-content/50 uppercase tracking-wider">Live Sites</p>
			</div>
		</div>
	</div>
</div>
