import {PAGES} from "../pageobjects/pageFactory";
import {Given, Then, When} from "@cucumber/cucumber";
import * as stepFunctions from "../step-definitions/utils/stepFunctions"

Then(/^I should wait (.*)$/, async (milliseconds: number) => {
    await browser.pause(milliseconds * 1000)
})

Given(/^I am on the (.*) page$/, async (page: string) => {
    await PAGES[page].open()
});

When(/^I login with (.*) and (.*)$/, async (username: string, password: string) => {
    await PAGES["login"].login(username, password)
});

When('I wait for element {string} to {wait condition}', async function (locator, condition) {
    const webElement: any = await $(locator)

    return webElement[condition];
});

When(/^(Eventually )?I type (.*) in (.*)$/, async (eventually:string, text: string, element: any) => {
    const locator = await stepFunctions.findElement(element);
    if(eventually) {
        await PAGES["base"].waitElementBeClickable(locator)
        await locator.setValue(text);
    }
    await locator.setValue(text);
});