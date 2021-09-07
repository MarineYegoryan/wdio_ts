import LoginPage from '../pageobjects/login.page';
import {Given, When} from "@cucumber/cucumber";

const pages = {
    login: LoginPage
};

Given(/^I am on the (\w+) page$/, async (page: string) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password)
});

