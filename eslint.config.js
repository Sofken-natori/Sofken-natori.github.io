"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var eslintrc_1 = require("@eslint/eslintrc");
var js_1 = require("@eslint/js");
var eslint_plugin_import_1 = require("eslint-plugin-import");
var globals_1 = require("globals");
var node_path_1 = require("node:path");
var node_url_1 = require("node:url");
// eslint-disable-next-line import/no-unresolved
var typescript_eslint_1 = require("typescript-eslint");
var __filename = (0, node_url_1.fileURLToPath)(import.meta.url);
var __dirname = (0, node_path_1.dirname)(__filename);
var compat = new eslintrc_1.FlatCompat({
    baseDirectory: __dirname
});
exports.default = typescript_eslint_1.default.config.apply(typescript_eslint_1.default, __spreadArray(__spreadArray(__spreadArray(__spreadArray([{
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
            globals: globals_1.default.node
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
            'src/**/*.ts'
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals_1.default.browser
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.app.json'
                }
            }
        }
    }], compat.plugins('react-hooks', 'react-refresh'), false), [{
        extends: __spreadArray([
            js_1.default.configs.recommended
        ], typescript_eslint_1.configs.recommended, true)
    },
    eslint_plugin_import_1.default.flatConfigs.recommended,
    eslint_plugin_import_1.default.flatConfigs.typescript,
    eslint_plugin_import_1.default.flatConfigs.react], false), compat.extends('plugin:react-hooks/recommended'), false), [{
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
    }], false));
