describe('Dropdown scenario', function(){

    it('Select Dropdown Test By Value', ()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country').select('Germany').should('have.value', 'Germany')

    })

    it('Dropdown Test without select element', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Germany').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text', 'Germany')

    })

    it.skip('Dropdown', ()=> {

        cy.visit('https://google.com')

        cy.get('#L2AGLb > .QS5gu').click()

        cy.get('.gLFyf').type('Cypress Automation')

        cy.get('div.wM6W7d > span').should('have.length', 13)

        cy.get('div.wM6W7d > span').each(($el, index, $list) =>{
            if($el.text() == 'cypress automation course'){
                cy.wrap($el).click()
            }
        })
    })

    it('Auto Suggestive', ()=> {
        
        cy.visit('https://www.wikipedia.org')

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-link').contains('Delhi Metro').click()

    })
})