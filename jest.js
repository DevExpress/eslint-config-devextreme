module.exports = {
    env: {
        jest: true,
        node: true
    },
    plugins: [
        'jest',
        'jest-formatting'
    ],
    extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
        'devextreme/typescript',
        'devextreme/spell-check'
    ],
    rules: {
        // Allow devDependencies to be imported when in development mode
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

        // Disable props validation for temporary JSX components created during the tests 
        'react/prop-types': ['error', { skipUndeclared: true }],

        // Allow the use of props spreading in the temporary JSX components
        'react/jsx-props-no-spreading': 'off',

        // Allow defining the widget's `accessKey` attribute
        'jsx-a11y/no-access-key': 'off',

        // Allow the use `expect` inside of 'each.test' block
        'jest/no-standalone-expect': [ 'error', { 'additionalTestBlockFunctions': ['each.test'] } ]
    }
};
