const talentsData = require('../../fixtures/talentsData.json');
const utility = require('../../support/Utiliy.js');

module.exports = {
  elements: {
    firstName: () => cy.get('#45911b33-3d10-3085-b532-6105309b9840'),
    lastName: () => cy.get('#8e6cdd71-6dc5-3427-a532-bf79068969e9'),
    openCalender: () => cy.get('[placeholder="DD/MM/YYYY"]'),
    editDate: () => cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorInherit.MuiIconButton-sizeMedium.MuiPickersToolbar-penIconButton.css-1beylcr'),
    enterDate: () => cy.get('[placeholder="DD/MM/YYYY"]'),
    okBtn: () => cy.get("[data-cy='mui-datepicker-actions-accept']"),
    talentCitizen: () => cy.get('#59a175b0-2cc7-3aa7-a59f-f4de0622ff1f-Yes'),
    talentExecutive: () => cy.get('#89903fa1-4f0d-3b01-be8c-55c71898f9cf-No'),
    talentAddress: () => cy.get('#1396eec4-d573-3645-9d4d-5755d31260c4-No'),
    workModel: () => cy.get('#383c781e-0c64-3355-a9c0-9cfc58240188-Yes'),
    continueBtn: () => cy.get('#onboarding-continue-btn'),
    jobTitle: () => cy.get('#31166a18-bef9-30b5-b13e-8ba8d81d7123'),
    jobDescription: () => cy.get('#7b3e0382-80b4-30f8-8a4d-903e8bc5d168'),
    germanJobDescription: () => cy.get("#abc4a5c7-45f2-3a7f-9273-3851788daa89"),
    employmentType: () => cy.get("#9f05c388-2631-34c6-b70d-4cf384c1d3cf-full-time"),
    contractType: () => cy.get("#8edb05b8-bccb-361b-a233-dceddb45ad61-fixed-term"),
    contStartDate: () => cy.get("#c66b4732-41bb-3330-b18c-97f9b37427f3"),
    contEndDate: () => cy.get('#5b2cf892-ba03-3589-a809-e07a53aaff71'),
    signatoryName: () => cy.get("#045501af-3877-37dd-99e3-6c52c320e742"),
    signatoryTitle: () => cy.get('#f324d264-ed98-3e9d-9438-a35a893a1c8b'),
    signatoryEmail: () => cy.get('#03d4fa79-7c30-388a-9bb9-354f87449b91'),
    employmentRelationship: () => cy.get('#77e20838-17c8-3796-a878-cb5e8c4e8959-No'),
    probationaryPeriod: () => cy.get('#748ee221-9b95-342a-9a08-b1eec189f2a4-No'),
    riskNoProbation: () => cy.get('#b903d153-979a-3a02-970f-7b5f6cbe5427-No'),
    healthInsurance: () => cy.get('#52f196ef-5b5d-3e55-851b-f0c09a048283-No'),
    stockPlan: () => cy.get('#cee10231-5a67-3129-9250-9f340a7808fb-No'),
    salaryInput: () => cy.get('[data-cy="steps-salary-gross-salary-input"]'),
    fixedBonus: () => cy.get('#a894511b-6610-3b56-97fe-da0962b9cc97-No'),
    variableBonus: () => cy.get("#45689aef-d7ab-37f2-a72f-d85a038bd5a9-No"),
    allowances: () => cy.get("#602c015e-4f5e-3237-884a-4e7b74e86d18-No"),
    talentEmail: () => cy.get('#3dda40da-c10b-31c0-a226-a68628bbdc87'),
    onboardingCheckList: () => cy.get('[data-testid="checkbox-collection"]'),
    termsAndCond: () => cy.get('#569e4c88-5452-3a34-8109-b5d95ded902f'),
    finishBtn: () => cy.get("#onboarding-finish-btn"),
    thanksMessage: () => cy.get('.sc-dWZqqJ.fxSNMZ'),
    congratsMessage:()=>cy.get(':nth-child(3) > .sc-fuISYh > p')
  },

  talentDetails() {
    utility.typeText(this.elements.firstName(), talentsData.firstName);
    utility.typeText(this.elements.lastName(), talentsData.lastName);
    this.elements.openCalender().click();
    this.elements.editDate().click();
    this.elements.enterDate().last().then(($input) => {
      cy.wrap($input)
        .focus()
        .type(talentsData.birthDate)
        .trigger('input', { force: true })
        .trigger('change', { force: true });
    });
    this.elements.okBtn().click();
    utility.clickElement(this.elements.talentCitizen());
    utility.clickElement(this.elements.talentExecutive());
    utility.clickElement(this.elements.talentAddress());
    utility.clickElement(this.elements.workModel());
    utility.clickElement(this.elements.continueBtn(), { force: true });
  },

  contractDetails() {
    utility.typeText(this.elements.jobTitle(), talentsData.jobTitle);
    utility.typeText(this.elements.jobDescription(), talentsData.jobDescription);
    utility.typeText(this.elements.germanJobDescription(), talentsData.germanJobDescription);
    utility.clickElement(this.elements.employmentType());
    utility.clickElement(this.elements.contractType());

    this.elements.contStartDate().click();
    this.elements.editDate().click();
    this.elements.enterDate().last().then(($input) => {
      cy.wrap($input)
        .focus()
        .type(talentsData.startDate)
        .trigger('input', { force: true })
        .trigger('change', { force: true });
    });
    this.elements.okBtn().click();


    this.elements.contEndDate().click();
    this.elements.editDate().click();
    this.elements.enterDate().last().then(($input) => {
      cy.wrap($input)
        .focus()
        .type(talentsData.endDate)
        .trigger('input', { force: true })
        .trigger('change', { force: true });
    });
    this.elements.okBtn().click();


    utility.typeText(this.elements.signatoryName(), talentsData.signatoryName);
    utility.typeText(this.elements.signatoryTitle(), talentsData.signatoryTitle);
    utility.typeText(this.elements.signatoryEmail(), talentsData.signatoryEmail);
    utility.clickElement(this.elements.continueBtn(), { force: true });
  },

  contractClauses() {
    utility.clickElement(this.elements.employmentRelationship());
    utility.clickElement(this.elements.probationaryPeriod());
    utility.clickElement(this.elements.riskNoProbation());
    utility.clickElement(this.elements.continueBtn(), { force: true });
  },

  compensationCalculation() {
    utility.clickElement(this.elements.healthInsurance());
    utility.clickElement(this.elements.stockPlan());
    utility.typeText(this.elements.salaryInput(), talentsData.salary);
    utility.clickElement(this.elements.fixedBonus());
    utility.clickElement(this.elements.variableBonus());
    utility.clickElement(this.elements.allowances());
    utility.clickElement(this.elements.continueBtn(), { force: true });
    
  },

  setTalentsEmail() {
    utility.typeText(this.elements.talentEmail(), talentsData.talentEmail);
    utility.clickElement(this.elements.continueBtn(), { force: true });
  },

  checkAllOnboardingSteps() {
    utility.clickElement(this.elements.onboardingCheckList(), { multiple: true });
    utility.clickElement(this.elements.continueBtn(), { force: true });
  },

  clickFinish() {
    utility.clickElement(this.elements.termsAndCond(), { force: true });
    utility.clickElement(this.elements.finishBtn());
    
  },

  confirmation() {
    utility.validateThankYouMessage(this.elements.thanksMessage());
    utility.validateOnboardingMessage(this.elements.congratsMessage());
  }
};