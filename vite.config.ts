'use strict';

import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    css: {
        devSourcemap: true
    },
    plugins: [
        react()
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname)
        }
    }
});
