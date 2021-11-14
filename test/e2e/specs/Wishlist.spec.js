describe('check the initial navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/wishlist')
  })

  it('check banner title', () => {
    cy.contains('.c-commonBannerTitle__span', 'Shopping Wishlist')
    cy.contains('.c-productsTable__emptyCart', 'No products added to wishlist')
  })

  it('Click the button to go to products page', () => {
    cy.get('.c-productsTable__emptyCartWrapper .c-baseButton').click({ force: true })
  })
})
