module.exports = {
    extends: [
        'devextreme/typescript',
        'devextreme/spell-check'
    ],
    env: {
        node: true,
        browser: true,
        jquery: true
    },
    globals: {
        test: true,
        fixture: true
    },
    rules: {
        // Allow using any types of dependencies
        'import/no-extraneous-dependencies': 'off',

        // Allow modifying parameters in event handlers to test these use cases
        'no-param-reassign': ['error', { 'props': false }],

        // Allow `await` inside of loops. This is a common case for TestCafe tests
        'no-await-in-loop': 'off',
        
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    }
};
