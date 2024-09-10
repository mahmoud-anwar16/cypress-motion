
const talentsData = require('../fixtures/talentsData.json');

class Utility {
    clickElement(element, options = {}) {
      element.click(options);
    }
  
    typeText(element, text, options = {}) {
      element.type(text, options);
    }
  
    selectDate(datePicker, editButton, dateInput, date, okButton) {
        datePicker.click();
        editButton.should('be.visible').click();
  
        dateInput.last().should('be.visible').then(($input) => {
          cy.wrap($input)
            .focus()
            .type(date)
            .trigger('input', { force: true })
            .trigger('change', { force: true });
        });
        okButton.should('be.visible').click();
      }


     validateOnboardingMessage(messageElement) {
       
        const expectedEmail = talentsData.talentEmail;
        const expectedMessage = `${expectedEmail} has been invited to WorkMotion, we will let you know once they finish their onboarding steps.`;
         messageElement.should('be.visible').invoke('text').then((text) => {
            expect(text).to.equal(expectedMessage);
          });
  }
  validateThankYouMessage(messageElement) {
    messageElement.should('contain', 'Thank you for completing the onboarding');
}
}
  export default new Utility();
  