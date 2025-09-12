import jestPlugin from 'eslint-plugin-jest';
import jestFormatting from 'eslint-plugin-jest-formatting';

export default [
    jestPlugin.configs.recommended,
    jestFormatting.configs.recommended,
    {
        plugins: {
            jest: jestPlugin,
            'jest-formatting': jestFormatting
        },
        rules: {
            // Allow devDependencies to be imported when in development mode
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        }
    }
];
