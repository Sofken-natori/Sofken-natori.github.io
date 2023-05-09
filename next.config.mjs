'use strict';

import { join } from 'path';

const optimizedImagesConfig = {
    optimizeImagesInDev: true,
    removeOriginalExtension: true,
    responsive: {
        adapter: import('responsive-loader/sharp.js'),
        sizes: [
            640,
            960,
            1200,
            1800
        ]
    }
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env['ROOT'],
    compress: true,
    eslint: {
        dirs: [
            'app'
        ]
    },
    experimental: {
        appDir: true,
        esmExternals: true,
        optimizeCss: true,
    },
    generateEtags: false,
    images: {
        disableStaticImages: true
    },
    output: 'export',
    reactStrictMode: true,
    sassOptions: {
        includePaths: [
            join(process.cwd(), 'styles')
        ]
    },
    swcMinify: true,
    trailingSlash: true,
    webpack: config => {
        config.module.rules.push({
            test: /\.(eot|otf|ttf|woff|woff2)$/,
            use: 'raw-loader'
        });
        config.module.rules.push({
            loader: 'node-loader',
            test: /\.node$/
        });
        config.module.rules.unshift({
            test: /pdf\.worker\.(min\.)?js$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[contenthash].[ext]',
                        outputPath: 'static/worker',
                        publicPath: '/_next/static/worker'
                    }
                }
            ]
        });
        return config;
    }
};

export default nextConfig;
