import testcafePlugin from 'eslint-plugin-testcafe';
import { fixLegacyConfigs } from "./utils/index.js";

export default [
    ...fixLegacyConfigs([testcafePlugin.configs.recommended]),
    {
        plugins: { testcafe: testcafePlugin },
        languageOptions: {
            globals: {
                test: 'readonly',
                fixture: 'readonly',
            },
        },
        rules: {
        // Allow using any types of dependencies
        'import/no-extraneous-dependencies': 'off',

        // Allow modifying parameters in event handlers to test these use cases
        'no-param-reassign': ['error', { 'props': false }],

        // Allow `await` inside of loops. This is a common case for TestCafe tests
        'no-await-in-loop': 'off',

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        // '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/init-declarations': 'off',
        'no-restricted-globals': 'off',
        }
    }
];
