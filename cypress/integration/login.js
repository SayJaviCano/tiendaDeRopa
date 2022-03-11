describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login error", () => {
    cy.login("mail@gmail.com", "1234");
    cy.fixture("login").then((login) => {
      cy.get(login.incorrect).should("contain", "Invalid");
    });
  });
});
