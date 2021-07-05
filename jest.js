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
        'plugin:jest-formatting/recommended'
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

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
    }
};
