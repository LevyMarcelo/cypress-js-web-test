Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('logout', () => {
  cy.get('button[id="react-burger-menu-btn"]').click()
  cy.get('#logout_sidebar_link').click()
})

Cypress.Commands.add('finishCheckout', (firstName, lastName, postalCode) => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('.shopping_cart_link').click()
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type(firstName)
  cy.get('[data-test="lastName"]').type(lastName)
  cy.get('[data-test="postalCode"]').type(postalCode)
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="finish"]').click()
})

Cypress.Commands.add('removeCartItem', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('.shopping_cart_link').click()
  cy.get('.cart_item').should('be.visible')
  cy.get('[data-test="remove-sauce-labs-backpack"]').click()
})
