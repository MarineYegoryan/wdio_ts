import { defineParameterType } from '@cucumber/cucumber';

/**
 * Used for returning chai assertion condition
 */
defineParameterType({
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
    name: 'wait condition',
    useForSnippets: false,
});