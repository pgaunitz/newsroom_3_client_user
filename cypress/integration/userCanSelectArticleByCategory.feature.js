describe("User can select article by category", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles.json"
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/**",
      response: "fixture:specific_article.json"
    });
    cy.visit("/");
  });
  it("can see all articles in one category", () => {
    cy.get("#category-header");
    cy.get("#sports").click();
    cy.get("#article-list").should("contain", "This is a smashing title");
    cy.get("#article-list").should("not.contain", "Zero infected on Mars");
    cy.get("#article-list").should("not.contain", "Lau new president");

  });
});
