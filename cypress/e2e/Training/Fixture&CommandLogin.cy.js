describe('template spec', () => {
  it('passes', () => {

    cy.fixture("example.json").then(json => {
      let myuser = json.username
      let mypassword= json.username
      cy.login(myuser,mypassword)
      });

    //cy.log(myuser)
    //cy.login("user","user")
  })


  it('test2', () => {

    cy.fixture("example.json").then(json => {
      let myuser = json.username
      let mypassword= json.username
      cy.login(myuser,mypassword)
      });

    //cy.log(myuser)
    //cy.login("user","user")
  })
})