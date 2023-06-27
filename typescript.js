module.exports = {
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base'
    ],
    rules: {
        'import/prefer-default-export': 'off',
        'import/named': 'error',
        'import/default': 'error',
        'import/no-duplicates': 'error',
        'no-restricted-globals': [
            'error',
            {
                'name': 'window',
                'message': 'Use the getWindow method instead.'
            }
        ],
        'no-undef': 'off',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/brace-style': 'error',
        '@typescript-eslint/class-literal-property-style': 'error',
        '@typescript-eslint/comma-spacing': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/indent': 'error',
        '@typescript-eslint/keyword-spacing': 'error',
        '@typescript-eslint/lines-between-class-members': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/naming-convention': 'error',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                'allowSingleExtends': true
            }
        ],
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extra-parens': 'error',
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/semi': 'error',
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/init-declarations': 'error',
        '@typescript-eslint/member-ordering': [
            'error',
            {
                'default': ['signature', 'field', 'constructor', 'method']
            }
        ],
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/typedef': 'error',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/require-array-sort-compare': [
            'error',
            {
                'ignoreStringArrays': true
            }
        ],
        '@typescript-eslint/restrict-plus-operands': [
            'error',
            {
                'checkCompoundAssignments': true
            }
        ],
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
    }
};
