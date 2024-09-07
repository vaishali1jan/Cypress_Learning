Cypress.Commands.add('login1', (username, password) => {       
    
    

    cy.visit("https://dev.fms.exfonova.com/")
    cy.url().should('contain','redirect_uri')
    
    
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get("[name='login']").click();
    cy.get('#dropdownUser', { timeout: 20000 }).should('be.visible');
    
    })