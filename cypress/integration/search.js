describe("Search elements", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Search for elements with multiple results", () => {
    cy.fixture("index").then((index) => {
      cy.get(index.searchBox).type("dress");
      cy.get(index.searchButton).click();
      cy.get(".lighter").should("contain", "dress");
    });
  });
  it("Search for elementes with no results", () => {
    cy.fixture("index").then((index) => {
      cy.get(index.searchBox).type("camisa");
      cy.get(index.searchButton).click();
      cy.get(".alert").should("contain", "No results");
    });
  });
});
