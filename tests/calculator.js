/**
 * @Author: Robert Kazuła <rkazula>
 * @Date:   22-03-2020
 * @Email:  rkazula@gmail.com
 * @Last modified by:   rkazula
 * @Last modified time: 22-03-2020
 * @License: MIT
 */

 describe('Super Calculator test', function() {
   it('openPage', function() {
     browser.get('http://juliemr.github.io/protractor-demo/');
     expect(browser.getTitle()).toEqual("Super Calculator");

     var inputFirst = element(by.model('first'));
     inputFirst.sendKeys('2')

     var inputSecond = element(by.model('second'));
     inputSecond.sendKeys('3');

     //var dropdownOperator = element(by.model('operator'));
     //expect(dropdownOperator.getText()).toBe('+');

     var goButton = element(by.id('gobutton'));
     goButton.click();

     var resultText = element(by.className('ng-binding'));
     expect(resultText.getText()).toBe('5');

    //browser.sleep(2000);

   });

 });
