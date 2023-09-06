/// <reference types="Cypress" />

describe('Shopping cart', () => {

  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
  })
  
  it('Finish checkout', () => {
    cy.finishCheckout('Darth', 'Vader', '99999-999')
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  })

  it('Add to cart', () => {
    cy.addToCart()
    cy.get('.cart_item').should('be.visible')
  })

  it('Remove cart item', () => {
    cy.addToCart()
    cy.removeCartItem()
    cy.get('.cart_item').should('not.exist')
  })
})
