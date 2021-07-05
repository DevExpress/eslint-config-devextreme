# ESLint Configurations for the DevExtreme Source Code

This repository collects ESLint configurations that enforce the code style used by the DevExtreme development team. These configurations are based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and cover most frequently encountered cases.

> **Note**: Adding new configurations is possible but discouraged. Double-check that none of the existing configurations fits for your case before you add a new configuration.

## List of Configurations

  1. [TypeScript](#typescript)
  2. [JavaScript](#javascript)
  3. [Spell Check](#spell-check)
  4. [Renovation Declarations](#renovation-declarations)
  5. [Jest Tests](#jest-tests)
  6. [QUnit Tests](#qunit-tests)
  7. [TestCafe Tests](#testcafe-tests)

## TypeScript

- **Usage**
    Add the following line to your *.eslintrc* file:

    ```javascript
    'extends': ['devextreme/typescript']
    ```

- **Required plugins**
  - [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
  
- **Extended plugins and configurations**
  - [`plugin:@typescript-eslint/recommended`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs)
  - [`airbnb-typescript`](https://github.com/iamturns/eslint-config-airbnb-typescript)

## JavaScript

- **Usage**
    Add the following line to your *.eslintrc* file:

    ```javascript
    'extends': ['devextreme/javascript']
    ```
  
- **Extended plugins and configurations**
  - [`airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
  
## Spell Check

Lists words that the spell check should ignore.

- **Usage**
    Add the following line to your *.eslintrc* file:

    ```javascript
    "extends": ["devextreme/spell-check"]
    ```

- **Required plugins**
  - [spellcheck](https://github.com/aotaduy/eslint-plugin-spellcheck)

## Renovation Declarations

- **Usage**
    Add the following line to your *.eslintrc* file:

    ```javascript
    'extends': ['devextreme/renovation-declarations']
    ```

- **Overrides**

  - Allow devDependencies to be imported when in development mode:

    ```javascript
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
    ```

  - Allow two classes (component class and props class) in one file:
  
    ```javascript
    'max-classes-per-file': ['error', 2]
    ```

  - Disable React dependency validation. Declarations do not require this dependency, since they are not proper React components.
  
    ```javascript
    'react/react-in-jsx-scope': ['off']
    ```

  - Allow function calls in the ternary operator.
  
    ```javascript
     '@typescript-eslint/no-unused-expressions': ['error', { 'allowShortCircuit': true, ;'allowTernary': true }]
    ```

## Jest Tests

- **Usage**
    Add the following line to your *.eslintrc* file:

    ```javascript
    'extends': ['devextreme/jest']
    ```

- **Environment**
  - `node` (Node.js global variables and scope)
  - `jest` (Jest global variables)
  
- **Required plugins**
  - [jest](https://github.com/jest-community/eslint-plugin-jest)
  - [jest-formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
  
- **Extended plugins**
  - [`plugin:jest/recommended`](https://github.com/jest-community/eslint-plugin-jest#recommended)
  - `plugin:jest-formatting/recommended`
  
- **Overrides**

  - Allow the use of devDependencies in the tests:
  
    ```javascript
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
    ```

  - Disable props validation for temporary JSX components created during the tests:
  
    ```javascript
    'react/prop-types': ['error', { skipUndeclared: true }]
    ```

  - Allow the use of props spreading in the temporary JSX components:
  
    ```javascript
    'react/jsx-props-no-spreading': 'off'
    ```

  - Allow defining the widget's `accessKey` attribute:
  
    ```javascript
    'jsx-a11y/no-access-key': 'off'
    ```

  - ```javascript
    '@typescript-eslint/explicit-function-return-type': 'off'
    ```

  - ```javascript
    '@typescript-eslint/no-explicit-any': 'off'
    ```

  - ```javascript
    '@typescript-eslint/no-magic-numbers': 'off'
    ```

  - ```javascript
    '@typescript-eslint/no-unsafe-return': 'off'
    ```

## QUnit Tests

- **Usage**
    Add the following line to your *.eslintrc* file:

    ```javascript
    'extends': ['devextreme/qunit']
    ```

- **Environment**
  - `qunit` (QUnit global variables)
  - `browser` (Browser global variables)
  
- **Required plugins**
  - [qunit](https://github.com/platinumazure/eslint-plugin-qunit)

- **Extended plugins**
  - [`plugin:qunit/recommended`](https://github.com/platinumazure/eslint-plugin-qunit#recommended)
  - [`plugin:qunit/two`](https://github.com/platinumazure/eslint-plugin-qunit#two)
  
- **Overrides**
  
    ```javascript
    'qunit/no-arrow-tests': 'error',
    'qunit/no-commented-tests': 'error',
    'qunit/no-identical-names': 'warn',
    'qunit/no-global-module-test': 'off',
    'qunit/require-expect': 'off',
    'qunit/resolve-async': 'off'
    ```

## TestCafe Tests

- **Usage**
    Add the following line to your *.eslintrc* file:

    ```javascript
    'extends': ['devextreme/testcafe']
    ```

- **Overrides**

  - Allow using any types of dependencies:

    ```javascript
    'import/no-extraneous-dependencies': 'off'
    ```

  - Allow modifying parameters in event handlers to test these use cases:
  
    ```javascript
    'no-param-reassign': ['error', { 'props': false }],
    ```

  - Allow `await` inside of loops. This is a common case for TestCafe tests.
  
    ```javascript
    'no-await-in-loop': 'off'
    ```

  - ```javascript
    '@typescript-eslint/no-explicit-any': 'off'
    ```

  - ```javascript
    '@typescript-eslint/explicit-function-return-type': 'off'
    ```

  - ```javascript
    '@typescript-eslint/promise-function-async': 'off'
    ```

  - ```javascript
    '@typescript-eslint/no-magic-numbers': 'off'
    ```

  - ```javascript
    '@typescript-eslint/no-unsafe-return': 'off'
    ```

- **Environment**
  - `node` (Node.js global variables and scope)
  - `browser` (Browser global variables)
  - `jquery` (jQuery global variables)

- **Additional global variables**
  - `test`
  - `fixture`  
  