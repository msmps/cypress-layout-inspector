describe('overlap testing commands', () => {
    beforeEach(() => {
        cy.visit('cypress/fixtures/test-app/overlap.html');
    });

    it('no-overlap-1 and no-overlap-2 should not be overlapping', () => {
        cy.get('.no-overlap-2').should('not.be.overlapping', '.no-overlap-1');
        cy.get('.no-overlap-1').should('not.be.overlapping', '.no-overlap-2');
    });

    it('no-overlap-3 and no-overlap-4 should not be overlapping', () => {
        cy.get('.no-overlap-3').should('not.be.overlapping', '.no-overlap-4');
        cy.get('.no-overlap-4').should('not.be.overlapping', '.no-overlap-3');
    });

    it('no-overlap-5 and no-overlap-6 should not be overlapping', () => {
        cy.get('.no-overlap-5').should('not.be.overlapping', '.no-overlap-6');
        cy.get('.no-overlap-6').should('not.be.overlapping', '.no-overlap-5');
    });

    it('overlap-1 and overlap-2 should be overlapping', () => {
        cy.get('.overlap-1').should('be.overlapping', '.overlap-2');
        cy.get('.overlap-2').should('be.overlapping', '.overlap-1');
    });

    it('overlap-3 and overlap-4 should be overlapping', () => {
        cy.get('.overlap-3').should('be.overlapping', '.overlap-4');
        cy.get('.overlap-4').should('be.overlapping', '.overlap-3');
    });

    it('overlap-5 and overlap-6 should be overlapping', () => {
        cy.get('.overlap-5').should('be.overlapping', '.overlap-6');
        cy.get('.overlap-6').should('be.overlapping', '.overlap-5');
    });
   
});

