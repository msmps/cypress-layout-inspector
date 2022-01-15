describe("dimension testing commands", () => {
  before(() => {
    cy.visit("cypress/fixtures/dimension.html");
  });

  describe("width", () => {
    it("block should have width greater than 100px", () => {
      cy.get(".block").should("have.width.gt", 100);
    });

    it("block should have width of 200px", () => {
      cy.get(".block").should("have.width", 200);
    });

    it("block should have width less than 300px", () => {
      cy.get(".block").should("have.width.lt", 300);
    });

    it("block should have width within 100px & 300px", () => {
      cy.get(".block").should("have.width.within", 100, 300);
    });
  });

  describe("height", () => {
    it("block should have height greater than 100px", () => {
      cy.get(".block").should("have.height.gt", 100);
    });

    it("block should have height of 200px", () => {
      cy.get(".block").should("have.height", 200);
    });

    it("block should have height less than 300px", () => {
      cy.get(".block").should("have.height.lt", 300);
    });

    it("block should have height within 100px & 300px", () => {
      cy.get(".block").should("have.height.within", 100, 300);
    });
  });
});
