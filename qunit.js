module.exports = {
    env: {
        qunit: true,
        browser: true
    },
    plugins: [
        'qunit'
    ],
    extends: [
        'plugin:qunit/recommended',
        'plugin:qunit/two'
    ],
    globals: {
        define: true,
        Promise: true,
        SystemJS: true,
        DevExpress: true,
        sinon: true
    },
    rules: {
        'qunit/no-arrow-tests': 'error',
        'qunit/no-commented-tests': 'error',
        'qunit/no-identical-names': 'warn',
        'qunit/no-global-module-test': 'off',
        'qunit/require-expect': 'off',
        'qunit/resolve-async': 'off'
    }
};
