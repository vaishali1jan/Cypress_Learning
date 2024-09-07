/// <reference types="cypress"/>
 
beforeEach('GotoSite',()=>{
    Cypress.config('baseUrl', 'https://www.amazon.in/');
   // cy.visit(Cypress.config('baseUrl'))
    cy.visit('/')
})

it('test1',()=>{
cy.get('.hm-icon.nav-sprite').click()
cy.contains("Digital Content and Devices").click()
cy.contains("Kindle E-Readers & eBooks").click()
})

