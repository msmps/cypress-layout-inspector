describe("position testing commands", () => {
  before(() => {
    cy.visit("cypress/fixtures/position.html");
  });

  it("block-2 should be positioned right of block-1 (and by 50px)", () => {
    cy.get(".block-2")
      .should("be.rightOf", ".block-1")
      .should("be.rightOf", ".block-1", 50);
  });

  it("block-3 should be positioned left of block-4 (and by 50px)", () => {
    cy.get(".block-3")
      .should("be.leftOf", ".block-4")
      .should("be.leftOf", ".block-4", 50);
  });

  it("block-5 should be positioned above block-6 (and by 50px)", () => {
    cy.get(".block-5")
      .should("be.above", ".block-6")
      .should("be.above", ".block-6", 50);

    cy.log("** **validating overwrite** **");
    cy.wrap(10).should("be.above", 0);
  });

  it("block-8 should be positioned below block-7 (and by 50px)", () => {
    cy.get(".block-8")
      .should("be.below", ".block-7")
      .should("be.below", ".block-7", 50);

    cy.log("** **validating overwrite** **");
    cy.wrap(0).should("be.below", 10);
  });

  it("block-10 should be inside of block-9 (and by 50px top, left)", () => {
    cy.get(".block-10")
      .should("be.inside", ".block-9")
      .should("be.inside", ".block-9", { top: 50, left: 50 });
  });

  it("block-11 should be positioned above block-12 (and with a threshold of 2.5px)", () => {
    cy.configureLayoutInspector({
      threshold: 2.5,
    });

    cy.get(".block-11").should("be.above", ".block-12", 50);
  });

  it("block-11 should be positioned above block-12 should fail when threshold is below the actual value", () => {
    cy.configureLayoutInspector({
      threshold: 0,
    });

    cy.get(".block-11").then(($el) => {
      expect(() => expect($el).to.be.above(".block-12", 50)).to.throw();
    });
  });
});
