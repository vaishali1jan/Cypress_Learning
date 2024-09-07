describe('API_tests', () => {

    it('test1_API', () => {
        cy.intercept({
            method: 'GET',
            url: 'http://10.144.228.11:8089/api/system/loginBanner'
        },
            {
                statusCode: 200,
                body: { "isEnabled": true, "message": "BAnner updated by cypress" }
            }).as('loginBanner')
        cy.visit('http://10.144.228.11:8089')
        cy.wait('@loginBanner')
        cy.get('.login__banner').should('have.contain', 'cypress')
    })


    it('test1', () => {
        cy.visit('http://10.144.228.11:8089')
        cy.get('.login__banner').should('have.contain', 'cypress')
    })
})