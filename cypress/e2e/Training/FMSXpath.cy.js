describe("testxpathplugin", () => {

    it ("test1" , () => {

        cy.visit("https://dev.fms.exfonova.com/")
        cy.title().should('contain',"RFTM")
        cy.get('#username').type("user")
        cy.get('#password').type("user")
        cy.get("[name='login']").click();
        cy.get("button[id='dropdownUser']").contains("Welcome");

        cy.xpath("//button[@id='dropdownApplication']").click();
        cy.xpath("(//li[@class='nav-item'])").should('have.length',2)
        cy.xpath("//mat-sidenav[@id='sidenav']").xpath(("//div[@class='name']")).should('contain',"System")
        
        console.log("vaishali is good girl")
    })
}
)