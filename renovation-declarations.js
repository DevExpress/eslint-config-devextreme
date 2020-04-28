module.exports = {
    extends: [
        'devextreme/typescript'
    ],
    rules: {
        // Allow devDependencies to be imported when in development mode
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

        // Allow two classes (component class and props class) in one file
        'max-classes-per-file': ['error', 2],

        // Disable React dependency validation. Declarations do not require this dependency, 
        // since they are not proper React components
        'react/react-in-jsx-scope': ['off']
    }
};
