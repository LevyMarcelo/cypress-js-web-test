describe('Logout', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.login('standard_user', 'secret_sauce')
  })

  it('Logout successfully', () => {
    cy.logout()
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
})
