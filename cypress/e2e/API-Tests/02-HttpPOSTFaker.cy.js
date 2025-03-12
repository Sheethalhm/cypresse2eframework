import { faker } from '@faker-js/faker';

describe('Different ways to create a POST call ', function(){

    const bodyValue = {
        name: faker.person.fullName(),
        job: faker.person.jobTitle()
    }
    it('Http POST Test', ()=>{

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: bodyValue
        }).then((response) => {
            expect(response.status).to.equal(201)

            const body =  response.body;

            expect(body).property('name').to.equal(bodyValue.name)
            expect(body).property('job').to.equal(bodyValue.job)

            cy.log(JSON.stringify(body))
        })
    })

    it.only('Using Fixture Test', ()=>{
        cy.fixture('userDetail.json').then((user) =>{

            const data = user;
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: data
            }).then((response) => {
                expect(response.status).to.equal(201)
    
                const body =  response.body;
    
                expect(body).property('name').to.equal(data.name)
                expect(body).property('job').to.equal(data.job)
    
                cy.log(JSON.stringify(body))
            })
        })
    })
})
