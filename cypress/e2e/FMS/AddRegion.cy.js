describe('Assertion tests',() => {

    it ('impliciteAssertion', () => {

        cy.visit("https://dev.fms.exfonova.com/")
        cy.url().should('contain','redirect_uri')
       // cy.url().should('include','Fiber')
        .should('contain','realm')
        .should('include','Fiber')


        cy.url().should('contain','auth')
       // cy.url().should('include','Fiber')
        .and('contain','openid')
        .and('include','exfonova')
        .and('not.contain','vaishali')

        cy.get('#username').type("user")
        cy.get('#password').type("user")
        cy.get("[name='login']").click();
        cy.xpath("//mat-sidenav[@id='sidenav']").xpath(("//div[@class='name']")).debug()
        cy.xpath("//mat-sidenav[@id='sidenav']").xpath(("//div[@class='name']")).click()

        

        cy.xpath("//button[contains(@aria-label,'Add a new Region')]").should('be.visible').click()
        cy.get("#name").type("Automation Region")
        cy.get("#description").type("hHis region created by automation cypress")
        cy.xpath("//button[contains(@aria-label,'Add a new region')]").click()

        cy.xpath("//td[contains(@aria-label,'Automation Region')]").should('exist')


    })
}
)