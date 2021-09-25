import {expect, assert} from "chai";
import {constants} from "../../config/const";
import {config} from "../../wdio.conf";
import {login} from "./login"

const timeout = constants.DELAY;
const baseUrl = config.baseUrl;

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class BasePage {
    public async open(url: string = "") {
        await browser.url(`${baseUrl}${url}`);
        await browser.pause(5000);
    }

    public async validatePageUrl(url: string) {
        expect(browser).toHaveUrlContaining(url);
    }

    async login(username: string, password: string) {
        await (await $(login.username)).setValue(username);
        await (await $(login.password)).setValue(password);
        await (await $(login.submitButton)).click();
        await browser.pause(10000);
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
