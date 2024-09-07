
describe("TEstname",()=>{

it('test1',()=>{

    cy.visit('https://automationexercise.com/')
    cy.title().should('contain',"Automation Exerciseffffff")
debugger
    //implicite asse4rtion of should can be acess as below  with and 
    cy.xpath("(//div[@class='features_items'])//div[@class='col-sm-4']").should('have.length',34) 
    let testcaselbl = "Test Cases";

 
    //to have explicite asserttion of expect we need to write java function and then access values from object
    cy.get("div[class='item active'] a[class='test_cases_list'] button[type='button']").then((x)=>{
        let actual= x.text()
        console.log(actual)
        console.log(testcaselbl)

         //Expect BDD stype  
        expect(actual).to.equal(testcaselbl)

        //TDD style
        assert.equal (actual,testcaselbl)
        
    })
})

})


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
        let mypassword= json.password
        cy.login(myuser,mypassword)
        });
  
      //cy.log(myuser)
      //cy.login("user","user")
    })
  })