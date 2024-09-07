
describe('A', () => {


    var TOKEN;
    it('GetToken', () => {
        cy.request(
            {
                method: 'POST',
                url: "https://auth.endtoend.fms.exfonova.com/auth/realms/Fiber/protocol/openid-connect/token",
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                body: {
                    client_id: "fg-topologyapi",
                    username: "user",
                    password: "User#1234",
                    grant_type: "password",
                    client_secret: "493f468b-9ceb-4139-8910-89d7b178c58f"
                }
            }).then((res) => {
                cy.log(JSON.stringify(res.body))
                expect(res.status).to.eq(200)
                expect(res.body.token_type).to.eq("Bearer")
                expect(res.body.expires_in).to.eq(900)
                TOKEN = res.body.access_token
            })
        console.log(TOKEN)
    })

    let SiteID;
    it('CreateSite', () => {
        cy.request(
            {
                method: 'POST',
                url: "https://api.endtoend.fms.exfonova.com/api/topology/sites/",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "Bearer " + TOKEN
                },
                body: {
                    name: "VPMSite2",
                    description: "End"
                }
            }).then((res) => {
                console.log(res.body)
                expect(res.status).to.eq(201)
                SiteID = res.body.site.id
            })
        })

    it('GetSite', () => { 
        cy.request(
            {
                method: 'GET',
                url: "https://api.endtoend.fms.exfonova.com/api/topology/sites/" + SiteID,
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded",
                    'Authorization': "Bearer " + TOKEN
                }
            }).then((res) => {
                console.log(res.body)
                expect(res.status).to.eq(200)
                expect(res.body.site.name).to.eq("VPMSite2")
                console.log(SiteID)
            })
    })

})
