/// <reference types="cypress" />


describe('My First Test', () => {
  it('Visit the home page', () => {
    cy.visit('http://localhost:5173/login')

    cy.get("input[id='email1']").type('User1@mail.fr')
    cy.get("input[id='password1']").type('User1')


    cy.contains('Connexion').click()
  })
})

