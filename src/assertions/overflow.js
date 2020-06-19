import getElement from '../utils/getElement';

export default _chai => {
    function overflowing(direction = 'any') {
        const el = getElement(this._obj);
        const overflowVertical = el.scrollHeight > el.clientHeight;
        const overflowHorizontal = el.scrollWidth > el.clientWidth;

        let condition;

        switch (direction) {
            case 'horizontally':
                condition = overflowHorizontal;
                break;
            case 'vertically':
                condition = overflowVertical;
                break;
            default:
                condition = overflowVertical || overflowHorizontal;
        }

        return this.assert(
            condition,
            `expected #{this} to overflow ${direction}`,
            `expected #{this} not to overflow ${direction}`
        );
    }
    _chai.Assertion.addMethod('overflowing', overflowing);
};
