import { PAGES } from "../../pageobjects/pageFactory";

/*
*findElement looking for a locator from entered page and returns element
*/

const findElement = async locatorName => {
    const splitLocator = locatorName.split(" -> ");
    const page = splitLocator[0];
    const element = splitLocator[1];
    return await PAGES[page][element];
};

const getCollectionValues = async collection => {
    const values = [];
    for (const element of collection) {
        values.push(await element.getAttribute("value"));
    }
    return values;
};

export {
    findElement,
    getCollectionValues,
};
