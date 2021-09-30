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
