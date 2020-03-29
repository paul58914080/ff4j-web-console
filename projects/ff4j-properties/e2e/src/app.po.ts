import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/properties') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.tagName('h4')).getText() as Promise<string>;
  }
}
