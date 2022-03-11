describe("Search elements", () => {
  it("Search for elements with multiple results", () => {
    cy.visit("/");
    cy.fixture("index").then((index) => {
      cy.get(index.searchBox).type("dress");
      cy.get(index.searchButton).click();
      cy.get(".lighter").should("contain", "dress");
    });
  });
});
