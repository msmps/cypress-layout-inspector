describe('position testing commands', () => {
    beforeEach(() => {
        cy.visit('cypress/fixtures/test-app/');
    });

    it('block-2 should be positioned right of block-1 (and by 50px)', () => {
        cy.get('.block-2')
            .should('be.rightOf', '.block-1')
            .should('be.rightOf', '.block-1', 50);
    });

    it('block-3 should be positioned left of block-4 (and by 50px)', () => {
        cy.get('.block-3')
            .should('be.leftOf', '.block-4')
            .should('be.leftOf', '.block-4', 50);
    });

    it('block-5 should be positioned above block-6 (and by 50px)', () => {
        cy.get('.block-5')
            .should('be.above', '.block-6')
            .should('be.above', '.block-6', 50);
    });

    it('block-8 should be positioned below block-7 (and by 50px)', () => {
        cy.get('.block-8')
            .should('be.below', '.block-7')
            .should('be.below', '.block-7', 50);
    });
});
