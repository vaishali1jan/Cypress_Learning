class LoginPOM
{
    setUsername(username)
    {
    cy.get('#username').type(username)
    }

    setpassword(password)
    {
    cy.get('#password').type(password)
    }

    ClickSubmit()
    {
    cy.get("[name='login']").click();
    }

    verifyLogin()
    {
        cy.get('#dropdownUser', { timeout: 20000 }).should('be.visible');
    }
}

export default LoginPOM;