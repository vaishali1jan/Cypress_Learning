


describe('A', () => {



    it('Get_StatusCheck', () => {

        cy.visit('https://automationexercise.com/')
        cy.title().should('contain',"Automation Exercise")
        let a=  cy.getCookie()
        console.log(a)

    })

})