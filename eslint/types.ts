import type { FlatCompat } from '@eslint/eslintrc';
import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint';

export type ESLintConfigParts = (compat: FlatCompat) => InfiniteDepthConfigWithExtends[];
