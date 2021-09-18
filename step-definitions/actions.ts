import {PAGES} from "../pageobjects/pageFactory";
import {Given, Then, When} from "@cucumber/cucumber";
import * as stepFunctions from "../step-definitions/utils/stepFunctions"

Then(/^I should wait (.*)$/, async (milliseconds: number) => {
    await browser.pause(milliseconds * 1000)
})

Given(/^I am on the (.*) page$/, async (page: string) => {
    await PAGES["login"].open()
});

When(/^I login with (.*) and (.*)$/, async (username: string, password: string) => {
    await PAGES["login"].login(username, password)
});

When(/^(Eventually )?I type (.*) in (.*)$/, async (eventually:string, text: string, element: any) => {
    const locator = await stepFunctions.findElement(element);
    if(eventually) {
        await PAGES["base"].waitElementBeClickable(locator)
        await locator.setValue(text);
    }
    await locator.setValue(text);
});