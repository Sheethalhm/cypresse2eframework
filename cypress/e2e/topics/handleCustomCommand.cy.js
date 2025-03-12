describe('Handle custom command Test', function(){

    it.only('Handle custom command Test', ()=>{
        cy.loginOrangeHrm('Admin','admin123')
        cy.verifyTextContain('.oxd-topbar-header-breadcrumb > .oxd-text','Dashboard')

    })

})