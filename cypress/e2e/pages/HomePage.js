const utility = require('../../support/Utiliy.js');
module.exports = {
  elements: {
   clickOnAddIcon: () => cy.get('svg[data-testid="AddIcon"]')
  },
  addTalent() {
    utility.clickElement(this.elements.clickOnAddIcon(), { force: true });
  }
};
