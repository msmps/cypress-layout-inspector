import Rect from '../utils/rect';

const linesOverlap = (line1, line2) => {
    const line2isBefore = line2.end < line1.start;
    const line2isAfter = line2.start > line1.end;
    return !(line2isBefore || line2isAfter);
};

export default _chai => {
    function overlapping(element) {
        const [rect1, rect2] = [new Rect(this._obj), new Rect(element)];

        const overlapVertical = linesOverlap(
            { start: rect1.top, end: rect1.bottom },
            { start: rect2.top, end: rect2.bottom }
        );
        const overlapHorizontal = linesOverlap(
            { start: rect1.left, end: rect1.right },
            { start: rect2.left, end: rect2.right }
        );
        const condition = overlapVertical && overlapHorizontal;

        return this.assert(
            condition,
            `expected #{this} to overlap with ${element} `,
            `expected #{this} not to overlap with ${element}`
        );
    }
    _chai.Assertion.addMethod('overlapping', overlapping);
};
