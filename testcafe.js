import tseslint from "@typescript-eslint/eslint-plugin";
import stylistic from '@stylistic/eslint-plugin'

export default [
    {
         plugins: { 
            '@typescript-eslint': tseslint,
            '@stylistic': stylistic
        },
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
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/init-declarations': 'off',
        '@stylistic/no-unsafe-return': 'off',
        'no-restricted-globals': 'off',
        }
    }
];
