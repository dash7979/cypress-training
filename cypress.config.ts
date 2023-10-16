import { defineConfig } from "cypress";

export default defineConfig({
    // setupNodeEvents can be defined in either
    // the e2e or component configuration
    e2e: {
            video: false,
            screenshotOnRunFailure: false,
        setupNodeEvents(on, config) {
            config.defaultCommandTimeout = 50000
            config.responseTimeout = 50000

            // IMPORTANT return the updated config object
            return config;
        },
    },
});
