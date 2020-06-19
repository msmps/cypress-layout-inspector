function getElement(subject) {
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

    return element;
}

export default getElement;
