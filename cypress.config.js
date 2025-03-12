const {defineConfig} = require("cypress");
const {downloadFile} = require("cypress-downloadfile/lib/addPlugin")

module.exports = defineConfig({
  projectId: 'iipft4',
  env: {
    homePageUrl: 'https://ecommerce-playground.lambdatest.io/index.php?route=common/home',
    loginPageUrl: 'https://ecommerce-playground.lambdatest.io/index.php?route=account/login',
    accountpage_url: 'https://ecommerce-playground.lambdatest.io/index.php?route=account/account',
    USERNAME: 'hmsheethal123@gmail.com',
    PASSWORD: 'Shee@9190'
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    watchForFileChanges : true,
    defaultCommandTimeout: 4000,
    video: true,
    setupNodeEvents(on, config) {
      on('task', {downloadFile}),
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://tutorialsninja.com/demo',
    //viewportHeight: 1024,
    //viewportWidth: 768
  },
});
