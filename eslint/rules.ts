import type { ESLintConfigParts } from './types';

const asciiPrintable
    = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
const perfectionistRuleOption = {
    alphabet: asciiPrintable,
    ignoreCase: false,
    order: 'asc',
    type: 'custom'
};

export const rules: ESLintConfigParts = _ => [
    {
        rules: {
            '@stylistic/array-bracket-newline': ['error',
                'consistent'],
            '@stylistic/array-element-newline': [
                'error',
                {
                    ArrayExpression: 'always',
                    ArrayPattern: 'never'
                }
            ],
            '@stylistic/arrow-parens': ['error',
                'as-needed'],
            '@stylistic/brace-style': ['error',
                '1tbs'],
            '@stylistic/comma-dangle': ['error',
                'never'],
            '@stylistic/dot-location': ['error',
                'property'],
            '@stylistic/generator-star-spacing': ['error',
                'after'],
            '@stylistic/indent': ['error',
                4],
            '@stylistic/jsx-closing-bracket-location': [
                'error',
                'line-aligned'
            ],
            '@stylistic/jsx-closing-tag-location': ['error',
                'line-aligned'],
            '@stylistic/jsx-curly-brace-presence': [
                'error',
                {
                    children: 'never',
                    propElementValues: 'always',
                    props: 'never'
                }
            ],
            '@stylistic/jsx-curly-newline': ['error',
                'never'],
            '@stylistic/jsx-curly-spacing': [
                'error',
                {
                    children: true,
                    when: 'never'
                }
            ],
            '@stylistic/jsx-first-prop-new-line': ['error',
                'multiline'],
            '@stylistic/jsx-function-call-newline': ['error',
                'multiline'],
            '@stylistic/jsx-indent-props': ['error',
                4],
            '@stylistic/jsx-max-props-per-line': 'error',
            '@stylistic/jsx-newline': [
                'error',
                {
                    prevent: true
                }
            ],
            '@stylistic/jsx-one-expression-per-line': 'error',
            '@stylistic/jsx-pascal-case': 'error',
            '@stylistic/jsx-self-closing-comp': [
                'error',
                {
                    component: true,
                    html: true
                }
            ],
            '@stylistic/jsx-sort-props': 'off',
            '@stylistic/jsx-tag-spacing': [
                'error',
                {
                    afterOpening: 'never',
                    beforeClosing: 'never',
                    beforeSelfClosing: 'always',
                    closingSlash: 'never'
                }
            ],
            '@stylistic/jsx-wrap-multilines': [
                'error',
                {
                    arrow: 'parens-new-line',
                    assignment: 'parens-new-line',
                    condition: 'parens-new-line',
                    declaration: 'parens-new-line',
                    logical: 'parens-new-line',
                    prop: 'parens-new-line',
                    propertyValue: 'parens-new-line',
                    return: 'parens-new-line'
                }
            ],
            '@stylistic/keyword-spacing': [
                'error',
                {
                    after: true,
                    before: true,
                    overrides: {
                        catch: {
                            after: false
                        },
                        for: {
                            after: false
                        },
                        if: {
                            after: false
                        },
                        switch: {
                            after: false
                        }
                    }
                }
            ],
            '@stylistic/lines-between-class-members': 'error',
            '@stylistic/max-statements-per-line': 'error',
            '@stylistic/member-delimiter-style': [
                'error',
                {
                    multiline: {
                        delimiter: 'semi',
                        requireLast: true
                    },
                    overrides: {
                        typeLiteral: {
                            multiline: {
                                delimiter: 'comma',
                                requireLast: false
                            },
                            singleline: {
                                delimiter: 'comma',
                                requireLast: false
                            }
                        }
                    },
                    singleline: {
                        delimiter: 'semi',
                        requireLast: true
                    }
                }
            ],
            '@stylistic/multiline-comment-style': ['error',
                'separate-lines'],
            '@stylistic/multiline-ternary': ['error',
                'never'],
            '@stylistic/no-extra-parens': 'error',
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/no-floating-decimal': 'error',
            '@stylistic/no-mixed-spaces-and-tabs': 'error',
            '@stylistic/no-multi-spaces': 'error',
            '@stylistic/no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                    maxBOF: 0,
                    maxEOF: 1
                }
            ],
            '@stylistic/no-tabs': 'error',
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/no-whitespace-before-property': 'error',
            '@stylistic/object-curly-newline': [
                'error',
                {
                    ExportDeclaration: {
                        minProperties: 2
                    },
                    ImportDeclaration: {
                        minProperties: 2
                    },
                    ObjectExpression: {
                        minProperties: 1
                    },
                    ObjectPattern: {
                        minProperties: 2
                    }
                }
            ],
            '@stylistic/object-curly-spacing': [
                'error',
                'always',
                {
                    arraysInObjects: true,
                    objectsInObjects: true
                }
            ],
            '@stylistic/object-property-newline': 'error',
            '@stylistic/padded-blocks': ['error',
                'never'],
            '@stylistic/quote-props': ['error',
                'as-needed'],
            '@stylistic/quotes': [
                'error',
                'single',
                {
                    avoidEscape: true
                }
            ],
            '@stylistic/semi': ['error',
                'always'],
            '@stylistic/space-before-function-paren': [
                'error',
                {
                    anonymous: 'never',
                    asyncArrow: 'always',
                    catch: 'never',
                    named: 'never'
                }
            ],
            '@stylistic/wrap-iife': ['error',
                'inside'],
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    disallowTypeAnnotations: true,
                    fixStyle: 'separate-type-imports',
                    prefer: 'type-imports'
                }
            ],
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                    varsIgnorePattern: '^_'
                }
            ],
            'import-x/consistent-type-specifier-style': [
                'error',
                'prefer-top-level'
            ],
            'import-x/first': 'error',
            'import-x/newline-after-import': [
                'error',
                {
                    considerComments: true,
                    count: 1,
                    exactCount: true
                }
            ],
            'import-x/no-absolute-path': 'error',
            'import-x/no-amd': 'error',
            'import-x/no-commonjs': 'error',
            'import-x/no-cycle': [
                'error',
                {
                    ignoreExternal: true
                }
            ],
            'import-x/no-deprecated': 'error',
            'import-x/no-dynamic-require': 'error',
            'import-x/no-empty-named-blocks': 'error',
            'import-x/no-mutable-exports': 'error',
            'import-x/no-namespace': 'error',
            'import-x/no-self-import': 'error',
            'import-x/no-useless-path-segments': [
                'error',
                {
                    noUselessIndex: true
                }
            ],
            'import-x/order': [
                'error',
                {
                    alphabetize: {
                        caseInsensitive: false,
                        order: 'asc',
                        orderImportKind: 'asc'
                    },
                    groups: [
                        [
                            'builtin',
                            'external',
                            'index',
                            'internal',
                            'object',
                            'parent',
                            'sibling',
                            'unknown'
                        ],
                        'type'
                    ],
                    'newlines-between': 'never',
                    warnOnUnassignedImports: true
                }
            ],
            'named-import-spacing/named-import-spacing': 'error',
            'perfectionist/sort-array-includes': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-classes': ['error',
                perfectionistRuleOption],
            'perfectionist/sort-decorators': ['error',
                perfectionistRuleOption],
            'perfectionist/sort-enums': ['error',
                perfectionistRuleOption],
            'perfectionist/sort-exports': ['error',
                perfectionistRuleOption],
            'perfectionist/sort-heritage-clauses': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-imports': 'off',
            'perfectionist/sort-interfaces': ['error',
                perfectionistRuleOption],
            'perfectionist/sort-intersection-types': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-jsx-props': ['error',
                perfectionistRuleOption],
            'perfectionist/sort-maps': ['error',
                perfectionistRuleOption],
            'perfectionist/sort-modules': 'off',
            'perfectionist/sort-named-exports': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-named-imports': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-object-types': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-objects': ['error',
                perfectionistRuleOption],
            'perfectionist/sort-sets': ['error',
                perfectionistRuleOption],
            'perfectionist/sort-switch-case': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-union-types': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-variable-declarations': 'off'
        }
    }
];
