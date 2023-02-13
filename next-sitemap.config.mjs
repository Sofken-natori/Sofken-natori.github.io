'use strict';

import { config } from 'dotenv';

config();

/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
    autoLastmod: true,
    changefreq: 'daily',
    exclude: [],
    generateIndexSitemap: true,
    generateRobotsTxt: true,
    outDir: './out',
    priority: 0.7,
    robotsTxtOptions: {
        additionalSitemaps: [],
        includeNonIndexSitemaps: false,
        policies: [
            {
                allow: '/',
                userAgent: '*'
            },
            {
                disallow: '/4*',
                userAgent: '*'
            },
            {
                disallow: '/5*',
                userAgent: '*'
            }
        ]
    },
    siteUrl: 'https://sofken-natori.github.io',
    sitemapBaseFileName: 'sitemap',
    sitemapSize: 5000
};

export default nextSitemapConfig;
