describe('check the initial navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cart')
  })

  it('check banner title', () => {
    cy.contains('.c-commonBannerTitle__span', 'Shopping Cart')
    cy.contains('.c-productsTable__emptyCart', 'Your Cart is empty')
  })

  it('Click the button to go to products page', () => {
    cy.get('.c-productsTable__emptyCartWrapper .c-baseButton').click({ force: true })
  })
})
