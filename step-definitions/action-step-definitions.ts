import {ELEMENTS, PAGES} from "../po/pageFactory";
import {When} from "@cucumber/cucumber";
import {Elements} from "./utils/elements";

/**
 * Step: User navigates on the certain page using address bar
 * @example: When I navigate to home page
 *
 * @param {String} page - page name
 */
When('I navigate to {string} page', async (page: string) => {
    return PAGES["base"].open(ELEMENTS[page].url);
});

/**
 * Step: User navigates back/forward
 * @example: When I navigate back
 *
 * @param navigation - back, forward
 */
When('I navigate {string}', async (navigation: string) => {
    switch (navigation) {
        case 'back':
            return browser.back();
        case 'forward':
            return browser.forward();
        default:
            throw new Error('Wrong type of navigation');
    }
});

/**
 * Step: User wait for element to exist/be enabled/be displayed/be clickable"
 * @example
 * When I wait for element "home > top navigation >> link" to be displayed
 *
 * @param locatorPosition - "" (empty string), "1 ", "123 ", "2-nd", "300-th" etc.
 * @param locator - path to the element locator
 * @param denial - "not " or "" (empty string)
 * @param condition - "exist", "be enabled", "be displayed", "be clickable", "be visible in viewport"
 */
When('I wait for {position}element {locator} to {denial}{wait condition}', async function (locatorPosition, locator, denial, condition) {
    const webElement: any = await Elements.findElement(locator, locatorPosition);

    return webElement[condition]({ reverse: denial });
});

/**
 * Step: User clicks on the certain element on the page
 * @example: And I click on 1-st element "home > top navigation >> link"
 *
 * @param locatorPosition - "" (empty string), "1 ", "123 ", "2-nd", "300-th" etc.
 * @param locator - path to the element locator
 */
When('I click on {position}element {locator}', async (locatorPosition, locator) => {
    const webElement: any = await Elements.findElement(locator, locatorPosition);

    return webElement.click();
});

/**
 * Step: User types text in text field by CSS or XPATH.
 * @example:
 * When I type "Dress" in element "home > top navigation >> link"
 *
 * @param text - text need to be entered into the certain webElement
 * @param locatorPosition - "" (empty string), "1 ", "123 ", "2-nd", "300-th" etc.
 * @param locator - path to the element locator
 */
When('I type {string} in {position}element {locator}', async function (text, locatorPosition, locator) {
    const webElement: any = await Elements.findElement(locator, locatorPosition);
    await webElement.clearValue();

    return webElement.setValue(text);
});

/**
 * Step: User wait for certain number of seconds without any action
 * @example: When I wait for 5 seconds
 *
 * @param time - time to wait
 */
When('I wait for {int} second(s)', async (time) => browser.pause(time * 1000));

/**
 * Step: User hover over the certain element on the page
 * @example: When I hover over 1-st element "home > top navigation >> link"
 *
 * @param locatorPosition - "" (empty string), "1 ", "123 ", "2-nd", "300-th" etc.
 * @param locator - path to the element locator nested on the certain Page Object
 */
When('I hover over {position}element {locator}', async (locatorPosition, locator) => {
    const webElement: any = await Elements.findElement(locator, locatorPosition);
    await webElement.moveTo();

    return browser.pause(500);
});

/**
 * Step: User wait for element to contain certain text
 * @example: When I wait for text on "home > top navigation >> link" to contain "60"
 *
 * @param locatorPosition - "" (empty string), "1 ", "123 ", "2-nd", "300-th" etc.
 * @param locator - path to the element locator nested on the certain Page Object
 * @param negation - "not " or "" (empty string)
 * @param comparison - "contain", "not contain", "be equal", "not be equal"
 * @param expectedText - text that element should contain
 * @param caseSensitive - "ignoring case", "" (empty string)
 */
When('I wait for text on {position}element {locator} to {comparison} {string}{case sensitive}', async function (locatorPosition, locator, comparison, expectedText, caseSensitive) {
    let elementText: any = await (await Elements.findElement(locator, locatorPosition)).getText();

    caseSensitive ? elementText = elementText.toLowerCase() : elementText;
    caseSensitive ? expectedText = expectedText.toLowerCase() : expectedText;

    return browser.waitUntil(() => {
        switch (comparison) {
            case 'equal':
                return (elementText === expectedText);
            case 'notEqual':
                return (elementText !== expectedText);
            case 'include':
                return elementText.includes(expectedText);
            case 'notInclude':
                return !elementText.includes(expectedText);
            default:
                return (elementText === expectedText);
        }
    })
});
