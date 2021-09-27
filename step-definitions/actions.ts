import {ELEMENTS, PAGES} from "../po/pageFactory";
import {Given, Then, When} from "@cucumber/cucumber";

Then(/^I should wait (.*)$/, async (milliseconds: number) => {
    await browser.pause(milliseconds * 1000)
});

Given(/^I navigate to (.*) page$/, async (page: string) => {
    await PAGES["base"].open(ELEMENTS[page].url);
});

When(/^I login with (.*) and (.*) on (.*) page$/, async (username: string, password: string, page:string) => {
    await PAGES[page].login(username, password)
});

When(/^I wait for element {locator} to {wait condition}$/, async function (locator, condition) {
    return locator[condition];
});

When('I click on {locator}', async (locator) => {
    await locator.click();
});
