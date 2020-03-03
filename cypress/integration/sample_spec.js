describe("first test", () => {
  it("doesnt match", () => {
    cy.visit("http://localhost:3000/")

    cy.contains("p")
  })
})