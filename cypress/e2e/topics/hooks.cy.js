describe('Hooks Demo Test', function(){

    before(() => {
        cy.log('Inside before method')
    })

    after(() => {
        cy.log('Inside after method')
    })

    beforeEach(() => {
        cy.log('Inside beforeEach method')
        cy.visit('https://tutorialsninja.com/demo')
    })

    afterEach(() => {
        cy.log('Inside afterEach method')
    })

    it('Hooks Test 1', ()=>{
        cy.log('Inside Hooks Test 1 method')
        cy.get(':nth-child(2) > .product-thumb > .caption > h4 > a').click()
    })

    it('Hooks Test 2', ()=>{
        cy.log('Inside Hooks Test 2 method')
    })

    it('Hooks Test 3', ()=>{
        cy.log('Inside Hooks Test 3 method')
    })

    it('Hooks Test 4', ()=>{
        cy.log('Inside Hooks Test 4 method')
    })

})