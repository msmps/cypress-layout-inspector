import type { ElementProperties } from "../../types";
import { getElementProperties } from "../utils/element";

const dimensionsOverwrites: Chai.ChaiPlugin = ({ Assertion }, utils) => {
  Assertion.overwriteMethod(
    "gt",
    (_super) =>
      function (this: Chai.AssertionStatic, n: number) {
        const width = utils.flag(this, "element.width");
        const height = utils.flag(this, "element.height");

        if (width || height) {
          const source = getElementProperties(this._obj);

          let property: keyof ElementProperties = "width";
          if (height) property = "height";

          const actual = source[property];

          return this.assert(
            actual > n,
            `expected #{this} to have ${property} greater than #{exp}, but the value was #{act}`,
            `expected #{this} not to have ${property} greater than #{exp}, but the value was #{act}`,
            n,
            actual
          );
        }

        return _super.apply(this, arguments);
      }
  );

  Assertion.overwriteMethod(
    "lt",
    (_super) =>
      function (this: Chai.AssertionStatic, n: number) {
        const width = utils.flag(this, "element.width");
        const height = utils.flag(this, "element.height");

        if (width || height) {
          const source = getElementProperties(this._obj);

          let property: keyof ElementProperties = "width";
          if (height) property = "height";

          const actual = source[property];

          return this.assert(
            actual < n,
            `expected #{this} to have ${property} less than #{exp}, but the value was #{act}`,
            `expected #{this} not to have ${property} less than #{exp}, but the value was #{act}`,
            n,
            actual
          );
        }

        return _super.apply(this, arguments);
      }
  );

  Assertion.overwriteMethod(
    "within",
    (_super) =>
      function (this: Chai.AssertionStatic, start: number, finish: number) {
        const width = utils.flag(this, "element.width");
        const height = utils.flag(this, "element.height");

        if (width || height) {
          const source = getElementProperties(this._obj);

          let property: keyof ElementProperties = "width";
          if (height) property = "height";

          const actual = source[property];

          return this.assert(
            actual >= start && actual <= finish,
            `expected #{this} to have ${property} within #{exp}, but the value was #{act}`,
            `expected #{this} not to have ${property} within #{exp}, but the value was #{act}`,
            `${start} .. ${finish}`,
            actual
          );
        }

        return _super.apply(this, arguments);
      }
  );
};

export default dimensionsOverwrites;
