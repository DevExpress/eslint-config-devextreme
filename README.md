# ESLint Configurations for the DevExtreme Source Code

This repository collects ESLint configurations that enforce the code style used by the DevExtreme development team. These configurations are based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and cover most frequently encountered cases.

> **Note**: Adding new configurations is possible but discouraged. Double-check that none of the existing configurations fits for your case before you add a new configuration.

> Legacy Airbnb presets are vendored inside this package (`airbnb-config-legacy`), so you no longer need to install `eslint-config-airbnb-base` or `eslint-config-airbnb-typescript`.

## Required packages
- [eslint: ^10.14.0](https://www.npmjs.com/package/eslint/v/10.14.0)

Each configuration has its own entry point, such as `eslint-config-devextreme/typescript`. Import only the configurations you use: an entry point loads only the plugins of its configuration.

## List of Configurations

  1. [TypeScript](#typescript)
  2. [JavaScript](#javascript)
  3. [Spell Check](#spell-check)
  4. [Jest Tests](#jest-tests)
  5. [QUnit Tests](#qunit-tests)
  6. [TestCafe Tests](#testcafe-tests)
  7. [React](#react)
  8. [Angular](#angular)
  9. [Vue](#vue)
  10. [jQuery](#jquery)
  11. [Stylelint](#stylelint)

## TypeScript

- **Usage**
    Add the following lines to your *eslint.config.mjs* file:

    ```javascript
    import typescript from 'eslint-config-devextreme/typescript';

    export default [
      ...typescript,
    ];
    ```

    The configuration includes rules that need type information. It reads *tsconfig.json* from the folder where you run ESLint.

- **Required packages**
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
  - [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint)
  - [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic)
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)

- **Extended plugins and configurations**
  - [plugin:@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs)

## JavaScript

- **Usage**
    Add the following lines to your *eslint.config.mjs* file:

    ```javascript
    import javascript from 'eslint-config-devextreme/javascript';

    export default [
      ...javascript,
    ];
    ```

- **Required packages**
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)

## Spell Check

Lists words that the spell check should ignore.

- **Usage**
    Add the following lines to your *eslint.config.mjs* file:

    ```javascript
    import spellCheck from 'eslint-config-devextreme/spell-check';

    export default [
      ...spellCheck,
    ];
    ```

- **Required packages**
  - [eslint-plugin-spellcheck](https://github.com/aotaduy/eslint-plugin-spellcheck)

## Jest Tests

- **Usage**
    Add the following lines to your *eslint.config.mjs* file:

    ```javascript
    import jest from 'eslint-config-devextreme/jest';

    export default [
      ...jest,
      {
        settings: {
          jest: {
            version: 29, // your Jest version
          },
        },
      },
    ];
    ```

- **Required packages**
  - [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)

- **Extended plugins**
  - [`jestPlugin.configs['flat/recommended']`](https://github.com/jest-community/eslint-plugin-jest#recommended)

## QUnit Tests

- **Usage**
    Add the following lines to your *eslint.config.mjs* file:

    ```javascript
    import qunit from 'eslint-config-devextreme/qunit';

    export default [
      ...qunit,
    ];
    ```

- **Required packages**
  - [eslint-plugin-qunit](https://github.com/platinumazure/eslint-plugin-qunit)

- **Extended plugins**
  - [`eslintPluginQunitRecommended.plugins.qunit`](https://github.com/platinumazure/eslint-plugin-qunit#recommended)

## TestCafe Tests

- **Usage**
    Add the following lines to your *eslint.config.mjs* file:

    ```javascript
    import testcafe from 'eslint-config-devextreme/testcafe';

    export default [
      ...testcafe,
    ];
    ```

- **Required packages**
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
  - [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic)

## React

- **Usage**
    Add the following lines to your *eslint.config.mjs* file:

    ```javascript
    import react from 'eslint-config-devextreme/react';

    export default [
      ...react,
      {
        settings: {
          react: {
            version: '18.2', // your React version
          },
        },
      },
      {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
          parserOptions: {
            project: './tsconfig.json',
            tsconfigRootDir: import.meta.dirname,
          },
        },
      },
    ];
    ```

    The rules for *.ts* and *.tsx* files need type information, so point `project` to your *tsconfig.json*. ESLint skips *.jsx* files that no configuration lists: if your project has them, add `{ files: ['**/*.jsx'] }` to the array.

- **Required packages**
  - [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
  - [eslint-plugin-react-perf](https://github.com/cvazac/eslint-plugin-react-perf)
  - [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
  - [eslint-plugin-no-only-tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests)
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
  - [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint)
  - [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic)

## Angular

- **Usage**
    Add the following lines to your *eslint.config.mjs* file:

    ```javascript
    import angular from 'eslint-config-devextreme/angular';

    export default [
      ...angular,
    ];
    ```

- **Required packages**
  - [eslint-plugin-no-only-tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests)
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)

## Vue

- **Usage**
    Add the following lines to your *eslint.config.mjs* file:

    ```javascript
    import vue from 'eslint-config-devextreme/vue';

    export default [
      ...vue,
    ];
    ```

- **Required packages**
  - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
  - [eslint-plugin-no-only-tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests)
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)

## jQuery

- **Usage**
    Add the following lines to your *eslint.config.mjs* file:

    ```javascript
    import jquery from 'eslint-config-devextreme/jquery';

    export default [
      ...jquery,
    ];
    ```

- **Required packages**
  - [eslint-plugin-no-only-tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests)

## Stylelint

A [Stylelint](https://stylelint.io/) configuration for CSS files.

- **Usage**
    Add the following lines to your *stylelint.config.mjs* file:

    ```javascript
    import stylelintConfig from 'eslint-config-devextreme/stylelintrc';

    export default stylelintConfig;
    ```

- **Required packages**
  - [stylelint: 15.11.0](https://www.npmjs.com/package/stylelint/v/15.11.0)
  - [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
