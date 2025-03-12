describe('Read Excel Test', function(){

    it('Read Excel Test', ()=>{
        const filePath = 'cypress/downloads/Book1.xlsx'
        const sheetName = 'Sheet1'

        cy.readExcel(filePath,sheetName).then((rows) => {
            // Access Cell values
            const firstCellValue = rows[1][0];
            const secondCellValue = rows[1][1];

            cy.log(firstCellValue)
            cy.log(secondCellValue)
        })

    })

    it.only('Read Excel Test', ()=>{
        const filePath = 'cypress/downloads/Book1.xlsx'
        const sheetName = 'Sheet1'

        cy.readExcel(filePath,sheetName).then((rows) => {
            // Access Cell values
            for(let i=1; i< rows.length; i++){
                for(let j=1; j< rows[i].length; j++){
                    cy.log(rows[i][j])
                }
            }

        })

    })

})
