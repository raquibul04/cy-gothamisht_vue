///<reference types="cypress"/>
describe("This file will hold all the test scripts involving the gallery page", function () {
  beforeEach(function () {
    cy.visit(Cypress.env("gallery"));
    cy.fixture("gallery").then(function (locator) {
      this.locator = locator;
    });
  });
  it("Clicking on the photo icon should navigate users to the slides page", function () {
    cy.verifyingPhotoGallery(this.locator.photoIcon);
  });
  it("Clicking on the View All should navigate users to the slides page", function () {
    cy.verifyingPhotoGallery(this.locator.viewAll);
  });
  it("'X' icon should navigate users back to the article page", function () {
    cy.galleryPageToArticlePage(this.locator.closeIcon);
  });
  it("Clickin on the article title on the slides page should navigate users back to the article page", function () {
    cy.galleryPageToArticlePage(this.locator.backToArticleTitle);
  });
  it("Back to Article page button should navigate users back to the article page", function () {
    cy.galleryPageToArticlePage(this.locator.backToArticle);
  });
});
