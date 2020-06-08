import './assertions';
import './chainables';
import './overwrites';
import { configure } from './configure';

Cypress.Commands.add('configureLayoutInspector', config => configure(config));
