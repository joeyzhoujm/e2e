// home-spec.ts
import {browser, element, by} from 'protractor';

describe('Promise Demo', () => {
  it('Sample', () => {
    browser.get('https://material.angularjs.org/latest/demo/autocomplete');
    element(by.name('basic-usage')).click();
    element(by.id('input-99')).sendKeys('Test');
    const name = element(by.id('input-99')).getAttribute('value');
    expect(name).toBe('Test');
  });
});
