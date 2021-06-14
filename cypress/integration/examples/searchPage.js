/// <reference types="cypress"/>
import commonPagePO from "../../support/pageObjects/commonPagePO";
describe("This file will hold all the test scritps involving the search page", function () {
  const commonPage = new commonPagePO();
  beforeEach(function () {
    cy.visit(Cypress.env("search"));
    cy.fixture("search").then(function (locator) {
      this.locator = locator;
    });
  });

  it("Users should be able to use the search feature Successfully", function () {
    cy.searchAnItem(this.locator.searchItem);
  });

  it("Users should be able to navigate to an article page from the search page", function () {
    cy.searchAnItem(this.locator.searchItem);
    cy.clickArticleAndVerify();
  });

  it("Users should be able to see 12 cards when he/she search for an item", function () {
    cy.searchAnItem(this.locator.searchItem);
    cy.CardNumberValidation(12);
  });

  it("More Resuts button should be working on the search page", function () {
    cy.searchAnItem(this.locator.searchItem);
    commonPage.clickingLoadMoreButton();
    cy.CardNumberValidation(24);
  });

  it("Clicking on the Breadcrumbs should be working on the search page", function () {
    cy.searchAnItem(this.locator.searchItem);
    cy.clickBreadcrumbAndVerify();
  });
});
