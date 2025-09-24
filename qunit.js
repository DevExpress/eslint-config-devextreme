import eslintPluginQunitRecommended from 'eslint-plugin-qunit/configs/recommended';
export default [
    eslintPluginQunitRecommended,
    {
        plugins: { qunit: eslintPluginQunitRecommended.plugins.qunit },
        languageOptions: {
            globals: {
                define: 'readonly',
                Promise: 'readonly',
                SystemJS: 'readonly',
                DevExpress: 'readonly',
                sinon: 'readonly',
            },
        },
        rules: {
            'qunit/no-arrow-tests': 'error',
            'qunit/no-commented-tests': 'error',
            'qunit/no-identical-names': 'warn',
            'qunit/no-global-module-test': 'off',
            'qunit/require-expect': 'off',
            'qunit/resolve-async': 'off'
        }
    }
];
