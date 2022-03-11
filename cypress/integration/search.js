describe("Search elements", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Search for elements with multiple results", () => {
    cy.search("dress");
    cy.get(".lighter").should("contain", "dress");
  });

  it("Search for elementes with no results", () => {
    cy.search("camisa");
    cy.get(".alert").should("contain", "No results");
  });

  it("Buscar contenido cargando de un fichero texto", () => {
    cy.readFile("cypress/support/textos/login.txt").then((texto) => {
      cy.search(texto);
    });
    cy.fixture("index").then((index) => {
      cy.get(index.searchButton).click();
      cy.get(".alert").should("contain", "No results");
    });
  });
});
