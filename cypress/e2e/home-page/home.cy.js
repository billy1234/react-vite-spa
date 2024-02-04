describe("home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has heading", () => {
    cy.contains("This is some subheader text under main heading");
  });
});
