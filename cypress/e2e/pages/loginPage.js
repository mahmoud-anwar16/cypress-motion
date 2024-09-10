const loginData = require('../../fixtures/login.json');
const utility = require('../../support/Utiliy.js');
module.exports = {
  elements: {
    username: () => cy.get('#email'),
    password: () => cy.get('#password'),
    clickLogin: () => cy.get('button[type="submit"]')
  },

  visitUrl() {
    cy.visit('/');
  },

  login() {
    utility.typeText(this.elements.username(), loginData.username);
    utility.typeText(this.elements.password(), loginData.password);
    utility.clickElement(this.elements.clickLogin());
  }
};
