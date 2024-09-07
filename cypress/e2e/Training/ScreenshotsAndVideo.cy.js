describe('Screenshots', () => {

    it('S1', () => {
        
        cy.login1("user","user");
        cy.screenshot("SuccessLogin")
        cy.xpath("//div[@class='name']").click().screenshot("system")
        cy.xpath("//div[normalize-space()='AutomationRegion']").click()
        cy.xpath("//div[normalize-space()='RTU2_TODnAdhoc']").click()
        cy.xpath("//div[normalize-space()='Edit diagram']").click()
        cy.get("#uploadPhoto").attachFile('map.jpg')
        cy.get("#editPanelSave").click()



    })


})