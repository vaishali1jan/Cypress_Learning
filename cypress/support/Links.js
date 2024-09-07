Cypress.Commands.add('ClickLinks', (label) => {       
    cy.get('a').contains(label).click();
    })