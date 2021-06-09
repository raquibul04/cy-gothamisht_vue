class tagPage {
  clickingLoadMoreButton() {
    return cy.get(".more-results").click();
  }
}

export default tagPage;
