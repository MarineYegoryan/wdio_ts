import {PAGES} from "../pageobjects/pageFactory";
import {Given, Then, When} from "@cucumber/cucumber";
import * as stepFunctions from "../step-definitions/utils/stepFunctions"
import { getElement } from "../step-definitions/utils/stepFunctions";

Then(/^I should wait (.*)$/, async (milliseconds: number) => {
    await browser.pause(milliseconds * 1000)
})

Given(/^I am on the (.*) page$/, async (page: string) => {
    await PAGES[page].open()
});

When(/^I login with (.*) and (.*) on (.*) page$/, async (username: string, password: string, page:string) => {
    await PAGES[page].login(username, password)
});

When('I wait for {locator position}element(s) {locator} to {wait condition}', async function (locatorPosition, locator, condition) {
    const webElements: any = await getElement(locator, locatorPosition)

    return webElements[condition]();
});

// When(/^(Eventually )?I type (.*) in (.*)$/, async (eventually:string, text: string, element: any) => {
//     const locator = await stepFunctions.findElement(element);
//     if(eventually) {
//         await PAGES["login"].waitElementBeClickable(locator)
//     }
//     await locator.setValue(text);
// });