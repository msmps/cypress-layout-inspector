<div align="center">
    <h1>cypress-layout-inspector</h1>
    <img width="80px" height="80px" alt="detective" src="https://raw.githubusercontent.com/msmps/cypress-layout-inspector/master/media/detective.png" />
</div>

<hr />

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Installation](#installation)
-   [Usage](#usage)
-   [Assertions](#assertions)
    -   [Alignment](#alignment)
    -   [Dimensions](#dimensions)
    -   [Positioning](#positioning)
    -   [Styling](#styling)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node] and should be installed as one of your project's `devDependencies`:

```
npm install --save-dev cypress-layout-inspector
```

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

### Dimensions

> The following width and height assertions are chain-able and can be used with the .gt, .within and .lt methods

#### `width(measure)`

#### `height(measure)`

| argument    | type   | options | default |
| ----------- | ------ | ------- | ------- |
| **measure** | number | -       | -       |

### Positioning

#### `rightOf(element, distance)`

#### `leftOf(element, distance)`

| argument     | type   | options | default |
| ------------ | ------ | ------- | ------- |
| **element**  | string | -       | -       |
| **distance** | number | -       | `0`     |

### Styling

#### `style(property, value)`

| argument     | type   | options | default |
| ------------ | ------ | ------- | ------- |
| **property** | string | -       | -       |
| **value**    | string | -       | -       |

[npm]: https://www.npmjs.com/
[node]: https://www.nodejs.org/
