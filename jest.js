import jestPlugin from 'eslint-plugin-jest';
import jestFormatting from 'eslint-plugin-jest-formatting';
import importPlugin from "eslint-plugin-import";

export default [
    jestPlugin.configs['flat/recommended'],
    {
        files: jestFormatting.configs.recommended.overrides[0].files,
        rules: jestFormatting.configs.recommended.overrides[0].rules,
        plugins: {
            "jest-formatting": jestFormatting,
        },
    },
    {
        plugins: {
            jest: jestPlugin,
            'jest-formatting': jestFormatting,
            'import': importPlugin
        },
        rules: {
            // Allow devDependencies to be imported when in development mode
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        }
    }
];
