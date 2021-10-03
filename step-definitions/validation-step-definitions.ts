import { Then } from '@cucumber/cucumber';
import {assert} from "chai";
import {Elements} from "./utils/elements";

/**
 * Verify that text on webElement (not) meet expected condition
 *
 * @example
 * Then I expect text on element "Home > Top Navigation >> Link" should contain "text"
 *
 * @param locatorPosition - "" (empty string), "1 ", "123 ", "2-nd", "300-th" etc.
 * @param locator - path to the element locator
 * @param comparison - contain, not contain, equal, not equal
 * @param expectedText - text
 * @param caseSensitive - "" (empty string), " ignoring case"
 */
Then('I expect text on {position}element(s) {locator} should {comparison} {string}{case sensitive}', async (locatorPosition, locator, comparison, expectedText, caseSensitive) => {
    const webElements: any = await Elements.findElement(locator, locatorPosition);

    const actualTexts = Array.isArray(webElements) ? await Promise.all(webElements.map((element) => element.getText())) : await webElements.getText();

    if (typeof actualTexts === 'string') {
        assert[comparison](caseSensitive ? actualTexts.toLowerCase() : actualTexts, caseSensitive ? expectedText.toLowerCase() : expectedText)
    } else {
        actualTexts.forEach((actualText) => {
            assert[comparison](caseSensitive ? actualText.toLowerCase() : actualText, caseSensitive ? expectedText.toLowerCase() : expectedText)
        });
    }
});

/**
 * Verify that webElement (not) meet expected condition
 *
 * @example
 * Then I expect element "Home > Top Navigation >> Link" to be displayed
 *
 * @param locatorPosition - "" (empty string), "1 ", "123 ", "2-nd", "300-th" etc.
 * @param locator - path to the element locator
 * @param opposite - "not " or "" (empty string)
 * @param expectedCondition - "be displayed", "be clickable", "exist"
 */
Then('I expect {position}element(s) {locator} to {denial}{expect condition}', async (locatorPosition, locator, denial, expectedCondition) => {
    const webElement: any = await Elements.findElement(locator, locatorPosition);
    const actualStatus: boolean = await webElement[expectedCondition]();

    assert.equal(actualStatus, !denial);
});
