import {Common} from "../../support/common";

/*
*findElement looking for a locator from entered page and returns element
*/

export class Elements {
    public static async findElement(locatorPath: string) {
        const splitByPositionArray: string[] = Common.splitByPosition(locatorPath);
        let elementPosition: number;
        if (splitByPositionArray) {
            elementPosition = parseInt(splitByPositionArray[0]);
            locatorPath = splitByPositionArray.pop();
        }
        const locator: any = Common.splitByPages(locatorPath);
        Common.isDefined(locator, "errorMessage");

        if (locator.isCollection) {
            if (elementPosition > 0) {
                return this.getElementByPosition(locator, elementPosition);
            }
            return this.getCollectionElements(locator);
        }
        return this.getElement(locator);
    }

    public static async getElement (locator) {
        return $(locator);
    };

    public static async getElementByPosition (collection, position) {
        return $$(collection.selector)[position];
    };

    public static async getCollectionElements (collection) {
        return $$(collection.selector);
    };

    public async getCollectionValues (collection){
        const values = [];
        for (const element of collection) {
            values.push(await element.getAttribute("value"));
        }
        return values;
    };
}
