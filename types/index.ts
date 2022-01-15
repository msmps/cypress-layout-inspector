import { configure } from "../src/utils/configure";

export type Subject = string | JQuery<HTMLElement>;

export type Element = JQuery<HTMLElement>;

export type ElementProperties = {
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type Distances = Pick<
  ElementProperties,
  "top" | "right" | "bottom" | "left"
>;

//

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * cypress-layout-inspector utility to provide layout testing functionality
       *
       * Configure cypress-layout-inspector through Cypress object. Wraps `configure(config)`
       */
      configureLayoutInspector(
        config: Parameters<typeof configure>[0]
      ): Chainable<void>;
    }
  }
}
