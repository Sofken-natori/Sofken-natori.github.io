import { copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Config } from '@react-router/dev/config';

export default {
    buildEnd: async ({ viteConfig }) => {
        if(!viteConfig.isProduction) {
            return;
        }
        const buildPath = viteConfig.build.outDir;
        await copyFile(
            join(buildPath, 'index.html'),
            join(buildPath, '404.html')
        );
    },
    future: {
        unstable_optimizeDeps: true
    },
    ssr: false
} as const satisfies Config;
