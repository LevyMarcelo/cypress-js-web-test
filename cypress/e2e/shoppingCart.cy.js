/// <reference types="Cypress" />

describe('Shopping cart', () => {

  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
  })
  
  it('Finish checkout', () => {
    cy.finishCheckout('Darth', 'Vader', '99999-999')
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  })

  it('Remove cart item', () => {
    cy.removeCartItem()
    cy.get('.cart_item').should('not.exist')
  })
})
