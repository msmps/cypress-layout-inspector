import type { Element, ElementProperties, Subject } from "../../types";
import { getConfiguration } from "./configure";

const getElement = (subject: Subject): Element => {
  if (Cypress.dom.isJquery(subject)) return subject;
  return cy.$$(subject);
};

const unwrapElement = (element: Element) => {
  return Cypress.dom.isJquery(element) ? element[0] : element;
};

const removePadding: (
  properties: ElementProperties,
  element: Element
) => ElementProperties = (properties, element) => {
  const el = unwrapElement(element);

  const { paddingTop, paddingRight, paddingBottom, paddingLeft } =
    getComputedStyle(el);

  return {
    width:
      properties.width - (parseFloat(paddingLeft) + parseFloat(paddingRight)),
    height:
      properties.height - (parseFloat(paddingTop) + parseFloat(paddingBottom)),
    top: properties.top + parseFloat(paddingTop),
    right: properties.right - parseFloat(paddingRight),
    bottom: properties.bottom - parseFloat(paddingBottom),
    left: properties.left + parseFloat(paddingLeft),
  };
};

const getElementProperties: (subject: Subject) => ElementProperties = (
  subject
) => {
  const element = getElement(subject);
  const positions = Cypress.dom.getElementPositioning(element);

  let properties = {
    ...Cypress._.pick(positions, ["width", "height"]),
    ...Cypress._.pick(positions.fromElViewport, [
      "top",
      "right",
      "bottom",
      "left",
    ]),
  };

  if (getConfiguration("excludePadding")) {
    properties = removePadding(properties, element);
  }

  return properties;
};

export { getElement, unwrapElement, getElementProperties };
