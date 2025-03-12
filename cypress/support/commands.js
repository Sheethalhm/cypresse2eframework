// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload'; 

require('cypress-downloadfile/lib/downloadFileCommand');

import 'cypress-iframe';

require('@4tw/cypress-drag-drop')

Cypress.Commands.add('loginOrangeHrm', (email, password) => {

   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   cy.get('input[name="username"]').type(email)
   cy.get('input[name="password"]').type(password)
   cy.get('button[type="submit"').click()
 })

 Cypress.Commands.add('verifyTextContain', (locator, textValue) => {
    cy.get(locator).should('have.text', textValue)
 })

 const XLSX = require('xlsx')
 Cypress.Commands.add('readExcel', (filePath, sheetName) => {
   return cy.readFile(filePath, 'binary').then((fileContent) => {
      const workbook = XLSX.read(fileContent, {type: 'binary'})
      const worksheet = workbook.Sheets[sheetName]
      return XLSX.utils.sheet_to_json(worksheet, {header:1})
   })
 })