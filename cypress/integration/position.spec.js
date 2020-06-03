describe('position testing commands', () => {
    beforeEach(() => {
        cy.visit('cypress/fixtures/test-app/');
    });

    it('block-2 should be positioned right of block-1', () => {
        cy.get('.block-2').should('be.rightOf', '.block-1', 50);
    });

    it('block-3 should be positioned left of block-4', () => {
        cy.get('.block-3').should('be.leftOf', '.block-4', 50);
    });
});
