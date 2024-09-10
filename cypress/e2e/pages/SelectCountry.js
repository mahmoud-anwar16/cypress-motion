const countries = require('../../fixtures/countries.json');
const utility = require('../../support/Utiliy.js');
module.exports = {
  elements: {
    dropDown: () => cy.get('#select-country'),
    select: () => cy.get('#react-select-3-option-54'),
    getStarted: () => cy.get('#onboarding-get-started-btn')
  },

  selectCountry() {
    utility.typeText(this.elements.dropDown(), countries.country);
    utility.clickElement(this.elements.select());
    utility.clickElement(this.elements.getStarted());
  }
};
