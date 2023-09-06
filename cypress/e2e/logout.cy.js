/// <reference types="Cypress" />

describe('Logout', () => {

  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
  })

  it('Logout successfully', () => {
    cy.logout()
    cy.get('#login_credentials > h4').should('have.text', 'Accepted usernames are:')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
})
