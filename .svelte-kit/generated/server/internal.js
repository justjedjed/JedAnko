
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n\t<meta charset=\"utf-8\" />\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t<meta name=\"text-scale\" content=\"scale\" />\r\n\r\n\t<!-- SEO Meta Tags -->\r\n\t<meta name=\"description\"\r\n\t\tcontent=\"Male Front-End Developer specializing in SvelteKit, Vue.js, and Nuxt. Building responsive, visually polished web interfaces with modern technologies.\" />\r\n\t<meta name=\"keywords\"\r\n\t\tcontent=\"Jade Angco, Front-End Developer, Web Developer, SvelteKit, Vue.js, Nuxt, TailwindCSS, DaisyUI, TypeScript, CodeIgniter, Firebase, Bislig City, Surigao del Sur, Philippines, Freelance Developer, UI/UX Developer, Computer Science, Full Stack Developer\" />\r\n\t<meta name=\"author\" content=\"Jade Jabagat Angco\" />\r\n\t<meta name=\"robots\" content=\"index, follow\" />\r\n\t<meta name=\"language\" content=\"English\" />\r\n\t<meta name=\"revisit-after\" content=\"7 days\" />\r\n\r\n\t<!-- Open Graph / Facebook -->\r\n\t<meta property=\"og:type\" content=\"website\" />\r\n\t<meta property=\"og:url\" content=\"https://jadeangco-portfolio.onrender.com/\" />\r\n\t<meta property=\"og:title\" content=\"Jade Angco — Front-End Developer • SvelteKit & Vue\" />\r\n\t<meta property=\"og:description\"\r\n\t\tcontent=\"Front-End Developer building fast, responsive & visually polished interfaces. Specializing in SvelteKit, Vue.js, and modern web technologies.\" />\r\n\t<meta property=\"og:image\" content=\"https://jadeangco-portfolio.onrender.com/Jade.jpg\" />\r\n\t<meta property=\"og:site_name\" content=\"Jade Angco Portfolio\" />\r\n\t<meta property=\"og:locale\" content=\"en_US\" />\r\n\r\n\t<!-- Twitter Card -->\r\n\t<meta name=\"twitter:card\" content=\"summary_large_image\" />\r\n\t<meta name=\"twitter:url\" content=\"https://jadeangco-portfolio.onrender.com/\" />\r\n\t<meta name=\"twitter:title\" content=\"Jade Angco — Front-End Developer • SvelteKit & Vue\" />\r\n\t<meta name=\"twitter:description\"\r\n\t\tcontent=\"Front-End Developer building fast, responsive & visually polished interfaces. Specializing in SvelteKit, Vue.js, and modern web technologies.\" />\r\n\t<meta name=\"twitter:image\" content=\"https://jadeangco-portfolio.onrender.com/Jade.jpg\" />\r\n\r\n\t<!-- Additional SEO -->\r\n\t<link rel=\"canonical\" href=\"https://jadeangco-portfolio.onrender.com/\" />\r\n\t<meta name=\"theme-color\" content=\"#e60000\" />\r\n\r\n\t<!-- Geo Tags -->\r\n\t<meta name=\"geo.region\" content=\"PH-SUR\" />\r\n\t<meta name=\"geo.placename\" content=\"Bislig City, Surigao del Sur\" />\r\n\t<meta name=\"geo.position\" content=\"8.1957;126.3119\" />\r\n\t<meta name=\"ICBM\" content=\"8.1957, 126.3119\" />\r\n\r\n\t<script>\r\n\t\ttry {\r\n\t\t\tvar saved = localStorage.getItem(\"theme\");\r\n\t\t\tvar prefersLight = window.matchMedia(\"(prefers-color-scheme: light)\").matches;\r\n\t\t\tdocument.documentElement.setAttribute(\"data-theme\", saved || (prefersLight ? \"light\" : \"dark\"));\r\n\t\t} catch (e) {\r\n\t\t\tdocument.documentElement.setAttribute(\"data-theme\", \"dark\");\r\n\t\t}\r\n\t</script>\r\n\r\n\t" + head + "\r\n</head>\r\n\r\n<body data-sveltekit-preload-data=\"hover\">\r\n\t<div style=\"display: contents\">" + body + "</div>\r\n\t<script type=\"text/javascript\">\r\n\t    (function(c,l,a,r,i,t,y){\r\n\t        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\r\n\t        t=l.createElement(r);t.async=1;t.src=\"https://www.clarity.ms/tag/\"+i;\r\n\t        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\r\n\t    })(window, document, \"clarity\", \"script\", \"ycjnunp0xk\");\r\n\t</script>\r\n</body>\r\n</html>",
		error: ({ status, message }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<title>" + message + "</title>\r\n\r\n\t\t<style>\r\n\t\t\tbody {\r\n\t\t\t\t--bg: white;\r\n\t\t\t\t--fg: #222;\r\n\t\t\t\t--divider: #ccc;\r\n\t\t\t\tbackground: var(--bg);\r\n\t\t\t\tcolor: var(--fg);\r\n\t\t\t\tfont-family:\r\n\t\t\t\t\tsystem-ui,\r\n\t\t\t\t\t-apple-system,\r\n\t\t\t\t\tBlinkMacSystemFont,\r\n\t\t\t\t\t'Segoe UI',\r\n\t\t\t\t\tRoboto,\r\n\t\t\t\t\tOxygen,\r\n\t\t\t\t\tUbuntu,\r\n\t\t\t\t\tCantarell,\r\n\t\t\t\t\t'Open Sans',\r\n\t\t\t\t\t'Helvetica Neue',\r\n\t\t\t\t\tsans-serif;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\theight: 100vh;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t.error {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tmax-width: 32rem;\r\n\t\t\t\tmargin: 0 1rem;\r\n\t\t\t}\r\n\r\n\t\t\t.status {\r\n\t\t\t\tfont-weight: 200;\r\n\t\t\t\tfont-size: 3rem;\r\n\t\t\t\tline-height: 1;\r\n\t\t\t\tposition: relative;\r\n\t\t\t\ttop: -0.05rem;\r\n\t\t\t}\r\n\r\n\t\t\t.message {\r\n\t\t\t\tborder-left: 1px solid var(--divider);\r\n\t\t\t\tpadding: 0 0 0 1rem;\r\n\t\t\t\tmargin: 0 0 0 1rem;\r\n\t\t\t\tmin-height: 2.5rem;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\r\n\t\t\t.message h1 {\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tfont-size: 1em;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t@media (prefers-color-scheme: dark) {\r\n\t\t\t\tbody {\r\n\t\t\t\t\t--bg: #222;\r\n\t\t\t\t\t--fg: #ddd;\r\n\t\t\t\t\t--divider: #666;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"error\">\r\n\t\t\t<span class=\"status\">" + status + "</span>\r\n\t\t\t<div class=\"message\">\r\n\t\t\t\t<h1>" + message + "</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</body>\r\n</html>\r\n"
	},
	version_hash: "cifaac"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
