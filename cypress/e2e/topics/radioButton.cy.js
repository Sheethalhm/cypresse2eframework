describe('Radio Button Test', function(){

    it.only('Handle Radio Button Test', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#cookieChoiceDismiss').click()

        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        cy.get('#male').check()
        cy.get('#male').should('be.checked')
        cy.get('#female').should('not.be.checked')

    })

})
