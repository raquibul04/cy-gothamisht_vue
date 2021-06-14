/// <reference types="Cypress" />

import commonPagePO from "../../support/pageObjects/commonPagePO";

describe("This file will hold all the test scripts involving the tag page", function () {
  const commonPage = new commonPagePO();
  beforeEach(function () {
    cy.visit(Cypress.env("tag"));
  });

  it("Users should be able to navigate to an article page from the Tag page", function () {
    cy.clickArticleAndVerify();
  });

  it("Users should be able to see 12 cards when he/she lands on the tag page", function () {
    cy.CardNumberValidation(12);
  });

  it("More Resuts button should be working on the tag page", function () {
    commonPage.clickingLoadMoreButton();
    cy.CardNumberValidation(24);
  });

  it("Clicking on the Breadcrumbs should be working on the tag page", function () {
    cy.clickBreadcrumbAndVerify();
  });
});

///TODO Disqus (commenting option) hasn't been pushed to the vue site yet. We will have to add the test once it get's pushed
