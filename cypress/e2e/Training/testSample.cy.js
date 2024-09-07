describe("abc",()=>{


    it('aaaa',()=>{

         cy.visit("https://www.tutorialspoint.com/selenium/practice/register.php")
         cy.url().should('contain','practice')
         cy.title().should('include','Register')
         cy.get('#firstname').type("vaishali")


    })
})