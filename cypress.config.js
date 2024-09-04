const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
   
    },
    defaultCommandTimeout: 10000,  
    requestTimeout: 10000,          
    responseTimeout: 30000,        
    pageLoadTimeout: 60000, 
  },
  env: {
    base_url: "https://www.dat.com/home-1"
  }
});
