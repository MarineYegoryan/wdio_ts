import { defineParameterType } from '@cucumber/cucumber';
import {Common} from './common'

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
    transformer: async (locatorPath: string): Promise<object> => {
        return Common.getLocatorValue(locatorPath);
    },
    useForSnippets: false,
});

defineParameterType({
    regexp: /[0-9]*-[th|st|nd|rd]* |[0-9]* |/,
    name: 'position',
    transformer: (position) => {
        if (position) {
            if (parseFloat(position)) {
                return parseFloat(position) - 1;
            }
        }
        return undefined;
    },
    useForSnippets: false,
});

/**
 * Used for returning chai assertion condition
 */
defineParameterType({
    name: 'expect condition',
    regexp: /be displayed|be clickable|be focused|exist|be displayed in viewport/,
    transformer(condition) {
        const CONDITIONS = {
            'be displayed': 'isDisplayed',
            'be clickable': 'isClickable',
            'exist': 'isExisting',
            'be focused': 'isFocused',
            'be displayed in viewport': 'isDisplayedInViewport',
        };
        return CONDITIONS[condition];
    },
    useForSnippets: false,
});

/**
 * Used for reversing chai assertion
 */
defineParameterType({
    name: 'denial',
    regexp: /not |/,
    transformer(denial) {
        return !!denial;
    },
    useForSnippets: false,
});

/**
 * Used for returning chai assertion condition
 */
defineParameterType({
    name: 'comparison',
    regexp: /not contain|contain|be equal|not be equal/,
    transformer(comparison) {
        const COMPARISONS = {
            'contain': 'include',
            'not contain': 'notInclude',
            'be equal': 'equal',
            'not be equal': 'notEqual'
        };
        return COMPARISONS[comparison];
    },
    useForSnippets: false,
});

/**
 * Used for ignoring case
 */
defineParameterType({
    name: 'case sensitive',
    regexp: / ignoring case|/,
    transformer(caseSensitive) {
        return !!caseSensitive;
    },
    useForSnippets: false,
})