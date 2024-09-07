describe('uploadfile', () => {

    it('tets1', () => {
        
        cy.login1("user","user");
        cy.xpath("//div[@class='name']").click()
        cy.xpath("//div[normalize-space()='AutomationRegion']").click()
        cy.xpath("//div[normalize-space()='RTU2_TODnAdhoc']").click()
        cy.xpath("//div[normalize-space()='Edit diagram']").click()
        cy.get("#uploadPhoto").attachFile('map.jpg')
        cy.get("#editPanelSave").click()



    })


})