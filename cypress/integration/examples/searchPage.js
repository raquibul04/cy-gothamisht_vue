/// <reference types="cypress"/>

describe("This file will hold all the test scritps involving the search page", function () {
  beforeEach(function () {
    cy.visit(Cypress.env("search"));
    cy.fixture("search").then(function (locator) {
      this.locator = locator;
    });
  });

  //   it("Users should be able to use the search feature Successfully", function () {
  //     cy.searchAnItem(this.locator.searchItem);
  //   });

  it("Users should be able to navigate to an article page from the search page", function () {
    cy.searchAnItem(this.locator.searchItem);
    cy.clickArticleAndVerify();
  });
});
