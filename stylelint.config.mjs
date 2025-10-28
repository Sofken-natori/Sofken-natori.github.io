/** @type {import('stylelint').Config} */
const config = {
    extends: ['stylelint-config-standard'],
    plugins: [
        'stylelint-declaration-block-no-ignored-properties',
        'stylelint-order'
    ],
    rules: {
        'alpha-value-notation': 'number',
        'at-rule-no-deprecated': [
            true,
            {
                ignoreAtRules: ['apply']
            }
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'apply',
                    'config',
                    'custom-variant',
                    'layer',
                    'plugin',
                    'reference',
                    'responsive',
                    'screen',
                    'source',
                    'tailwind',
                    'theme',
                    'utility',
                    'variant',
                    'variants'
                ]
            }
        ],
        'color-hex-length': 'short',
        'function-no-unknown': [
            true,
            {
                ignoreFunctions: ['theme']
            }
        ],
        'length-zero-no-unit': true,
        'no-descending-specificity': false,
        'order/order': [
            'dollar-variables',
            'custom-properties',
            'declarations',
            'at-rules',
            'rules'
        ],
        'order/properties-alphabetical-order': true,
        'plugin/declaration-block-no-ignored-properties': true,
        'selector-pseudo-element-colon-notation': 'double',
        'shorthand-property-no-redundant-values': true
    }
};

export default config;
