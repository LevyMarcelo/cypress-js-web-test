/// <reference types="Cypress" />

describe('Login', () => {

  it('Login successfully', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('.title').should('have.text', 'Products')
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })

  it('Login failed - invalid user', () => {
    cy.login('test', 'secret_sauce')
    cy.get('[data-test="error"]')
      .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Login failed - invalid password', () => {
    cy.login('standard_user', 'test')
    cy.get('[data-test="error"]')
      .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Login failed - empty username', () => {
    cy.login('{ESC}', 'secret_sauce')
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
  })

  it('Login failed - empty password', () => {
    cy.login('standard_user', '{ESC}')
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
  })

  it('Login failed - empty username and password', () => {
    cy.visit('/')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
  })
})
