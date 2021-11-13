describe('app loads ok', () => {
  it('should load without crashing', function () {
    cy.visit('http://localhost:3000')
  })
})
