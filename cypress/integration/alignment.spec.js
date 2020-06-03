describe('horizontal alignment testing commands', () => {
    beforeEach(() => {
        cy.visit('cypress/fixtures/test-app/horizontal-alignment.html');
    });

    it('block-2 should be horizontally aligned top with block-1', () => {
        cy.get('.block-2').should('be.horizontallyAligned', '.block-1', 'top');
    });

    it('block-4 should be horizontally aligned bottom with block-3', () => {
        cy.get('.block-4').should(
            'be.horizontallyAligned',
            '.block-3',
            'bottom'
        );
    });

    it('block-6 should be horizontally aligned all with block-5', () => {
        cy.get('.block-6').should('be.horizontallyAligned', '.block-5', 'all');
    });

    it('block-8 should be horizontally aligned centered with block-7', () => {
        cy.get('.block-8').should(
            'be.horizontallyAligned',
            '.block-7',
            'centered'
        );
    });
});

describe('vertical alignment testing commands', () => {
    beforeEach(() => {
        cy.visit('cypress/fixtures/test-app/vertical-alignment.html');
    });

    it('block-2 should be vertically aligned left with block-1', () => {
        cy.get('.block-2').should('be.verticallyAligned', '.block-1', 'left');
    });

    it('block-4 should be vertically aligned right with block-3', () => {
        cy.get('.block-4').should('be.verticallyAligned', '.block-3', 'right');
    });

    it('block-6 should be vertically aligned all with block-5', () => {
        cy.get('.block-6').should('be.verticallyAligned', '.block-5', 'all');
    });

    it('block-8 should be vertically aligned centered with block-7', () => {
        cy.get('.block-8').should(
            'be.verticallyAligned',
            '.block-7',
            'centered'
        );
    });
});
