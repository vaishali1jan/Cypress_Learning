
describe('A', () => {



    // it.skip('Get_StatusCheck', () => {

    //     cy.request('GET', "https://dog.ceo/api/breeds/list/all").its('status').should('equal', 200);
    //    //cy.clearAllCookies()

    // })

    it('Get_ResCheck', () => {

        cy.request('GET', "https://jsonplaceholder.cypress.io/comments").then((res) => {
            console.log(res.body)
            expect(res.status).to.eq(200)
            expect(res.body).has.length(500)
        })

    })




    it('myAPITestPOST', () => {

        cy.request(
            {
                method: 'POST',
                url: "https://jsonplaceholder.cypress.io/comments",
                body: {
                    name: "Vaishali",
                    email: "test@test.com",
                    body: "is json object"
                }

            }).then((res) => {
                console.log(res.body)
                expect(res.status).to.eq(201)
                expect(res.body.name).to.eq("Vaishali")
                console.log(res.body.id)
                //.its('status').should('equal',200);
            })  
    })
})