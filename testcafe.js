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
        // Tests can use any type of dependencies
        'import/no-extraneous-dependencies': 'off',

        // We should test event handlers that use modified params to work
        'no-param-reassign': ['error', { 'props': false }],

        // It's a common case for the TestCafe tests that does not affect the performance
        'no-await-in-loop': 'off'
    }
};
