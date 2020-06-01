module.exports = {
    extends: [
        'devextreme/typescript',
        'devextreme/spell-check'
    ],
    env: {
        node: true,
        browser: true,
        jquery: true
    },
    globals: {
        test: true,
        fixture: true
    }
};
