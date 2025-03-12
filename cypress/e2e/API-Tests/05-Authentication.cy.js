describe('Authentication Test', function(){

    it('Authentication Test', ()=>{

        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                user: 'postman',
                pass: 'password'
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.authenticated).to.equal(true)

        })
    })

    it('Digest Authentication Test', ()=>{

        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                user: 'postman',
                pass: 'password',
                method: 'degest'
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.authenticated).to.equal(true)

        })
    })

    it.skip('API Key Test', ()=>{

        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            qs: {
                //API keys are passed as query params
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.authenticated).to.equal(true)

        })
    })

})