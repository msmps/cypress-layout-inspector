import "../types";
import "./assertions";
import "./chainers";
import "./overwrites";
import { configure } from "./utils/configure";

Cypress.Commands.add("configureLayoutInspector", (config) => configure(config));
