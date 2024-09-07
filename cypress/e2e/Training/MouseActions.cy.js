describe("mouseOperations",()=>{


beforeEach("Mouseover",()=>{

cy.login1("user","user")

})


it("Mouseover",()=>{

    cy.xpath("//span[normalize-space()='Remote Test Units']").click()
    cy.wait(4000)
    cy.get('.excel-download > .mat-mdc-tooltip-trigger > .mat-mdc-button-touch-target').trigger('mouseover')
    // cy.xpath("//div[@class='mdc-tooltip__surface mdc-tooltip__surface-animation']").then((e)=>{
    //     cy.log(e.text());
    // })
})

it("Mouseover_tooltip",()=>{

        cy.xpath("//span[normalize-space()='Remote Test Units']").click()
        cy.wait(4000)
        cy.xpath("//button[@aria-label='Download Registered and Attached RTUs in XLSX']").trigger('mouseover')
        cy.contains("Attached").should('be.visible')
})

it("Mouseover_scroll",()=>{

    cy.xpath("//span[normalize-space()='Remote Test Units']").click()
    cy.wait(2000)
    cy.xpath("//a[normalize-space()='69-OTH-2407']").click();
    cy.wait(2000)
    cy.xpath("//span[normalize-space()='Optical Routes']").click()
    cy.wait(2000)
    cy.get("tbody tr:nth-child(5) td:nth-child(1) span:nth-child(1) a:nth-child(1)").then((e) =>{
       // e.scrollIntoView({duration:2000})
        cy.log(e.text())
    })
    


})

})