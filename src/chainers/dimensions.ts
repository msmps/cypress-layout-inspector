import { getElementProperties } from "../utils/element";

const dimensionAssertions: Chai.ChaiPlugin = ({ Assertion }, utils) => {
  Assertion.addChainableMethod(
    "width",
    function (measure) {
      const source = getElementProperties(this._obj);
      const actual = source.width;

      return this.assert(
        actual === measure,
        `expected #{this} to have width of #{exp}, but the value was #{act}`,
        `expected #{this} not to have width of #{exp}, but the value was #{act}`,
        measure,
        actual
      );
    },
    function (this: object) {
      utils.flag(this, "element.width", true);
    }
  );

  Assertion.addChainableMethod(
    "height",
    function (measure) {
      const source = getElementProperties(this._obj);
      const actual = source.height;

      return this.assert(
        actual === measure,
        `expected #{this} to have height of #{exp}, but the value was #{act}`,
        `expected #{this} not to have height of #{exp}, but the value was #{act}`,
        measure,
        actual
      );
    },
    function (this: object) {
      utils.flag(this, "element.height", true);
    }
  );
};

export default dimensionAssertions;
