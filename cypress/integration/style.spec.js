describe('style testing commands', () => {
    beforeEach(() => {
        cy.visit('cypress/fixtures/test-app/style.html');
    });

    it('block-1 should have 1px border dotted blue', () => {
        cy.get('.block-1').should(
            'have.style',
            'border',
            '1px dotted rgb(0, 0, 255)'
        );
    });

    it('text should have font-size 18px', () => {
        cy.get('.text').should('have.style', 'font-size', '18px');
    });
});
