describe('template spec', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
  });
  it('passes', () => {
    cy.visit('https://example.cypress.io');
  });
});
