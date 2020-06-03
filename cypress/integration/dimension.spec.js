describe('dimension testing commands', () => {
    beforeEach(() => {
        cy.visit('cypress/fixtures/test-app/dimension.html');
    });

    it('block should have width > than 100px', () => {
        cy.get('.block').should('have.width.gt', 100);
    });

    it('block should have width of 200px', () => {
        cy.get('.block').should('have.width', 200);
    });

    it('block should have width < than 300px', () => {
        cy.get('.block').should('have.width.lt', 300);
    });

    it('block should have width > 100px & < 300px', () => {
        cy.get('.block').should('have.width.within', 100, 300);
    });

    it('block should have height of 200px', () => {
        cy.get('.block').should('have.height.gt', 100);
        cy.get('.block').should('have.height', 200);
        cy.get('.block').should('have.height.lt', 300);
        cy.get('.block').should('have.height.within', 100, 300);
    });
});
