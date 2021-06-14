class commonPage {
  clickingLoadMoreButton() {
    return cy.get(".more-results").click();
  }
}

export default commonPage;
