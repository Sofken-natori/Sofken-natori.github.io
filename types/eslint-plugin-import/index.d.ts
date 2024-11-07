/* eslint-disable no-var */
// noinspection ES6ConvertVarToLetConst

import type { Linter, Rule } from 'eslint';

declare module 'eslint-plugin-import' {
    var rules: {
        'no-unresolved': Rule.RuleModule,
        'named': Rule.RuleModule,
        'default': Rule.RuleModule,
        'namespace': Rule.RuleModule,
        'no-namespace': Rule.RuleModule,
        'export': Rule.RuleModule,
        'no-mutable-exports': Rule.RuleModule,
        'extensions': Rule.RuleModule,
        'no-restricted-paths': Rule.RuleModule,
        'no-internal-modules': Rule.RuleModule,
        'group-exports': Rule.RuleModule,
        'no-relative-packages': Rule.RuleModule,
        'no-relative-parent-imports': Rule.RuleModule,
        'consistent-type-specifier-style': Rule.RuleModule,
        'no-self-import': Rule.RuleModule,
        'no-cycle': Rule.RuleModule,
        'no-named-default': Rule.RuleModule,
        'no-named-as-default': Rule.RuleModule,
        'no-named-as-default-member': Rule.RuleModule,
        'no-anonymous-default-export': Rule.RuleModule,
        'no-unused-modules': Rule.RuleModule,
        'no-commonjs': Rule.RuleModule,
        'no-amd': Rule.RuleModule,
        'no-duplicates': Rule.RuleModule,
        'first': Rule.RuleModule,
        'max-dependencies': Rule.RuleModule,
        'no-extraneous-dependencies': Rule.RuleModule,
        'no-absolute-paths': Rule.RuleModule,
        'no-nodejs-modules': Rule.RuleModule,
        'no-webpack-loader-syntax': Rule.RuleModule,
        'order',
        'newline-after-import': Rule.RuleModule,
        'prefer-default-export': Rule.RuleModule,
        'no-default-export': Rule.RuleModule,
        'no-named-export': Rule.RuleModule,
        'no-dynamic-require': Rule.RuleModule,
        'unambiguous': Rule.RuleModule,
        'no-unassigned-import': Rule.RuleModule,
        'no-useless-path-segments': Rule.RuleModule,
        'dynamic-import-chunkname': Rule.RuleModule,
        'no-import-module-exports': Rule.RuleModule,
        'no-empty-named-blocks': Rule.RuleModule,
        'exports-last': Rule.RuleModule,
        'no-deprecated': Rule.RuleModule,
        'imports-first': Rule.RuleModule
    };

    var configs: {
        'recommended': Linter.BaseConfig,
        'errors': Linter.BaseConfig,
        'warnings': Linter.BaseConfig,
        'stage-0': Linter.BaseConfig,
        'react': Linter.BaseConfig,
        'react-native': Linter.BaseConfig,
        'electron': Linter.BaseConfig,
        'typescript': Linter.BaseConfig
    };

    var flatConfigs: {
        'recommended': Linter.Config,
        'errors': Linter.Config,
        'warnings': Linter.Config,
        'react': Linter.Config,
        'react-native': Linter.Config,
        'electron': Linter.Config,
        'typescript': Linter.Config,
    };
}
