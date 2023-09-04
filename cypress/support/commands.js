Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('logout', () => {
  cy.get('button[id="react-burger-menu-btn"]').click()
  cy.get('#logout_sidebar_link').click()
})
