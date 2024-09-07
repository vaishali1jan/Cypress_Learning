describe('NewAlarmTab',()=>{
    it('tst1',()=>{

        cy.login1("user","user")
        cy.xpath("//span[normalize-space()='Remote Test Units']").click()
        cy.wait(2000)
        cy.go("back")

        //cy.xpath("//a[normalize-space()='69-OTH-2407']").click();
       // cy.xpath("//i[@class='mat-mdc-tooltip-trigger material-icons kebab-item dots']").click()
        //cy.xpath("//div[@class='dropdown-menu dropdown-menu-right edition-panel__kebab-dropdown ng-star-inserted show']//button[6]").click()
    
    //with invoke we can remove target likn so page open in same tab and perform action on it and  cy.go back can move to previous page

    })
})