import { defineConfig } from "cypress";

module.exports = defineConfig({
    "retries": {
      "runMode": 3,
      "openMode": 2
    },

    e2e: {    
            setupNodeEvents(on, config) {
        
            },
            reporter: "cypress-multi-reporters", 
            reporterOptions: {
              reporterEnabled: "mochawesome",
              mochawesomeReporterOptions: {
                reportDir: "cypress/reports/mocha",
                quiet: true,
                overwrite: false,
                html: false,
                json: true,
              },
        
            },    
        
            defaultCommandTimeout: 20000,
            pageLoadTimeout: 20000,   
            video: false,
            screenshotOnRunFailure: false,
          
    },
        fillDemoQA:{
            demoUrl: "https://demoqa.com/",
            name: "Miguel Angel ",
            lastName: "Quintero",
            email: "miguequinteroocampo@gmail.com",
            gender: "Male",
            dateOfBirth: "8 7 2004",
            mobileNumber: "3128900823",
            hobbies: ["Music", "VideoGames"],
            currentAddress: "Calle 50#2d-10",
  
      },
});
