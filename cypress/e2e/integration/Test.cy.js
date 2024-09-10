import loginPage from "../pages/loginPage";
import HomePage from "../pages/HomePage";
import SelectCountryCy from "../pages/SelectCountry";
import productTypeCy from "../pages/productType";
import TalentsDetails from "../pages/TalentsDetails";


describe('Add new talent on HR system', () => {
  it('should login and add new talent', () => {
    loginPage.visitUrl();
    loginPage.login();

    HomePage.addTalent();
    
    SelectCountryCy.selectCountry();
      
    productTypeCy.selectProduct();
    
    TalentsDetails.talentDetails();
    TalentsDetails.contractDetails();    
    TalentsDetails.contractClauses()
    TalentsDetails.compensationCalculation();
    TalentsDetails.setTalentsEmail();
    TalentsDetails.checkAllOnboardingSteps();
    TalentsDetails.clickFinish()
    TalentsDetails.confirmation();

  });

});