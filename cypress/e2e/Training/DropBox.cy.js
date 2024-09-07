describe('dropbox',()=>{

it("check",()=>{

    cy.login1("user","user")
    cy.get(".fg-icons.menu-item__app-icon", { timeout: 20000 }).click()
    cy.xpath("//a[@routerlink='/TestConfiguration']").click()
    cy.xpath("//a[normalize-space()='PON monitoring 1x32_copy']").click()

    cy.xpath("//div[normalize-space()='Golden Trace OTDR']", { timeout: 20000 }).should('be.visible');

    cy.xpath("(//input[@type='radio'])[3]").check();

    cy.xpath("(//mat-select[@role='combobox'])[4]").click()
    cy.xpath("//span[normalize-space()='5 ns']").click()
    cy.xpath("//input[@formcontrolname='goldenTraceAcquisitionTime']").clear().type("11")

})

it.skip('RB',()=>{

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