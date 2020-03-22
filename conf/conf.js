/**
 * @Author: Robert Kazuła <rkazula>
 * @Date:   22-03-2020
 * @Email:  rkazula@gmail.com
 * @Last modified by:   rkazula
 * @Last modified time: 22-03-2020
 * @License: MIT
 */

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/example_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
