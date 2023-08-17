const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://marsair.recruiting.thoughtworks.net/ChiNguyen',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
