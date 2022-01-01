import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import mm from 'micromatch';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),
    kit: {
        adapter: adapter(),
        target: '#svelte',
        package: {
            exports: (filepath) => mm.isMatch(filepath, ['!**/_*', '!**/internal/**']),
            //Exclude stories
            files: mm.matcher('!**/*.stories.svelte')
        }
    },
};

export default config;
