import { AddressPage } from '../pages/AddressPage'
import {LoginPageLambdaWeb} from '../pages/LoginPageLambdaWeb'

const lp = new LoginPageLambdaWeb()
const ap = new AddressPage()

describe("Login Page", () =>{

    let addressDataValue;

    beforeEach(function(){
        
        cy.visit(Cypress.env('loginPageUrl'))
        lp.typeUserName(Cypress.env('USERNAME'))
        lp.typePassword(Cypress.env('PASSWORD'))
        lp.clickLogin()

         cy.fixture('address.json').as('addressDataValue')
    })
    
    it.only('Login Test', ()=>{

        cy.get('@addressDataValue').then((data)=>{
            
            data.add.forEach((address) =>{
    
                ap.createDefaultAddress(
                    address.first_name,
                    address.last_name,
                    address.company,
                    address.address1,
                    address.address2,
                    address.city,
                    address.post_code,
                    address.country,
                    address.region
                )
                ap.verifyAddressAddedSucessfully();
                ap.navigateToAccountPage();
            })
        })
    })
})