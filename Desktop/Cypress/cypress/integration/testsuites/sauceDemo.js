
/// <reference types ="Cypress"/>


describe('My Test Suite',function(){

    it ('Test Case-001 : login using standard_user as username and secret_sauce as password',function()
    {
        cy.visit('https://www.saucedemo.com/');
        //test steps to be added here
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
         cy.get('[id="add-to-cart-sauce-labs-backpack"]').click();
         cy.get('[id="add-to-cart-sauce-labs-bike-light"]').click();
         cy.get('[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[id="react-burger-menu-btn"]').click();
        cy.get('[id="logout_sidebar_link"]').click();
    }),
    it('Test Case-002 : login using locked_out_user as username and secret_sauce as password',function(){
        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]')
        .should('have.length',1)
        .should('have.text','Epic sadface: Sorry, this user has been locked out.')

    }),
    it('Test Case-003 : login using problem_user as username and secret_sauce as password',function(){
        cy.get('[data-test="username"]').type('{backspace}');
        cy.get('[data-test="password"]').type('{backspace}');
        cy.get('[data-test="username"]').type('problem_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
                   
    }),
    it('Test Case-004 : login using performance_glitch_user as username and secret_sauce as password',function()
    {
        cy.get('[data-test="username"]').type('performance_glitch_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
         
    })
   
})

 