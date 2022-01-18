import type { Distances, Element } from "../../types";
import { isWithinThreshold } from "../utils/assertions";
import { getElementProperties } from "../utils/element";

const positionAssertions: Chai.ChaiPlugin = ({ Assertion }, utils) => {
  Assertion.addMethod("rightOf", function (element, distance?: number) {
    const [source, target] = [
      getElementProperties(this._obj),
      getElementProperties(element),
    ];

    const actual = source.left - target.right;

    if (distance === undefined) {
      return this.assert(
        actual >= 0,
        `expected #{this} to be right of ${element}`,
        `expected #{this} not to be right of ${element}`,
        ""
      );
    }

    return this.assert(
      isWithinThreshold(actual, distance),
      `expected #{this} to be right of ${element} by #{exp}, but the value was #{act}`,
      `expected #{this} not to be right of ${element} by #{exp}, but the value was #{act}`,
      distance,
      actual
    );
  });

  Assertion.addMethod("leftOf", function (element, distance?: number) {
    const [source, target] = [
      getElementProperties(this._obj),
      getElementProperties(element),
    ];

    const actual = target.left - source.right;

    if (distance === undefined) {
      return this.assert(
        actual >= 0,
        `expected #{this} to be left of ${element}`,
        `expected #{this} not to be left of ${element}`,
        ""
      );
    }

    return this.assert(
      isWithinThreshold(actual, distance),
      `expected #{this} to be left of ${element} by #{exp}, but the value was #{act}`,
      `expected #{this} not to be left of ${element} by #{exp}, but the value was #{act}`,
      distance,
      actual
    );
  });

  Assertion.overwriteMethod(
    "above",
    (_super) =>
      function (
        this: Chai.AssertionStatic,
        element: Element,
        distance?: number
      ) {
        if (Cypress.dom.isJquery(this._obj)) {
          const [source, target] = [
            getElementProperties(this._obj),
            getElementProperties(element),
          ];

          const actual = target.top - source.bottom;

          if (distance === undefined) {
            return this.assert(
              actual >= 0,
              `expected #{this} to be above ${element}`,
              `expected #{this} not to be above ${element}`,
              ""
            );
          }

          return this.assert(
            isWithinThreshold(actual, distance),
            `expected #{this} to be above ${element} by #{exp}, but the value was #{act}`,
            `expected #{this} not to be above ${element} by #{exp}, but the value was #{act}`,
            distance,
            actual
          );
        }

        return _super.apply(this, arguments);
      }
  );

  Assertion.overwriteMethod(
    "below",
    (_super) =>
      function (
        this: Chai.AssertionStatic,
        element: Element,
        distance?: number
      ) {
        if (Cypress.dom.isJquery(this._obj)) {
          const [source, target] = [
            getElementProperties(this._obj),
            getElementProperties(element),
          ];

          const actual = source.top - target.bottom;

          if (distance === undefined) {
            return this.assert(
              actual >= 0,
              `expected #{this} to be below ${element}`,
              `expected #{this} not to be below ${element}`,
              ""
            );
          }

          return this.assert(
            isWithinThreshold(actual, distance),
            `expected #{this} to be below ${element} by #{exp}, but the value was #{act}`,
            `expected #{this} not to be below ${element} by #{exp}, but the value was #{act}`,
            distance,
            actual
          );
        }

        return _super.apply(this, arguments);
      }
  );

  Assertion.addMethod("inside", function (element, distances: Distances) {
    const [source, target] = [
      getElementProperties(this._obj),
      getElementProperties(element),
    ];

    const differences = {
      top: source.top - target.top,
      left: source.left - target.left,
      right: -(source.right - target.right),
      bottom: -(source.bottom - target.bottom),
    };

    if (distances === undefined) {
      return this.assert(
        source.left >= target.left &&
          source.right <= target.right &&
          source.top >= target.top &&
          source.bottom <= target.bottom,
        `expected #{this} to be inside of ${element}, but the value was #{act}`,
        `expected #{this} not to be inside of ${element}, but the value was #{act}`,
        "",
        utils.inspect(differences)
      );
    }

    const condition = Object.keys(distances).every((key) => {
      const distance = distances[key as keyof Distances];
      const actual = differences[key as keyof Distances];
      return isWithinThreshold(actual, distance);
    });

    return this.assert(
      condition,
      `expected #{this} to be inside of ${element} by #{exp}, but the value was #{act}`,
      `expected #{this} not to be inside of ${element} by #{exp}, but the value was #{act}`,
      utils.inspect(distances),
      utils.inspect(differences)
    );
  });
};

export default positionAssertions;
