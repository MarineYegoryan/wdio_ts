import LoginPage from '../pageobjects/pages/login.page';
import {BasePage} from '../pageobjects/pages/base.page';
import {Given, Then, When} from "@cucumber/cucumber";
import * as stepFunctions from "../step-definitions/utils/stepFunctions"
const BasePageInstance = new BasePage();

const pages = {
    login: LoginPage
};

Then(/^I should wait (.*)$/, async (milliseconds: number) => {
    await browser.pause(milliseconds * 1000)
})

Given(/^I am on the (.*) page$/, async (page: string) => {
    await pages[page].open()
});

When(/^I login with (.*) and (.*)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password)
});

When(/^(Eventually )?I type (.*) in (.*)$/, async (eventually:string, text: string, element: any) => {
    const locator = await stepFunctions.findElement(element);
    if(eventually) {
        await BasePageInstance.waitElementBeClickable(locator)
        await locator.setValue(text);
    }
    await locator.setValue(text);
});