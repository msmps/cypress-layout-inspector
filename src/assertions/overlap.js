import Rect from '../utils/rect';

export default _chai => {
    function overlapping(element) {
        const [rect1, rect2] = [new Rect(this._obj), new Rect(element)];
        // use <= and >= instead of < and > because regularly flowing elements (not overlapping) have equal bounding values (e.g. left one's right == right one's left)
        const condition = !(
            rect1.right <= rect2.left ||
            rect1.left >= rect2.right ||
            rect1.bottom <= rect2.top ||
            rect1.top >= rect2.bottom
        );

        return this.assert(
            condition,
            `expected #{this} to overlap with ${element} `,
            `expected #{this} not to overlap with ${element}`
        );
    }
    _chai.Assertion.addMethod('overlapping', overlapping);
};
