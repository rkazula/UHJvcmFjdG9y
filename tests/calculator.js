/**
 * @Author: Robert Kazuła <rkazula>
 * @Date:   22-03-2020
 * @Email:  rkazula@gmail.com
 * @Last modified by:   Robert Kazuła
 * @Last modified time: 23-03-2020
 * @License: MIT
 */

let calculatorPage = require('../pages/calculatorPage');

describe('Super Calculator test', function() {
  it('count', function() {
    calculatorPage.getUrl('http://juliemr.github.io/protractor-demo/');
    expect(browser.getTitle()).toEqual("Super Calculator");

    calculatorPage.inputFirstValue('2');
    calculatorPage.inputSecondValue('3');
    calculatorPage.goButtonClick();
    calculatorPage.resultTextCheck('5');

  });

});
