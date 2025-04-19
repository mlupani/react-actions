/* global cy */

describe('Heroes app', () => {
    it('frontend can be opened', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Login')
    })
})
