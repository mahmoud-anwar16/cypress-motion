const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    
    },
    baseUrl: "https://beta.workmotion.com/login",
  
    pageLoadTimeout: 200000,
  },
});
