import {ELEMENTS, PAGES} from "../po/pageFactory";
import {Given, Then, When} from "@cucumber/cucumber";
import {Elements} from "./utils/elements"
import LoginPage from "../po/pages/login.page";

Then(/^I should wait (.*)$/, async (milliseconds: number): Promise<void> => {
    await browser.pause(milliseconds * 1000)
});

Given(/^I navigate to (.*) page$/, async (page: string): Promise<void> => {
    await PAGES["base"].open(ELEMENTS[page].url);
});

When(/^I login with (.*) and (.*) on (.*) page$/, async (username: string, password: string, page: string): Promise<void> => {
    await LoginPage.login(username, password);
});

When(/^I wait for element {locator} to {wait condition}$/, async function (locator: object, condition: string): Promise<void> {
    return locator[condition]();
});

When('I click on {position}element(s) of {locator}', async (position: number, locator: object): Promise<void> => {
    const element: any = await Elements.findElement(locator, position);
    await element.click();
});
