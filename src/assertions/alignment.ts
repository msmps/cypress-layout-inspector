import { getElementProperties } from "../utils/element";

const alignmentAssertions: Chai.ChaiPlugin = ({ Assertion }) => {
  Assertion.addMethod("horizontallyAligned", function (element, edge = "all") {
    const [source, target] = [
      getElementProperties(this._obj),
      getElementProperties(element),
    ];

    const topAlignDiff = source.top - target.top;
    const bottomAlignDiff = -(source.bottom - target.bottom);

    let condition;

    switch (edge) {
      case "top":
        condition = topAlignDiff === 0;
        break;
      case "bottom":
        condition = bottomAlignDiff === 0;
        break;
      case "centered":
        condition = topAlignDiff - bottomAlignDiff === 0;
        break;
      case "all":
      default:
        condition = topAlignDiff === 0 && bottomAlignDiff === 0;
    }

    return this.assert(
      condition,
      `expected #{this} to be horizontally aligned ${edge} with ${element}`,
      `expected #{this} not to be horizontally aligned ${edge} with ${element}`,
      ""
    );
  });

  Assertion.addMethod("verticallyAligned", function (element, edge = "all") {
    const [source, target] = [
      getElementProperties(this._obj),
      getElementProperties(element),
    ];

    const leftAlignDiff = source.left - target.left;
    const rightAlignDiff = -(source.right - target.right);

    let condition;

    switch (edge) {
      case "left":
        condition = leftAlignDiff === 0;
        break;
      case "right":
        condition = rightAlignDiff === 0;
        break;
      case "centered":
        condition = leftAlignDiff - rightAlignDiff === 0;
        break;
      case "all":
      default:
        condition = leftAlignDiff === 0 && rightAlignDiff === 0;
    }

    return this.assert(
      condition,
      `expected #{this} to be vertically aligned ${edge} with ${element}`,
      `expected #{this} not to be vertically aligned ${edge} with ${element}`,
      ""
    );
  });
};

export default alignmentAssertions;
