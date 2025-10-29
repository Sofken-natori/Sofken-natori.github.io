import type { ESLintConfigParts } from './types';

export const ignores: ESLintConfigParts = _ => [
    {
        ignores: [
            '!**/.{client,server}'
        ]
    }
];
