describe('Hooks', () => {

    before('Login', () => {
        
        cy.login1("user","user");
    })

    it('tets1', () => {
        
        cy.xpath("//div[@class='name']").click()
        cy.xpath("//div[normalize-space()='AutomationRegion']").click()
        cy.xpath("//div[normalize-space()='RTU2_TODnAdhoc']").click()
        cy.xpath("//div[normalize-space()='Edit diagram']").click()
        cy.get("#uploadPhoto").attachFile('map.jpg')
        cy.get("#editPanelSave").click()

    })


    it('tets2', () => {
        cy.get("#dropdownInfo").click()

    })

    after('Logout', () => {
        
        cy.get("#dropdownUser").click()
        cy.xpath("//span[@class='fg-icons menu-item__user-logout-icon']").click()
    })


})