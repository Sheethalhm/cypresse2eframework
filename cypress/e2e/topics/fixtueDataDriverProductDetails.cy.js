import {productDetails} from '../../fixtures/productDetails.json'

describe('Loading and Accessing fixtures Test', function(){

    before(function() {
        cy.fixture('productDetails.json').as('test_data');
    })

    it('Access fixture data Test', ()=>{
        let p = true;
        productDetails.forEach((items) => {
            
            cy.visit('https://www.google.com')
            if(p){
                cy.get('button:contains("Alle akzeptieren")').click();
                p=false;
            }
            cy.get('#APjFqb').clear()
            cy.get('#APjFqb').type(items.product)
        })
    })

    it.only('Using Fixture COmmands', ()=>{

        cy.fixture('productDetails.json').then((dataJson) => {
            dataJson.productDetails.forEach((userData) => {
                cy.log(userData.product)
                cy.log(userData.category)
            })
        })
    })

})