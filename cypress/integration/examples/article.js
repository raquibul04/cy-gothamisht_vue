///<reference types="cypress"/>

describe("This file hold all the tests involving the article page", function () {
  beforeEach(function () {
    cy.visit(Cypress.env("article"));
    cy.fixture("article").then(function (locator) {
      this.locator = locator;
    });
  });
  it("The article breadcrumb from top of the article title should navigate users to the respective page", function () {
    cy.clickBreadcrumbAndVerify();
  });
  it("Clicking on the Author name should navigate users to the respective author page", function () {
    cy.verifyingAuthorName(
      this.locator.authorNameLocator,
      this.locator.authorName
    );
  });
  it("Ensure that three stories are appearing under Recent in News section on the article page", function () {
    cy.verifyingSection(
      this.locator.recentInNews,
      this.locator.recentInNewsNumbers
    );
  });
  it("Ensure that Featured in News section appears in the Article page", function () {
    cy.verifyingSection(
      this.locator.featuredInNews,
      this.locator.featuredInNewsNumbers
    );
  });
  it("News link from the Read More In section should be working", function () {
    cy.verifyingReadMoreIn("0");
  });
  it("Arts & Entertainment link from the Read More In section should be working", function () {
    cy.verifyingReadMoreIn("1");
  });
  it("Food link from the Read More In section should be working", function () {
    cy.verifyingReadMoreIn("2");
  });
  // it("Election 2021 link from the Read More In section should be working", function () {
  //   cy.verifyingReadMoreIn("3");
  // });
});
