import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
    adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',

    // Possible solution to regenerator runtime issue
    // https://stackoverflow.com/questions/70097108/sveltekit-could-not-resolve-dependency-even-though-its-external
    // vite: {
    //   ssr: {
    //     // noExternal: ['@stacks/connect', '@stacks/profile', '@stacks/storage']
    //     // noExternal: ['regenerator-runtime', '@stacks/connect', '@stacks/profile', '@stacks/storage']
    //     // external: ['@stacks/connect', '@stacks/profile', '@stacks/storage']
    //     // external: ['regenerator-runtime', '@stacks/connect', '@stacks/profile', '@stacks/storage']
    //   },
    //   optimizeDeps: {
    //     // include: ['@stacks/connect', '@stacks/profile', '@stacks/storage']
    //     // include: ['regenerator-runtime', '@stacks/connect', '@stacks/profile', '@stacks/storage']
    //     // exclude: ['@stacks/connect', '@stacks/profile', '@stacks/storage']
    //     // exclude: ['regenerator-runtime', '@stacks/connect', '@stacks/profile', '@stacks/storage']
    //     // exclude: ['regenerator-runtime']
    //   }
    // },
	},

	preprocess: [preprocess({})]
};

export default config;
