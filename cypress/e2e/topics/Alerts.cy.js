describe('Alerts Test', () => {
    
    it('Simple JS Alert Test', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#cookieChoiceDismiss').click()

        cy.get('[onclick="myFunctionAlert()"]').click()

        cy.on('window:alert',(r)=>{
            expect(r).to.contain('I am an alert box!')
        })
    })

    it('Confirm Alert Test', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#cookieChoiceDismiss').click()

        cy.get('[onclick="myFunctionConfirm()"]').click()

        cy.on('window:confirm',(r)=>{
            expect(r).to.contain('Press a button!')
        })
    })

    it('Confirm Alert Test - Click OK button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('[onclick="jsConfirm()"').click()

        cy.on('window:confirm',(r)=>{
            expect(r).to.contain('I am a JS Confirm')
        })

        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    it('Confirm Alert Test - Click Cancel button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('[onclick="jsConfirm()"').click()

        cy.on('window:confirm',(r)=>{
            expect(r).to.contain('I am a JS Confirm')
        })

        cy.on('window:confirm', ()=>false)

        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })

    it('Prompt Alert Test - Click OK button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Hello Prompt')
        })

        cy.get('[onclick="jsPrompt()"]').click()

        cy.get('#result').should('have.text', 'You entered: Hello Prompt')
       
    })

    it('Prompt Alert Test - Click Cancel button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(null);
        });

        cy.get('[onclick="jsPrompt()"]').click()

        cy.get('#result').should('have.text', 'You entered: null')
       
    })

    it.only('Authentication Pop up', () => {

        cy.visit('https://the-internet.herokuapp.com/basic_auth', 
            {auth: {
                    username: 'admin',
                    password: 'admin'
                    }
            })

        cy.get('p').should('have.text', '\n    Congratulations! You must have the proper credentials.\n  ')
        
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
       
    })

})