'use strict';

import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'pdfjs': [
                        'pdfjs-dist/build/pdf.worker.min'
                    ],
                    'react': [
                        'react',
                        'react-dom'
                    ],
                    'react-pdf-viewer-core': [
                        '@react-pdf-viewer/core'
                    ],
                    'react-pdf-viewer-plugins': [
                        '@react-pdf-viewer/default-layout',
                        '@react-pdf-viewer/get-file',
                        '@react-pdf-viewer/toolbar'
                    ],
                    'react-router-dom': [
                        'react-router-dom'
                    ]
                }
            }
        }
    },
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
