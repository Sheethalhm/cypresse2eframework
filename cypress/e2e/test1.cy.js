/// <reference types="cypress">

it("Google Search", function(){
    cy.visit("https://google.com")
    cy.get('#W0wltc > .QS5gu').click()
    //cy.get('#APjFqb').type('Automation step by step{Enter}')
    //cy.contains('videos').click()
})

//it("Doodle Search", () => {
    //cy.visit("https://google.com")
//})