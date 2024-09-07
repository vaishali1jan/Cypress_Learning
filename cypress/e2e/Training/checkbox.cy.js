describe('AllElements',()=>{
    it('RB',()=>{

        cy.login1("user","user")
        cy.get(".fg-icons.menu-item__app-icon").click()
        cy.xpath("//a[@routerlink='/TaskDashboard']").click()

        cy.get(".tasks-title-label", { timeout: 10000 }).should('be.visible');
        cy.xpath("(//input[@class='mdc-checkbox__native-control mdc-checkbox--selected'])[1]").should('be.checked')
        cy.xpath("(//input[@class='mdc-checkbox__native-control mdc-checkbox--selected'])[2]").should('be.checked')
        // cy.xpath("(//input[@class='mdc-checkbox__native-control mdc-checkbox--selected'])[2]").uncheck()
        // cy.get(".tasks-title-label", { timeout: 10000 }).should('be.visible');
        //cy.xpath("(//input[@class='mdc-checkbox__native-control mdc-checkbox--selected'])[2]").should('not.be.checked')
        cy.get("input[type='checkbox']").uncheck()
        cy.get("input[type='checkbox']").first().check().should('be.checked')
    })
})