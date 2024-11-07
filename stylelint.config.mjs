'use strict';

/** @type {import('stylelint').Config} */
const config = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss'
        // 'stylelint-a11y/recommended'
    ],
    plugins: [
        // 'stylelint-a11y',
        'stylelint-order',
        'stylelint-declaration-block-no-ignored-properties'
    ],
    rules: {
        // 'a11y/font-size-is-readable': true,
        // 'a11y/no-obsolete-attribute': true,
        // 'a11y/no-obsolete-element': true,
        'alpha-value-notation': 'number',
        'color-hex-length': 'short',
        'length-zero-no-unit': true,
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
