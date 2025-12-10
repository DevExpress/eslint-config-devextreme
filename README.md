# ESLint Configurations for the DevExtreme Source Code

This repository collects ESLint configurations that enforce the code style used by the DevExtreme development team. These configurations are based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and cover most frequently encountered cases.

> **Note**: Adding new configurations is possible but discouraged. Double-check that none of the existing configurations fits for your case before you add a new configuration.

> Legacy Airbnb presets are vendored inside this package (`airbnb-config-legacy`), so you no longer need to install `eslint-config-airbnb-base` or `eslint-config-airbnb-typescript`.

## Required packages
- [eslint: 9.18.0](https://www.npmjs.com/package/eslint/v/9.18.0)

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

## TypeScript

- **Usage**
    Add the following line to your *eslint.config.mjs* file:

    ```javascript
    import { typescript } from 'eslint-config-devextreme';
    export default [
      ...typescript,
    ]
    ```

- **Required packages**
  - [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
  - [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic)
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)

  
- **Extended plugins and configurations**
  - [plugin:@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs)

## JavaScript

- **Usage**
    Add the following line to your *eslint.config.mjs* file:

    ```javascript
    import { javascript } from 'eslint-config-devextreme';
    export default [
      ...javascript,
    ]
    ```
  
- **Required packages**
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
  
## Spell Check

Lists words that the spell check should ignore.

- **Usage**
    Add the following line to your *eslint.config.mjs* file:

    ```javascript
    import { spellCheck } from 'eslint-config-devextreme';
    export default [
      ...spellCheck,
    ]
    ```

- **Required packages**
  - [spellcheck](https://github.com/aotaduy/eslint-plugin-spellcheck)

## Jest Tests

- **Usage**
    Add the following line to your *eslint.config.mjs* file:

    ```javascript
    import { jest } from 'eslint-config-devextreme';
    export default [
        ...jest.map(config => ({
          ...config,
          settings: {
            jest: {
              version: 'your jest version'
            }
          }
        })),
    ]
    ```
  
- **Required packages**
  - [jest](https://github.com/jest-community/eslint-plugin-jest)
  - [jest-formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
  
- **Extended plugins**
  - [`jestPlugin.configs['flat/recommended']`](https://github.com/jest-community/eslint-plugin-jest#recommended)
  - `jestFormatting.configs['flat/recommended']`

## QUnit Tests

- **Usage**
    Add the following line to your *eslint.config.mjs* file:

    ```javascript
    import { qunit } from 'eslint-config-devextreme';
    export default [
      ...qunit,
    ]
    ```
  
- **Required packages**
  - [qunit](https://github.com/platinumazure/eslint-plugin-qunit)

- **Extended plugins**
  - [`eslintPluginQunitRecommended.plugins.qunit`](https://github.com/platinumazure/eslint-plugin-qunit#recommended)

## TestCafe Tests

- **Usage**
    Add the following line to your *eslint.config.mjs* file:

    ```javascript
    import { testcafe } from 'eslint-config-devextreme';
    export default [
      ...testcafe,
    ]
    ``` 

## React

- **Usage**
    Add the following line to your *eslint.config.mjs* file:

    ```javascript
    import { react } from 'eslint-config-devextreme';
    export default [
      ...react,
      settings: {
        react: {
          version: 'detect',
        },
      },
    ]
    ``` 
- **Required packages**
  - [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
  - [eslint-plugin-react-perf](http://github.com/cvazac/eslint-plugin-react-perf)
  - [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic)

## Angular

- **Usage**
    Add the following line to your *eslint.config.mjs* file:

    ```javascript
    import angular from 'eslint-config-devextreme';
    export default [
      ...angular,
    ]
    ```
- **Required packages**
  - [eslint-plugin-no-only-tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests)

## Vue

- **Usage**
    Add the following line to your *eslint.config.mjs* file:

    ```javascript
    import vue from 'eslint-config-devextreme';
    export default [
      ...vue,
    ]
    ```
- **Required packages**
  - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)