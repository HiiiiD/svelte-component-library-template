const sveltePreprocess = require('svelte-preprocess');
const path = require('path');

module.exports = {
    stories: [
        '../src/lib/**/*.stories.mdx',
        '../src/lib/**/*.stories.@(js|jsx|ts|tsx|svelte)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-svelte-csf',
    ],
    framework: '@storybook/svelte',
    webpackFinal: async (config, { configType }) => {
        let j;
        // Find svelteloader from the webpack config
        const svelteloader = config.module.rules.find((r, i) => {
            if (r.loader && r.loader.includes('svelte-loader')) {
                j = i;
                return true;
            }
        });

        config.module.rules[j] = {
            ...svelteloader,
            options: {
                ...svelteloader.options,
                preprocess: sveltePreprocess(),
            },
        };

        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
                {
                    loader: require.resolve('sass-resources-loader'),
                    options: {
                        //Add global .scss styles
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        });

        return config;
    },
};
