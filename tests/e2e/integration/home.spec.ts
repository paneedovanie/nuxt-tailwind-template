it('adds todos', () => {
  cy.visit('/')
  cy.get('h2').should('contain', 'Welcome to your Nuxt Application')
})