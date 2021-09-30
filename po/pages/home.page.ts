import {expect} from "chai";
import {constants} from "../../config/const";
import {config} from "../../wdio.conf";
const baseUrl = config.baseUrl;

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class HomePage {
    public delay: number = constants.DELAY;

    public async open(url: string = "") {
        await browser.url(`${baseUrl}${url}`);
        await browser.pause(this.delay);
        await browser.maximizeWindow();
    }

    public async validatePageUrl(url: string) {
        expect(browser).toHaveUrlContaining(url);
    }

    public async waitElementBeClickable(locator: any) {
        await locator.waitForClickable({
            timeout: 10000,
            timeoutMsg: `Element ${locator} is not clickable`
        });
    }

    public async waitForExist(locator: any, maxWaitTime: number = this.delay) {
        await locator.waitForExist({
            timeout: maxWaitTime,
            timeoutMsg: `Element ${locator} is not exist`
        });
    }

    public async waitForDisplayed(locator: any, maxWaitTime: number = this.delay) {
        await locator.waitForDisplayed({
            timeout: maxWaitTime,
            timeoutMsg: `Element ${locator} is not displayed`
        });
    }

    public async waitForEnabled(locator: any, maxWaitTime: number = this.delay) {
        await locator.waitForEnabled({
            timeout: maxWaitTime,
            timeoutMsg: `Element ${locator} is not enable`
        });
    }

    public async waitForClickable(locator: any, maxWaitTime: number = this.delay) {
        await locator.waitForClickable({
            timeout: maxWaitTime,
            timeoutMsg: `Element ${locator} is not clickable`
        });
    }
}

export {HomePage};
