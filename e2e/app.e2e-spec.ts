import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Hello Angular';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(1).toEqual(1);
    element(by.css('h1')).getText().then(x => expect(x).toEqual(expectedMsg));
  });

});
