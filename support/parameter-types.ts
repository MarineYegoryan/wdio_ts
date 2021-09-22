import { defineParameterType } from '@cucumber/cucumber';
import {findElement} from '../step-definitions/utils/stepFunctions'

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
    transformer: (element) => {
        return findElement(element)
    },
    useForSnippets: false,
});
