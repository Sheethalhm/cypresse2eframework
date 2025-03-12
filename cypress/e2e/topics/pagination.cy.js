describe('Pagination Test', function(){


    beforeEach('Login', () => {

        cy.visit('https://demo3x.opencartreports.com/admin/index.php?route=common/login');
        cy.get("#input-username").type('demo');
        cy.get('#input-password').type('demo');
        cy.get('button').contains('Login').click();
        cy.get('[href="#collapse4"]').click();
        cy.get('#collapse4 > :nth-child(1) > a').click();

    })

    it('Pagination Test', ()=>{
        // get total num of pages
        cy.get('.row > .text-right').then((ele) => {

            let pageCount
            let myText = ele.text() // Showing 1 to 20 of 26 ( 2 Pages)
            pageCount = myText.substring(myText.indexOf("(")+1, myText.indexOf("Pages")-1)
            cy.log(pageCount)

            for(let p=1; p <= pageCount; p ++){
                if(pageCount>1){
                    cy.get('ul[class="pagination"]>li:nth-child('+p+')').click({force:true})

                    cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
                    .each(($row, index, $rows) =>{
                        cy.wrap($row).within(()=>{
                            cy.get('td:nth-child(3)').then((e) => {
                                cy.log(e.text())
                            })
                        })
                    })
                }
            }

        })
        
    })

    it.only('Pagination Robust Test', () => {
        // Get total number of pages
        cy.get('.row > .text-right').then((ele) => {
            let myText = ele.text();
            let pageCount = parseInt(myText.match(/\((\d+) Pages\)/)[1]); // Extract number
    
            cy.log(`Total Pages: ${pageCount}`);
    
            for (let p = 1; p <= pageCount; p++) {
                if (pageCount > 1) {
                    // Click on the page number
                    cy.get('ul.pagination li').contains(p).click({ force: true });
    
                    // Wait for table to update
                    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('be.visible');
    
                    // Extract & log data from column 3
                    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(($row) => {
                        cy.wrap($row).find('td:nth-child(3)').invoke('text').then((text) => {
                            cy.log(`Row data: ${text}`);
                        });
                    });
                }
            }
        });
    });

})