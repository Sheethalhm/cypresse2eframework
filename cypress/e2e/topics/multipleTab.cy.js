describe('Handle tab Test', function(){

    it('Handle tab Test', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows');

        cy.get('.example > a').invoke('removeAttr', 'target').click()

        cy.get('h3').should('have.text', 'New Window')

    })

    it('Approach 2', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows');

        cy.get('.example > a').then((m)=>{

            let newUrl = m.prop('href');

            cy.visit(newUrl)
        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

    })

    it.only('Approach 3', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows');

        cy.get('.example > a').invoke('attr', 'target', '_self').click()

        cy.get('h3').should('have.text', 'New Window')

    })

})