import { PAGES } from "../../pageobjects/pageFactory";

/*
*findElement looking for a locator from entered page and returns element
*/

const findElement = async (locator) => {
    const splitLocator = locator.split(" > ");
    const page = splitLocator[0];
    const element = splitLocator[1];
    return await PAGES[page][element];
};

const getArrayOfElements = async (locator) => {
    const elements: any = await $$(locator);
    const elementsArray = [];
    for (const element of elements) {
        elementsArray.push(element);
    }
    return elementsArray;
}

const getElement = async (locator, locatorPosition) => {
    const elements: any = await getArrayOfElements(locator);
    if(locatorPosition !== undefined) {
        return elements[locatorPosition];
    }
    if(elements.length === 1) {
        return elements[0];
    }
    return elements
}

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
    getElement
};
