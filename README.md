<div align="center">
    <h1>cypress-layout-inspector</h1>
    <img width="80px" height="80px" alt="detective" src="https://raw.githubusercontent.com/msmps/cypress-layout-inspector/master/media/detective.png" />
</div>

<hr />

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![Semantic Release][semantic-badge]][semantic]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Assertions](#assertions)
  - [Alignment](#alignment)
  - [Dimensions](#dimensions)
  - [Positioning](#positioning)
  - [Styling](#styling)
- [Contributors ✨](#contributors-)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node] and should be installed as one of your project's `devDependencies`:

```
npm install --save-dev cypress-layout-inspector
```

This has been tested thoroughly with the [Cypress.io][cypress-io] E2E test runner **v3.7.0+**

## Usage

`cypress-layout-inspector` extends the `chai` assertion library.

Add this line to your project's `cypress/support/commands.js`:

```javascript
import 'cypress-layout-inspector/add-support';
```

You can now use all of `cypress-layout-inspector`'s assertions.

To show some examples (from [cypress/integration/position.spec.js](cypress/integration/position.spec.js)):

```javascript
it('block-2 should be positioned right of block-1', () => {
    cy.get('.block-2').should('be.rightOf', '.block-1', 50);
});

it('block-3 should be positioned left of block-4', () => {
    cy.get('.block-3').should('be.leftOf', '.block-4', 50);
});
```

## Configuration

To configure `cypress-layout-inspector`, use the following custom command:

```javascript
cy.configureLayoutInspector(config);
```

`cypress-layout-inspector` uses `getBoundingClientRect()` behind the scenes which returns size equal to an elements (width/height + padding + border-width) in the case that the standard box model is being used, or (width/height) only if box-sizing: border-box has been set on it.

If you would like to use the standard box model but exclude padding in the total you can achieve this by doing the following:

```javascript
before(() => {
    cy.configureLayoutInspector({
        excludePadding: true,
    });
});
```

## Assertions

### Alignment

#### `horizontallyAligned(element[, edge])`

| argument    | type   | options                              | default |
| ----------- | ------ | ------------------------------------ | ------- |
| **element** | string | -                                    | -       |
| **edge**    | string | `'top', 'bottom', 'centered', 'all'` | `'all'` |

#### `verticallyAligned(element[, edge])`

| argument    | type   | options                              | default |
| ----------- | ------ | ------------------------------------ | ------- |
| **element** | string | -                                    | -       |
| **edge**    | string | `'left', 'right', 'centered', 'all'` | `'all'` |

#### `overflowing([, direction])`

| argument         | type   | options                              | default |
| ---------------- | ------ | -------------------------------------| ------- |
| **direction**    | string | `'vertically', 'horizontally', 'any'`| `'any'` |


#### `overlapping(element)`

| argument    | type   | options                              | default |
| ----------- | ------ | ------------------------------------ | ------- |
| **element** | string | -                                    | -       |

### Dimensions

The following width and height assertions are chain-able and can be used with the .gt, .within and .lt methods

#### `width(measure)`

#### `height(measure)`

| argument    | type   | options | default |
| ----------- | ------ | ------- | ------- |
| **measure** | number | -       | -       |

### Positioning

The following assertions will check an elements distance is >= 0 if no distance is set

#### `rightOf(element[, distance])`

#### `leftOf(element[, distance])`

#### `above(element[, distance])`

#### `below(element[, distance])`

| argument     | type   | options | default |
| ------------ | ------ | ------- | ------- |
| **element**  | string | -       | -       |
| **distance** | number | -       | -       |

### Styling

#### `style(property, value)`

| argument     | type   | options | default |
| ------------ | ------ | ------- | ------- |
| **property** | string | -       | -       |
| **value**    | string | -       | -       |


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/msmps"><img src="https://avatars1.githubusercontent.com/u/64437301?v=4" width="100px;" alt=""/><br /><sub><b>Matt Simpson</b></sub></a><br /><a href="https://github.com/msmps/cypress-layout-inspector/commits?author=msmps" title="Code">💻</a> <a href="https://github.com/msmps/cypress-layout-inspector/commits?author=msmps" title="Documentation">📖</a> <a href="#ideas-msmps" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/msmps/cypress-layout-inspector/commits?author=msmps" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[npm]: https://www.npmjs.com/
[node]: https://www.nodejs.org/
[cypress-io]: https://www.cypress.io/
[build-badge]: https://img.shields.io/github/workflow/status/msmps/cypress-layout-inspector/cypress-layout-inspector%20tests?style=flat-square
[build]: https://github.com/msmps/cypress-layout-inspector/actions
[version-badge]: https://img.shields.io/npm/v/cypress-layout-inspector?style=flat-square
[package]: https://www.npmjs.com/package/cypress-layout-inspector
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic]: https://github.com/semantic-release/semantic-release
[github-watch-badge]: https://img.shields.io/github/watchers/msmps/cypress-layout-inspector.svg?style=social
[github-watch]: https://github.com/msmps/cypress-layout-inspector/watchers
[github-star-badge]: https://img.shields.io/github/stars/msmps/cypress-layout-inspector.svg?style=social
[github-star]: https://github.com/msmps/cypress-layout-inspector/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20cypress-layout-inspector%20by%20%40msmps_%20https%3A%2F%2Fgithub.com%2Fmsmps%2Fcypress-layout-inspector%20%F0%9F%95%B5%EF%B8%8F%E2%80%8D%E2%99%82%EF%B8%8F
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/msmps/cypress-layout-inspector.svg?style=social
