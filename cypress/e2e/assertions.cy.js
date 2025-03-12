describe('Assertions', () => {
    
    it('Assertions demo', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('get').click()

      cy.get('#query-btn').should('contain','Button')
        .should('have.class','query-btn')
        .should('be.visible')
        .should('be.enabled')

        cy.get('#query-btn').should('contain','Button')
        .and('have.class','query-btn')
        .and('be.visible')
        .and('be.enabled')

        expect(true).to.be.true

        assert.equal(4, 4, 'NOT Equal')
        assert.strictEqual(4, 4, 'NOT Equal')

    })

})