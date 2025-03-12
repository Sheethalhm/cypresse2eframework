describe('API Test', function(){

    it('HTTP GET Test', ()=>{

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200)
    })

    it('HTTP POST Test', ()=>{

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: "The POST method",
                body: "This is sample Body",
                userId: 2320
            }
        })
        .its('status')
        .should('equal', 201)
    })


    it('Alias Test', ()=>{

        cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')

        cy.get('@comments').should((response) => {
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    })

})