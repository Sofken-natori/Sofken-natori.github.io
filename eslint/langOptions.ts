import globals from 'globals';
import type { ESLintConfigParts } from './types';

export const langOptions: ESLintConfigParts = _ => [
    {
        files: [
            '*.{js,ts}'
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: globals.node,
            sourceType: 'module'
        }
    },
    {
        files: [
            'app/**/*.{js,jsx,ts,tsx}',
            'functions/[[path]].ts'
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.es2025
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            sourceType: 'module'
        }
    }
];
