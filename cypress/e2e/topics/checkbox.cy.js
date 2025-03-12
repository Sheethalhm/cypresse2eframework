describe('Checkbox Test', function(){

    it.only('Handle Checkbox Test', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#cookieChoiceDismiss').click()

        cy.get('#sunday').should('be.visible')

        cy.get('#sunday').check()
        cy.get('#sunday').should('be.checked')
        cy.get('#monday').should('not.be.checked')

        cy.get('input.form-check-input[type="checkbox"]').first().check()
        cy.get('input.form-check-input[type="checkbox"]').last().check()

        cy.get('input.form-check-input[type="checkbox"]').check()   // To check all check boxes
        cy.get('input.form-check-input[type="checkbox"]').uncheck() //To uncheck all checkboxes

    })

})
