export default (_chai, utils) => {
    function style(property, value) {
        const actual = this._obj.css(property);

        return this.assert(
            actual === value,
            `expected #{this} to have CSS property ${utils.inspect(
                property
            )} with the value of #{exp}, but the value was #{act}`,
            `expected #{this} not to have CSS property ${utils.inspect(
                property
            )} with the value #{exp}`,
            value,
            actual
        );
    }

    _chai.Assertion.addMethod('style', style);
};
