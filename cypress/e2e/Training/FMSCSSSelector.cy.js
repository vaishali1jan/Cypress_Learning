
describe('vaishali', function()  {

    it('tets1', function() {
       expect(true).to.equal(true)
       cy.visit('https://dev.fms.exfonova.com')
       //cy.title().should('eq','Sign in to EXFO RFTM')

       cy.get('#username').type("user")
       cy.get('#password').type("user")
       cy.get("[name='login']").click();
       cy.get("button[id='dropdownUser']").contains("Welcome");
       //cy.get("button[id='dropdownUser']").should('have.text'," Welcome  ");
       cy.screenshot("welcome");

       
       
    })


})