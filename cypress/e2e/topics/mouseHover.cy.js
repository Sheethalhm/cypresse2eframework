describe('Mouse Hover scenario', function(){

    it('Mouse Hover Test', ()=>{
        cy.visit('https://tutorialsninja.com/demo/')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a').click()

        //cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a').click('(force: true')
    })

    it('Double click Test', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#cookieChoiceDismiss').click()

        cy.get('[ondblclick="myFunction1()"]').trigger('dblclick').click()

        //cy.get('#HTML10 > .widget-content > button')

    })

    it('IFrame Doubleclick', ()=> {
        cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick')

        cy.get('#accept-choices').click()

        cy.frameLoaded('#iframeResult')

        cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').trigger('dblclick').click()

        cy.iframe('#iframeResult').find('#demo').should('include.text','Hello World')
    })


    it('Right click', ()=> {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-list').should('be.visible')
    })

    it('Drag and Drop', ()=> {
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#draggable').should('be.visible')

        cy.get('#droppable').should('be.visible')

        cy.get('#draggable').drag('#droppable', {force: true})
        
    })

    it('Scrolling feature', ()=> {
        cy.visit('https://scroll.in/tag/Swiggy')

        cy.get('.close-icon').click()

        cy.get('.search-next').scrollIntoView({duration:2000})

        cy.get('.search-next').should('be.visible')
        
    })

    it('Scrolling feature', ()=> {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#cookieChoiceDismiss').click()

        cy.get('#comboBox').click()
        cy.get('#comboBox').scrollIntoView().should('be.visible')
        cy.get('#dropdown > :nth-child(10)').scrollIntoView({duration:1500}).click()

        cy.get('#comboBox').should('have.value', 'Item 10')
    })


    it.only('Scrolling feature:  Page up and down', ()=> {
        cy.visit('https://scroll.in/tag/Swiggy')
        cy.get('.close-icon').click()
        cy.scrollTo('bottom')
        
    })
})