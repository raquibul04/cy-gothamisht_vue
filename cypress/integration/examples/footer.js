///<reference types="cypress"/>

describe("This file will hold all the test scripts involving the footer", function () {
  beforeEach(function () {
    cy.visit(Cypress.env("url"));
    cy.fixture("footer").then(function (locator) {
      this.locator = locator;
    });
  });

  it("Advertising link from the footer should be working", function () {
    cy.clickAndVerifyFromFooter_1(
      this.locator.advertising,
      this.locator.advertisingVerifyingText
    );
  });
  it("Contact Us link from the footer should be working", function () {
    cy.clickAndVerifyFromFooter_2(
      this.locator.contactUs,
      this.locator.contactUsVerifyingText
    );
  });
  it("Rss Feed link from the footer should be working", function () {
    cy.clickAndVerifyFromFooter_1(
      this.locator.rssFeed,
      this.locator.rssFeedVerifyingText
    );
  });
  it("Contact Us link from the footer should be working", function () {
    cy.clickAndVerifyFromFooter_2(
      this.locator.staff,
      this.locator.staffVerifyingText
    );
  });
  it("Facebook link from the footer should be working", function () {
    cy.clickAndVerifyFromFooter_1(
      this.locator.facebook,
      this.locator.facebookVerifyingText
    );
  });
  it("Twitter link from the footer should be working", function () {
    cy.clickAndVerifyFromFooter_1(
      this.locator.twitter,
      this.locator.twitterVerifyingText
    );
  });
  it("Instagram link from the footer should be working", function () {
    cy.clickAndVerifyFromFooter_1(
      this.locator.instagram,
      this.locator.instagramVerifyingText
    );
  });
  it("Youtube link from the footer should be working", function () {
    cy.clickAndVerifyFromFooter_1(
      this.locator.youtube,
      this.locator.youtubeVerifyingText
    );
  });

  it("Terms of Use link from the footer should be working", function () {
    cy.clickAndVerifyFromFooter_1(
      this.locator.termsOfUse,
      this.locator.termsOfUseVerifyingText
    );
  });
  it("Privacy Policy link from the footer should be working", function () {
    cy.clickAndVerifyFromFooter_1(
      this.locator.privacyPolicy,
      this.locator.privacyPolicyVerifyingText
    );
  });
});
