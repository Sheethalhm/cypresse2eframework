describe('Assertions', () => {
    
    it('Implicit Assertions Test', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
      cy.url().should('include', 'orange')

      cy.url().should('not.include', 'pink')

      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.url().should('contain', 'opensource-demo.')

      cy.title().should('eq','OrangeHRM')

      cy.get('.orangehrm-login-branding > img').should('be.visible')

      cy.get('.oxd-button').should('contain.text', 'Login')

      cy.get('.oxd-button').should('have.text', ' Login ')
    })

    it('Negative Login Scenario Test', ()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.xpath("//input[@name='username']").type('Admin')
      cy.xpath("//input[@name='password']").type('admin13').type('{enter}')

      cy.get('.oxd-alert-content > .oxd-text').should('contain.text', 'Invalid credentials')
    })


    it('Explicit Assertion  Test', ()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.xpath("//input[@name='username']").type('Admin')
      cy.xpath("//input[@name='password']").type('admin123').type('{enter}')

      let expectedDropdownName = 'olis olol'

      cy.get('.oxd-userdropdown-name').then((x) => {
        let actualDropdownName = x.text()
        // BDD style
        expect(actualDropdownName).to.equal(expectedDropdownName)

        //TDD style
        assert.equal(actualDropdownName, expectedDropdownName)
      })
    })

})