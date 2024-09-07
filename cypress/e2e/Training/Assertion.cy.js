describe('Assertion tests',() => {

    // it ('impliciteAssertion', () => {

    //     cy.visit("https://dev.fms.exfonova.com/")
    //     cy.url().should('contain','redirect_uri')
    //    // cy.url().should('include','Fiber')
    //     .should('contain','realm')
    //     .should('include','Fiber')


    //     cy.url().should('contain','auth')
    //    // cy.url().should('include','Fiber')
    //     .and('contain','openid')
    //     .and('include','exfonova')
    //     .and('not.contain','vaishali')

    //     cy.get('#username').type("user")
    //     cy.get('#password').type("user")
    //     cy.get("[name='login']").click();
    //     cy.get("#dropdownInfo").click()


    //     //cy.xpath("//a").should('have.length','6')
    //     const links= cy.xpath("//a").invoke('length')
    //     cy.log(links)
    // })


    it ('ExpliciteAssertion', () => {

        cy.visit("https://dev.fms.exfonova.com/")
        cy.get('#username').type("user")
        cy.get('#password').type("user")
        cy.get("[name='login']").click();
        

        cy.get('.name', { timeout: 10000 }).should('be.visible');

        let ExpLable = "System";

        cy.get(".name").then (    (x)=>{
           let ActHelplbl=  x.text()
           ActHelplbl = ActHelplbl.trim()
           cy.log(ActHelplbl)

           //BDD
           expect(ActHelplbl).to.equal("System")

           //TDD
           assert.equal(ExpLable,ActHelplbl);
           assert.notEqual(ExpLable,"sadadad");

        })
 
    })
}
)