import Rect from '../utils/rect';

export default _chai => {
    function rightOf(element, distance = 0) {
        const [source, target] = [new Rect(this._obj), new Rect(element)];
        const actual = source.left - target.right;

        return this.assert(
            actual === distance,
            `expected #{this} to be right of ${element} by #{exp}, but the value was #{act}`,
            `expected #{this} not to be right of ${element} by #{exp}, but the value was #{act}`,
            distance,
            actual
        );
    }

    function leftOf(element, distance = 0) {
        const [source, target] = [new Rect(this._obj), new Rect(element)];
        const actual = target.left - source.right;

        return this.assert(
            actual === distance,
            `expected #{this} to be left of ${element} by #{exp}, but the value was #{act}`,
            `expected #{this} not to be left of ${element} by #{exp}, but the value was #{act}`,
            distance,
            actual
        );
    }

    _chai.Assertion.addMethod('rightOf', rightOf);
    _chai.Assertion.addMethod('leftOf', leftOf);
};
