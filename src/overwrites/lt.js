import Rect from '../utils/rect';

export default (_chai, utils) => {
    _chai.Assertion.overwriteMethod(
        'lt',
        _super =>
            function (n) {
                const assertWidth = utils.flag(this, 'element.width');
                const assertHeight = utils.flag(this, 'element.height');

                if (assertWidth || assertHeight) {
                    const source = new Rect(this._obj);

                    let property;
                    if (assertWidth) property = 'width';
                    if (assertHeight) property = 'height';

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
};
