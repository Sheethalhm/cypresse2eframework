describe('Navigation Test', function(){

    it('Navigation Test', ()=>{

        //cy.visit('/')

        cy.visit(Cypress.config('baseUrl'))

        cy.visit('/index.php?route=account/login')

        cy.go('back') //go to prev page

        cy.go('forward') // go to next page

        cy.go(-1) //go to prev page

        cy.go(1) // go to next page

        cy.reload() // refresh the page

    })

})
