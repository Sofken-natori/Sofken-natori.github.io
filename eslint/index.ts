import { configs } from './configs';
import { ignores } from './ignores';
import { langOptions } from './langOptions';
import { plugins } from './plugins';
import { rules } from './rules';
import { settings } from './settings';
import { defineConfig } from 'eslint/config';
import type { FlatCompat } from '@eslint/eslintrc';
import type { Config } from 'eslint/config';
import type { ConfigWithExtends } from 'typescript-eslint';

export default function ESLintConfig(compat: FlatCompat, ...extraConfigs: ConfigWithExtends[]): Config[] {
    return defineConfig([
        ...ignores(compat),
        ...langOptions(compat),
        ...plugins(compat),
        ...settings(compat),
        ...configs(compat),
        ...rules(compat),
        ...extraConfigs
    ]);
}
