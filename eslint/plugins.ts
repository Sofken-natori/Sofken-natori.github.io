import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import type { ESLintConfigParts } from './types';

export const plugins: ESLintConfigParts = compat => [
    {
        plugins: {
            perfectionist,
            react
        }
    },
    ...compat.plugins('named-import-spacing', 'react-hooks')
];
