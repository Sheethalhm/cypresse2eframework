describe('Viewport Test', function(){

    it('Viewport Test by device name', ()=>{
        cy.viewport('iphone-6')
        cy.visit('/')
    })

    it('Viewport Test by resolution', ()=>{
        cy.viewport(1280, 720)
        cy.visit('/')
    })

})
