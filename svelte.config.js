// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: "index.html"
		}),
		paths: {
			base: dev ? "" : "/darts-game"
		}
	}
};

export default config;
