// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
		}),
		prerender: {
			default: true
		},
		paths: {
			base: dev ? "" : "/darts-game"
		},
		appDir: 'internal',
		trailingSlash: "always",
	}
};

export default config;
