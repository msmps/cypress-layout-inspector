import { getConfiguration } from '../configure';
import getElement from './getElement';

class Rect {
    constructor(subject) {
        const element = getElement(subject);
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
