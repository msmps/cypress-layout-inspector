import Rect from '../utils/rect';

export default (_chai, utils) => {
    _chai.Assertion.addChainableMethod(
        'width',
        function (measure) {
            const source = new Rect(this._obj);
            const actual = source.width;

            return this.assert(
                actual === measure,
                `expected #{this} to have width of #{exp}, but the value was #{act}`,
                `expected #{this} not to have width of #{exp}, but the value was #{act}`,
                measure,
                actual
            );
        },
        function () {
            utils.flag(this, 'element.width', true);
        }
    );

    _chai.Assertion.addChainableMethod(
        'height',
        function (measure) {
            const source = new Rect(this._obj);
            const actual = source.height;

            return this.assert(
                actual === measure,
                `expected #{this} to have height of #{exp}, but the value was #{act}`,
                `expected #{this} not to have height of #{exp}, but the value was #{act}`,
                measure,
                actual
            );
        },
        function () {
            utils.flag(this, 'element.height', true);
        }
    );
};
