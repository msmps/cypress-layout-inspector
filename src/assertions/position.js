import calculateDifferences from '../utils/differences';
import Rect from '../utils/rect';
import withinThreshold from '../utils/threshold';

export default _chai => {
    function rightOf(element, distance = undefined) {
        const [source, target] = [new Rect(this._obj), new Rect(element)];
        const actual = source.left - target.right;

        if (distance === undefined) {
            return this.assert(
                actual >= 0,
                `expected #{this} to be right of ${element}`,
                `expected #{this} not to be right of ${element}`
            );
        }

        return this.assert(
            actual === distance || withinThreshold(actual, distance),
            `expected #{this} to be right of ${element} by #{exp}, but the value was #{act}`,
            `expected #{this} not to be right of ${element} by #{exp}, but the value was #{act}`,
            distance,
            actual
        );
    }

    function leftOf(element, distance = undefined) {
        const [source, target] = [new Rect(this._obj), new Rect(element)];
        const actual = target.left - source.right;

        if (distance === undefined) {
            return this.assert(
                actual >= 0,
                `expected #{this} to be left of ${element}`,
                `expected #{this} not to be left of ${element}`
            );
        }

        return this.assert(
            actual === distance || withinThreshold(actual, distance),
            `expected #{this} to be left of ${element} by #{exp}, but the value was #{act}`,
            `expected #{this} not to be left of ${element} by #{exp}, but the value was #{act}`,
            distance,
            actual
        );
    }

    function inside(element, distances) {
        const [source, target] = [new Rect(this._obj), new Rect(element)];
        const differences = calculateDifferences(source, target);

        if (distances === undefined) {
            return this.assert(
                source.left >= target.left &&
                    source.right <= target.right &&
                    source.top >= target.top &&
                    source.bottom <= target.bottom,
                `expected #{this} to be inside of #{exp}, but the value was #{act}`,
                `expected #{this} not to be inside of #{exp}, but the value was #{act}`,
                element,
                JSON.stringify(differences)
            );
        }

        return this.assert(
            Object.keys(distances).every(
                key => distances[key] === differences[key]
            ),
            `expected #{this} to be inside of ${element} by #{exp}, but the value was #{act}`,
            `expected #{this} not to be inside of ${element} by #{exp}, but the value was #{act}`,
            JSON.stringify(distances),
            JSON.stringify(differences)
        );
    }

    _chai.Assertion.addMethod('rightOf', rightOf);
    _chai.Assertion.addMethod('leftOf', leftOf);
    _chai.Assertion.addMethod('inside', inside);

    _chai.Assertion.overwriteMethod(
        'above',
        _super =>
            function (element, distance = undefined) {
                if (this._obj.constructor.name === 'jQuery') {
                    const [source, target] = [
                        new Rect(this._obj),
                        new Rect(element),
                    ];
                    const actual = target.top - source.bottom;

                    if (distance === undefined) {
                        return this.assert(
                            actual >= 0,
                            `expected #{this} to be above ${element}`,
                            `expected #{this} not to be above ${element}`
                        );
                    }

                    return this.assert(
                        actual === distance ||
                            withinThreshold(actual, distance),
                        `expected #{this} to be above ${element} by #{exp}, but the value was #{act}`,
                        `expected #{this} not to be above ${element} by #{exp}, but the value was #{act}`,
                        distance,
                        actual
                    );
                }

                return _super.apply(this, arguments);
            }
    );

    _chai.Assertion.overwriteMethod(
        'below',
        _super =>
            function (element, distance = undefined) {
                if (this._obj.constructor.name === 'jQuery') {
                    const [source, target] = [
                        new Rect(this._obj),
                        new Rect(element),
                    ];
                    const actual = source.top - target.bottom;

                    if (distance === undefined) {
                        return this.assert(
                            actual >= 0,
                            `expected #{this} to be below ${element}`,
                            `expected #{this} not to be below ${element}`
                        );
                    }

                    return this.assert(
                        actual === distance ||
                            withinThreshold(actual, distance),
                        `expected #{this} to be below ${element} by #{exp}, but the value was #{act}`,
                        `expected #{this} not to be below ${element} by #{exp}, but the value was #{act}`,
                        distance,
                        actual
                    );
                }

                return _super.apply(this, arguments);
            }
    );
};
