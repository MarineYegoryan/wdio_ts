import { defineParameterType } from '@cucumber/cucumber';
import {findElement, getCollectionValues} from '../step-definitions/utils/stepFunctions'

/**
 * Used for returning chai assertion condition
 */
defineParameterType({
    regexp: /exist|be enabled|be displayed|be clickable|be focused|be displayed in viewport/,
    name: 'wait condition',
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
    regexp: /"([^"\\]*(\\.[^"\\]*)*)"/,
    name: 'locator',
    transformer: (locator) => {
        return findElement(locator)
    },
    useForSnippets: false,
});

defineParameterType({
    regexp: /[0-9]*-[th|st|nd|rd]* |[0-9]* |/,
    name: 'locator position',
    transformer: (position) => {
        if (position) {
            if (parseFloat(position)) {
                return parseFloat(position) - 1
            }
        }
        return undefined;
    },
    useForSnippets: false,
});
