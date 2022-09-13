describe("style testing commands", () => {
  before(() => {
    cy.visit("cypress/fixtures/style.html");
  });

  it("block should have 1px border dotted blue", () => {
    cy.get(".block").should(
      "have.style",
      "border",
      "1px dotted rgb(0, 0, 255)"
    );
  });

  it("text should have font-size 18px", () => {
    cy.get(".text").should("have.style", "font-size", "18px");
  });
});
