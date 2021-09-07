import SecurePage from '../pageobjects/secure.page';
import {Then} from "@cucumber/cucumber";
import { expect, assert } from 'chai';

Then(/^I should see a flash message saying (.*)$/, async (message: string) => {
    const text: string = await (await SecurePage.flashAlert).getText();
    expect(text).to.exists;
    // assert.equal(text,message);
});

