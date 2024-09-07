describe('Assertion tests',() => {

    it ('impliciteAssertion', () => {

        cy.visit("https://dev.fms.exfonova.com/")
        //const text = cy.xpath("//h1[@id='kc-page-title']").invoke('text')
        //cy.log(text)

        // cy.get("h1[id='kc-page-title']")
        // .should('be.visible')
        // .invoke('text').then((text) => {
        //   const campaign = text
        //   cy.log('campaign',  text)
        // })


        
        cy.get("label[for='username']").should('contain',"Username or email")


        cy.get("#kc-page-title").then (    (x)=>{
            let name=  x.text()
            cy.log(name)
           // expect(name).to.equal("Sign in to your account")
            expect(name).to.contain("Sign in to your account")
            cy.log("testing this case")
 
         })
    })

}
)