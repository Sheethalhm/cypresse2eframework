before(function(){
    cy.fixture('example.json').as('test_data');
})

it('Read files using fixture', function() {

    cy.fixture('example.json').then((data) => {
        cy.log(data.name + ' ' + data.email + ' ' + data.body)
    });

    cy.log(this.test_data.name);
})

it('Read files using readFile()', function() {

    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })
})

it('Write file Demo', function() {

    cy.writeFile('./cypress/fixtures/sample.txt', 'Hello \n')

    cy.writeFile('./cypress/fixtures/sample.txt', 'I am learning Cypress', {flag: 'a+'})
})