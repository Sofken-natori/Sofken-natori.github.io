import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { flatConfigs as importXConfigs } from 'eslint-plugin-import-x';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import { configs as tsConfigs } from 'typescript-eslint';
import type { ESLintConfigParts } from './types';

export const configs: ESLintConfigParts = compat => [
    {
        extends: [
            js.configs.recommended,
            ...tsConfigs.recommended
        ]
    },
    stylistic.configs.recommended,
    importXConfigs.recommended,
    importXConfigs.typescript,
    importXConfigs.react,
    react.configs.flat.recommended!,
    react.configs.flat['jsx-runtime']!,
    ...compat.extends('plugin:react-hooks/recommended'),
    jsxA11y.flatConfigs.strict
];
