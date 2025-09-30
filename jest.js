import jestPlugin from 'eslint-plugin-jest';
import importPlugin from "eslint-plugin-import";

export default [
    jestPlugin.configs['flat/recommended'],
    {
        plugins: {
            jest: jestPlugin,
            'import': importPlugin
        },
        rules: {
            // Allow devDependencies to be imported when in development mode
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
            'jest/padding-around-after-all-blocks': 'error',
            'jest/padding-around-after-each-blocks': 'error',
            'jest/padding-around-before-all-blocks': 'error',
            'jest/padding-around-before-each-blocks': 'error',
            'jest/padding-around-describe-blocks': 'error',
            'jest/padding-around-test-blocks': 'error'
        }
    }
];
