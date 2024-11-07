import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { flatConfigs as importFlatConfigs } from 'eslint-plugin-import';
import globals from 'globals';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import tsESLint, { configs as tsESLintConfigs } from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

export default tsESLint.config(
    {
        ignores: [
            'dist',
            'old'
        ]
    },
    {
        files: [
            '*.js',
            '*.ts'
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: globals.node
        }
    },
    {
        files: [
            '*.ts'
        ],
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.node.json'
                }
            }
        }
    },
    {
        files: [
            'src/**/*.ts',
            'src/**/*.tsx'
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.app.json'
                }
            }
        }
    },
    ...compat.plugins('react-hooks', 'react-refresh'),
    {
        extends: [
            js.configs.recommended,
            ...tsESLintConfigs.recommended
        ]
    },
    importFlatConfigs.recommended,
    importFlatConfigs.typescript,
    importFlatConfigs.react,
    ...compat.extends('plugin:react-hooks/recommended'),
    {
        rules: {
            'import/order': [
                'error',
                {
                    alphabetize: {
                        caseInsensitive: false,
                        order: 'asc',
                        orderImportKind: 'asc'
                    },
                    groups: [[
                        'builtin',
                        'external',
                        'index',
                        'internal',
                        'object',
                        'parent',
                        'sibling',
                        'type',
                        'unknown'
                    ]],
                    named: true,
                    'newlines-between': 'never',
                    warnOnUnassignedImports: true
                }
            ],
            'react-refresh/only-export-components': [
                'warn',
                {
                    allowConstantExport: true
                }
            ]
        }
    }
);
