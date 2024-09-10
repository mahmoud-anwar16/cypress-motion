const utility = require('../../support/Utiliy.js');

module.exports = {
    elements: {
    
product:()=>cy.get('[data-cy="product-selection-workglobal-option"]'),

onBoarding:()=>cy.get('.sc-iCoHzw.cbHuaw')

    },
selectProduct(){
    utility.clickElement(this.elements.product());
    utility.clickElement(this.elements.onBoarding());
}

};