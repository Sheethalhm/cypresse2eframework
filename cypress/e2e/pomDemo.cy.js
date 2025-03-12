import { LoginPage } from "./pages/LoginPage"

const loginPage = new LoginPage()

describe('Assertions', () => {

    beforeEach(function(){
        
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Login Test 1', () => {
        
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.contains('Dashboard')
        
    })

    it('Login Test 2', () => {
        
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.contains('Dashboard')
        
    })

})