// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// Clicking and verifying the links from the side navigation
Cypress.Commands.add(
  "clickAndVerifyFromSideNav_1",
  function (elementLocator, verifyingText) {
    cy.get(".menu-panel")
      .find(elementLocator)
      .invoke("removeAttr", "target")
      .click();
    cy.contains(verifyingText);
  }
);

/// Clicking and verifying the links from the side navigation that does not open in a new tab
Cypress.Commands.add(
  "clickAndVerifyFromSideNav_2",
  function (elementLocator, verifyingText) {
    cy.get(".menu-panel").find(elementLocator).click();
    cy.contains(verifyingText);
  }
);
/// Clicking and verifying the links from the footer
Cypress.Commands.add(
  "clickAndVerifyFromFooter_1",
  function (elementLocator, verifyingText) {
    cy.get(".c-main-footer")
      .find(elementLocator)
      .invoke("removeAttr", "target")
      .click();
    cy.contains(verifyingText);
  }
);
/// Clicking and verifying the links from the footer that does not open in a new tab
Cypress.Commands.add(
  "clickAndVerifyFromFooter_2",
  function (elementLocator, verifyingText) {
    cy.get(".c-main-footer").find(elementLocator).click();
    cy.contains(verifyingText);
  }
);
/// Clicking on an article and verifying the follwing page title to make sure clicking on an article is working
Cypress.Commands.add("clickArticleAndVerify", function () {
  let title;
  let titleHeader;
  cy.get(".card-title-link")
    .find("span")
    .eq(0)
    .then(function (title1) {
      title = title1.text().trim();
      cy.log(title);
      cy.get(".card").find("a").eq(1).click();
      cy.wait(1000);
    });
  cy.get(".article-title").then(function (title2) {
    titleHeader = title2.text().trim();
    cy.log(titleHeader);
    expect(title).equals(titleHeader);
  });
});
///Article number validation
Cypress.Commands.add("CardNumberValidation", function (number) {
  cy.get(".card").should("have.length", number);
});
/// Clicking and verifying the Breadcrumbs from a page to make sure it navigates to the correct topics
Cypress.Commands.add("clickBreadcrumbAndVerify", function () {
  let title;
  let titleHeader;
  cy.get(".tag:not(.sponsored)")
    .eq(1)
    .then(function (title1) {
      title = title1.text().trim();
      cy.log(title);
      cy.get(".tag:not(.sponsored)").eq(1).click();
      cy.wait(1000);
    });
  cy.get(".c-section__heading").then(function (title2) {
    titleHeader = title2.text().trim();
    cy.log(titleHeader);
    expect(title).equals(titleHeader);
  });
});
