// import adapter from '@sveltejs/adapter-auto';
import adapter from 'svelte-adapter-github';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/darts-game'
		}
	}
};

export default config;
