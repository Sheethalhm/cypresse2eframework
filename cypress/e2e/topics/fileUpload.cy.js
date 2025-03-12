describe('File Upload Test', function(){

    it('File Upload Test', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').attachFile('sample.txt')

        cy.get('#file-submit').click()

    })

    it.only('File Upload Rename Test', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').attachFile({filePath:'sample.txt', fileName:'sampleRenamed.txt'})

        cy.get('#file-submit').click()

    })

})
