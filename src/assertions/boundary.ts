import { getElementProperties, unwrapElement } from "../utils/element";

const boundaryAssertions: Chai.ChaiPlugin = ({ Assertion }) => {
  Assertion.addMethod("overflowing", function (direction = "any") {
    const source = unwrapElement(this._obj);
    const overflowVertical = source.scrollHeight > source.clientHeight;
    const overflowHorizontal = source.scrollWidth > source.clientWidth;

    let condition;

    switch (direction) {
      case "horizontally":
        condition = overflowHorizontal;
        break;
      case "vertically":
        condition = overflowVertical;
        break;
      case "all":
      default:
        condition = overflowHorizontal || overflowVertical;
    }

    return this.assert(
      condition,
      `expected #{this} to be overflowing ${direction}`,
      `expected #{this} not to be overflowing ${direction}`,
      ""
    );
  });

  Assertion.addMethod("overlapping", function (element) {
    const [source, target] = [
      getElementProperties(this._obj),
      getElementProperties(element),
    ];

    const condition = !(
      source.right <= target.left ||
      source.left >= target.right ||
      source.bottom <= target.top ||
      source.top >= target.bottom
    );

    return this.assert(
      condition,
      `expected #{this} to be overlapping with ${element}`,
      `expected #{this} not to be overlapping with ${element}`,
      ""
    );
  });
};

export default boundaryAssertions;
