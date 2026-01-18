import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to missing favicon
				if (path === '/favicon.png') return;

				// otherwise fail the build
				throw new Error(message);
			}
		}
	},
	preprocess: vitePreprocess()
};

export default config;
