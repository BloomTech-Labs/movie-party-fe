describe("first test", () => {
  it("says movie party", () => {
    cy.visit("http://localhost:3000/")

    cy.contains("movie party")
  })
})

describe('Nav bar', function() {
  it('Routes to login page', function() {
    cy.visit('http://localhost:3000/')

    cy.contains('Login')
      .click()

    cy.url()                  
      .should('include', '/login')

    cy.contains("redux")
    .click()
  })
})