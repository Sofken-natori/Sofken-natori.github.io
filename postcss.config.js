'use strict';

import autoprefixerPlugin from 'autoprefixer';
import cssnanoPlugin from 'cssnano';
import importPlugin from 'postcss-import';
import stylelint from 'stylelint';
import tailwindcssPlugin from 'tailwindcss';

/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
        importPlugin({
            plugins: [
                stylelint
            ]
        }),
        tailwindcssPlugin,
        autoprefixerPlugin,
        process.env['NODE_ENV'] && cssnanoPlugin
    ],
    syntax: 'postcss-scss'
};

export default config;
