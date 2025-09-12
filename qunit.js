import qunitPlugin from 'eslint-plugin-qunit';

export default [
    qunitPlugin.configs.recommended,
    {
        plugins: { qunit: qunitPlugin },
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
