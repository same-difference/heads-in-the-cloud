import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare';

const config = {
	preprocess: vitePreprocess(),
	kit: { adapter({
		config: undefined,
		platformProxy: {
			configPath: undefined,
			environment: undefined,
			persist: undefined
		},
		fallback: 'plaintext',
		routes: {
			include: ['/*'],
			exclude: ['<all>']
		}
	}) }
};

export default config;
