/// <reference types="cypress"/>
import homepagePO from "../../support/pageObjects/homepagePO";

describe("This file will hold all the test scripts involving the homepage", function () {
  const homepage = new homepagePO();
  beforeEach(function () {
    cy.visit(Cypress.env("url"));
    cy.fixture("homepage").then(function (locator) {
      this.locator = locator;
    });
  });

  it("Users should be able to navigate to the homepage", function () {
    cy.wait(1000);
    cy.title().should("eq", this.locator.pageTitle);
  });

  it("Users should be able to see four articles appearing in the Featured section on the homepage", function () {
    cy.verifyingTheNumberOfArticles(4);
  });

  it("Users should be able to navigate to an article page from the homepage", function () {
    cy.clickArticleAndVerify();
  });

  it("Clicking on the Breadcrumbs should be working on the homepage", function () {
    cy.clickBreadcrumbAndVerify();
  });

  it("Users should be able to navigate to the News page from the top header", function () {
    cy.verifyingHeaderLinks(
      this.locator.newsLinkLocator,
      this.locator.newsLinkverifyingText
    );
  });

  it("Users should be able to navigate to the Arts & Entertainment page from the top header", function () {
    cy.verifyingHeaderLinks(
      this.locator.artsAndEntertainmentLinkLocator,
      this.locator.artsAndEntertainmentLinkverifyingText
    );
  });

  it("Users should be able to navigate to the Food page from the top header", function () {
    cy.verifyingHeaderLinks(
      this.locator.foodLinkLocator,
      this.locator.foodLinkverifyingText
    );
  });

  // it("Users should be able to navigate to the Election 2021 page from the top header", function () {
  //   cy.verifyingHeaderLinks(
  //     this.locator.election2021LinkLocator,
  //     this.locator.election2021LinkverifyingText
  //   );
  // });

  it("Users should be able to navigate to the Newsletter page from the top header", function () {
    homepage.getNewsletterLink().invoke("removeAttr", "target").click();
    cy.contains(this.locator.newsletterLinkverifyingText);
  });

  it("Users should be able to navigate to the Donate page from the top header", function () {
    homepage.getDonateButton().invoke("removeAttr", "target").click();
    cy.contains(this.locator.donateButtonLinkVerifyingText);
  });
});
