import LoginPOM from "../PageObjects/Login.js"

describe('vaishali', () => {

    it('tets1', () => {


        cy.visit("https://dev.fms.exfonova.com/")

        const ln= new LoginPOM();
        ln.setUsername("user")
        ln.setpassword("user")
        ln.ClickSubmit()
        ln.verifyLogin()
    })


})