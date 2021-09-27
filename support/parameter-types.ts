import { defineParameterType } from '@cucumber/cucumber';
import {Elements} from '../step-definitions/utils/elements'

/**
 * Used for returning chai assertion condition
 */
defineParameterType({
    name: 'wait condition',
    regexp: /exist|be enabled|be displayed|be clickable|be focused|be displayed in viewport/,
    transformer(condition) {
        const CONDITIONS = {
            'exist': 'waitForExist',
            'be enabled': 'waitForEnabled',
            'be displayed': 'waitForDisplayed',
            'be clickable': 'waitForClickable',
            'be focused': 'waitForElementFocused',
            'be displayed in viewport': 'waitForElementDisplayedInViewport',
        };
        return CONDITIONS[condition];
    },
    useForSnippets: false,
});

defineParameterType({
    name: 'locator',
    regexp: /"([^"\\]*(\\.[^"\\]*)*)"/,
    transformer: async (locatorPath: string) => {
        console.log("ooooooooo = ", await Elements.findElement(locatorPath));
        return await Elements.findElement(locatorPath);
    },
    useForSnippets: false,
});
