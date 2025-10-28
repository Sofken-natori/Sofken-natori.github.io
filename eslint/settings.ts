import type { ESLintConfigParts } from './types';

export const settings: ESLintConfigParts = _ => [
    {
        files: ['*.{ts,tsx}'],
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json'
                }
            }
        }
    },
    {
        files: [
            'app/**/*.{jsx,tsx}'
        ],
        settings: {
            formComponents: [
                'Form'
            ],
            linkComponents: [
                {
                    linkAttribute: 'to',
                    name: 'Link'
                },
                {
                    linkAttribute: 'to',
                    name: 'NavLink'
                }
            ],
            react: {
                version: 'detect'
            }
        }
    }
];
