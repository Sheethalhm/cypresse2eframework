import { faker } from "@faker-js/faker";

describe('Header Cookies Test', function(){

    let accessToken;

    before(()=>{
        const accessTokenBody = {
            "clientName": faker.person.fullName(),
            "clientEmail": faker.internet.email()
        }

        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers:{
                'Content-Type': 'application/json'
            },
            body: accessTokenBody
        }).then((response) => {
            expect(response.status).to.equal(201)

            accessToken = response.body.accessToken;
            cy.log('Access Token is:', accessToken)

        })
    })

    it.only('Header Cookies Test', ()=>{
        cy.log('Access Token is:', accessToken)
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders',
            headers:{
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer '+accessToken
            },
            body: {
                "bookId" : 1,
                "customerName": faker.person.firstName()

            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.created).to.eq(true)
        })
        
    })

})