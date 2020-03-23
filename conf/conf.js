/**
 * @Author: Robert Kazuła <rkazula>
 * @Date:   22-03-2020
 * @Email:  rkazula@gmail.com
 * @Last modified by:   Robert Kazuła
 * @Last modified time: 23-03-2020
 * @License: MIT
 */

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  dest: '../target/screenshots',
  filename: 'testReport.html',
  reportTitle: "TestRun Report",
  showSummary: true,
  showQuickLinks: true,
  showConfiguration: true,
  captureOnlyFailedSpecs: true,
  preserveDirectory: true
});

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',

    chromeOptions: {
      args: ["--headless", "--disable-gpu", "--window-size=1920,1080"]
    }
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/calculator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000

  },

  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: '../allure-results'
    }));
    jasmine.getEnv().afterEach(function(done) {
      browser.takeScreenshot().then(function(png) {
        allure.createAttachment('Screenshot', function() {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
};
