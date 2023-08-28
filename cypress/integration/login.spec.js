/// <reference types="Cypress" />

describe('Login', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login successfully', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('.app_logo').should('have.text', 'Swag Labs')
  })
})
