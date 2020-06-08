import { getConfiguration } from '../configure';

class Rect {
    constructor(subject) {
        let element;
        if (subject == null) {
            throw new Error(
                `Expected to find element: \`${subject}\`, but never found it.`
            );
        }

        if (typeof subject === 'string') [element] = Cypress.$(subject);
        if (subject.constructor.name === 'jQuery') [element] = subject;

        if (element === undefined) {
            throw new Error(
                `Expected to find element: \`${subject}\`, but never found it.`
            );
        }

        const shape = element.getBoundingClientRect();

        this.top = shape.top;
        this.left = shape.left;
        this.bottom = shape.bottom;
        this.right = shape.right;
        this.width = shape.width;
        this.height = shape.height;

        if (getConfiguration('excludePadding')) {
            const computed = getComputedStyle(element);
            this.top += parseFloat(computed.paddingTop);
            this.left += parseFloat(computed.paddingLeft);
            this.bottom -= parseFloat(computed.paddingBottom);
            this.right -= parseFloat(computed.paddingRight);
            this.width -=
                parseFloat(computed.paddingLeft) +
                parseFloat(computed.paddingRight);
            this.height -=
                parseFloat(computed.paddingTop) +
                parseFloat(computed.paddingBottom);
        }
    }
}

export default Rect;
