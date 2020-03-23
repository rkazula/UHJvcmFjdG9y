/**
 * @Author: Robert Kazuła <rkazula>
 * @Date:   23-03-2020
 * @Email:  rkazula@gmail.com
 * @Last modified by:   rkazula
 * @Last modified time: 23-03-2020
 * @License: MIT
 */

let calculatorPage = function(){

  let inputFirst = element(by.model('first'));
  let inputSecond = element(by.model('second'));
  let goButton = element(by.id('gobutton'));
  let resultText = element(by.className('ng-binding'));

  this.getUrl = function(url){
    browser.get(url);

  };

  this.inputFirstValue = function(firstNumberValue){
    inputFirst.sendKeys(firstNumberValue);

  };

  this.inputSecondValue = function(secondNumberValue){
    inputSecond.sendKeys(secondNumberValue);

  };

  this.goButtonClick = function(){
    goButton.click();

  };

  this.resultTextCheck = function(expectedValue){
    expect(resultText.getText()).toBe(expectedValue);

  };

};

module.exports = new calculatorPage();
