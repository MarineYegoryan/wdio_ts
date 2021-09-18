import {expect, assert} from "chai";
import {constants} from "../../configs/const";
import {config} from "../../wdio.conf";
const timeout = constants.DELAY;
const baseUrl = config.baseUrl;
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class BasePage {
    public async open(url: string = `${baseUrl}`) {
        await browser.url(`https://the-internet.herokuapp.com/${url}`);
    }

    public async validatePageUrl(url: string) {
        await browser.pause(1000);
        expect(browser).toHaveUrlContaining(url);
    }

    public async waitElementBeClickable(locator: any) {
        await locator.waitForClickable({
            timeout: 10000,
            timeoutMsg: `Element ${locator} is not clickable`
        });
    }

    public async waitForExist(locator: any, maxWaitTime: number = timeout) {
        await locator.waitForExist({
            timeout: maxWaitTime,
            timeoutMsg: `Element ${locator} is not exist`
        });
    };

    public async waitForDisplayed(locator: any, maxWaitTime: number = timeout) {
        await locator.waitForDisplayed({
            timeout: maxWaitTime,
            timeoutMsg: `Element ${locator} is not displayed`
        });
    };

    public async waitForEnabled(locator: any, maxWaitTime: number = timeout) {
        await locator.waitForEnabled({
            timeout: maxWaitTime,
            timeoutMsg: `Element ${locator} is not enable`
        });
    };

    public async waitForClickable(locator: any, maxWaitTime: number = timeout) {
        await locator.waitForClickable({
            timeout: maxWaitTime,
            timeoutMsg: `Element ${locator} is not clickable`
        });
    };
}

export {BasePage};
