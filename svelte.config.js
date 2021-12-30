import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		paths:{
			base:"/testkit/build",
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// fallback: "index.html",
			precompress: true,
		}),
		appDir: 'app_',
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
