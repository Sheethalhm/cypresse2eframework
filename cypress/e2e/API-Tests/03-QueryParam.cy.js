describe('Query Params Test', function(){

    it.only('Query Params Test', ()=>{

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: {
                page: 2
            }
        })
        .its('status')
        .should('equal', 200)
    })

})