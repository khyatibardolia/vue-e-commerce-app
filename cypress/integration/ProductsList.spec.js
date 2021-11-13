describe('app loads ok', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000')
  })

  it('Should add the first product to the cart and disable the button', () => {
    cy.get('#addToCartBtn').click({ force: true })
      .should('contain.class', '-disableBtn')
  })

  it('Should add the first product to the wishlist', () => {
    cy.get('#addToWishlistBtn').click({ force: true })
      .should('contain.class', '-isSelected')
  })

  it('Should remove the first product from the wishlist', () => {
    cy.get('#addToWishlistBtn').dblclick({ force: true })
      .should('not.contain.class', '-isSelected')
  })
})
