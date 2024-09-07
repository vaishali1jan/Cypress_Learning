describe("tables",()=>{

    beforeEach("Login",()=>{
        cy.login1("user","user")
        
    })

    
    //read data from specific row and column 
    it("Print specific cell",()=>{
        
        cy.xpath("//span[normalize-space()='Remote Test Units']").click()


        cy.xpath("//a[normalize-space()='69-OTH-2407']").click();
        cy.wait(2000)
        cy.xpath("//span[normalize-space()='Optical Routes']").click()
        cy.wait(2000)
        cy.get("table[class='table table-rtu-links']>cdk-virtual-scroll-viewport>div>tbody>tr").should('have.length','4')
        cy.get("table[class='table table-rtu-links']>thead>tr>th").should('have.length','9')

        cy.get("table[class='table table-rtu-links']>cdk-virtual-scroll-viewport>div>tbody>tr:nth-child(4)>td:nth-child(3)").should('have.text','1647153')
    })


    //read data from ALL row and column 
    it("Print all cells",()=>{
        
        cy.xpath("//span[normalize-space()='Remote Test Units']").click()
        cy.xpath("//a[normalize-space()='69-OTH-2407']").click();
        cy.wait(2000)
        cy.xpath("//span[normalize-space()='Optical Routes']").click()
        cy.wait(2000)
        cy.get("table[class='table table-rtu-links']>cdk-virtual-scroll-viewport>div>tbody>tr")
           .each( ($singlerow, index, $allRows)=>{

            cy.wrap($singlerow).within( ()=> {
                cy.get("td:nth-child(1)").then((e)=>{
                    cy.log(e.text());
                    if(e.text()=="test1")
                    {
                    e.click();
                    }


                })



                // cy.get("td").each(($singlecol , index , $allcols)=>{
                //     if($singlecol.text() == "No monitoring in the last 7 days")
                //     cy.log($singlecol.)
                //})

            })

         })       //cy.get("table[class='table table-rtu-links']>thead>tr>th").should('have.length','9')
        //cy.get("table[class='table table-rtu-links']>cdk-virtual-scroll-viewport>div>tbody>tr:nth-child(4)>td:nth-child(3)").should('have.text','1647153')
    })
})