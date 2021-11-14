/// <reference types="Cypress" />
import sideNavPO from "../../support/pageObjects/sideNavPO";

describe("This file will hold all the test scripts involving the side nav", function () {
  const sideNav = new sideNavPO();

  beforeEach(function () {
    cy.visit(Cypress.env("url"));
    cy.fixture("sideNav").then(function (locator) {
      this.locator = locator;
    });
  });

  it("Users should be able to navigate to the gothamist side nav", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
  });

  it("Users should be able to close the side nave by clicking on the X", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    sideNav.getCloseIcon().click();
    sideNav.verifyingSideNav().should("not.be.visible");
  });

  it("Donate button should work on the side nav", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_1(
      this.locator.donateButton,
      this.locator.donatePageVerifyingText
    );
  });

  it("Users should be able to navigate to the News link from the side nav", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_2(
      this.locator.newsLinkLocator,
      this.locator.newsLinkverifyingText
    );
  });

  it("Users should be able to navigate to the Arts & Entertainment link from the side nav", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_2(
      this.locator.artsAndEntertainmentLinkLocator,
      this.locator.artsAndEntertainmentLinkverifyingText
    );
  });

  it("Users should be able to navigate to the Food link from the side nav", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_2(
      this.locator.foodLinkLocator,
      this.locator.foodLinkverifyingText
    );
  });

  it("Users should be able to navigate to the Election 2021 link from the side nav", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_2(
      this.locator.election2021LinkLocator,
      this.locator.election2021LinkverifyingText
    );
  });

  it("Users should be able to navigate to the Newsletter link from the side nav", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_1(
      this.locator.newsletterLinkLocator,
      this.locator.newsletterLinkverifyingText
    );
  });

  it("Advertising link from the side nav should be working", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_1(
      this.locator.advertising,
      this.locator.advertisingVerifyingText
    );
  });

  it("RSS Feed link from the side nav shoul be working", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_1(
      this.locator.rssFeed,
      this.locator.rssFeedVerifyingText
    );
  });

  it("Diversity link from the side nav should be working", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_1(
      this.locator.diversity,
      this.locator.diversityVerifyingText
    );
  });

  it("Contact Us link from the side nav should be working", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_2(
      this.locator.contactUs,
      this.locator.contactUsVerifyingText
    );
  });

  // it("Staff link from the side nav should be working", function () {
  //   sideNav.getSideNav().click();
  //   sideNav.verifyingSideNav().should("be.visible");
  //   cy.clickAndVerifyFromSideNav_2(
  //     this.locator.staff,
  //     this.locator.staffVerifyingText
  //   );
  // });

  it("Facebook link from the side nav should be working", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_1(
      this.locator.facebook,
      this.locator.facebookVerifyingText
    );
  });

  it("Twitter link from the side nav should be working", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_1(
      this.locator.twitter,
      this.locator.twitterVerifyingText
    );
  });

  it("Instagram link from the side nav should be working", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_1(
      this.locator.instagram,
      this.locator.instagramVerifyingText
    );
  });

  it("Youtube link from the side nav should be working", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_1(
      this.locator.youtube,
      this.locator.youtubeVerifyingText
    );
  });

  it("Terms of use link from the side nav should be working", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_1(
      this.locator.termsOfUse,
      this.locator.termsOfUseVerifyingText
    );
  });

  it("Privacy policy link from the side nav should be working", function () {
    sideNav.getSideNav().click();
    sideNav.verifyingSideNav().should("be.visible");
    cy.clickAndVerifyFromSideNav_1(
      this.locator.privacyPolicy,
      this.locator.privacyPolicyVerifyingText
    );
  });
});
