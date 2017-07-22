import { browser, by, element, promise } from 'protractor';

export class MclarenTaskPage {
    public navigateTo(): promise.Promise<any> {
        return browser.get('/');
    }

    public getParagraphText(): promise.Promise<string> {
        return element(by.css('app-root h1')).getText();
    }
}
