import type { FlatCompat } from '@eslint/eslintrc';
import type { ConfigWithExtends } from 'typescript-eslint';

export type ESLintConfigParts = (compat: FlatCompat) => ConfigWithExtends[];
