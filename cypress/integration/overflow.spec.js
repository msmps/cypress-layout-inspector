describe('overflow testing commands', () => {
    
    beforeEach(() => {
        cy.visit('cypress/fixtures/test-app/overflow.html');
    });

    it('no-overflow-1 should not be overflowing', () => {
        cy.get('.no-overflow-1.outer').should('not.be.overflowing');
    });

    it('overflow-1 should be overflowing vertically', () => {
        cy.get('.overflow-1.outer').should('be.overflowing');
        cy.get('.overflow-1.outer').should('not.be.overflowing', 'horizontally');
        cy.get('.overflow-1.outer').should('be.overflowing', 'vertically');
    });

    it('overflow-2 should be overflowing horizontally', () => {
        cy.get('.overflow-2.outer').should('be.overflowing');
        cy.get('.overflow-2.outer').should('be.overflowing', 'horizontally');
        cy.get('.overflow-2.outer').should('not.be.overflowing', 'vertically');
    });

});

