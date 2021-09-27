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
        let locatorInfo: any = Common.getLocatorValue(locatorPath);

        if (locatorInfo.isCollection) {
            if (elementPosition) {
                return this.getElementByPosition(locatorInfo.locator, elementPosition);
            }
            return this.getCollectionElements(locatorInfo.locator);
        }
        return this.getElement(locatorInfo.locator);
    }

    public static async getElement(locator: any) {
        return $(locator);
    };

    public static async getElementByPosition(collection: any, position: number) {
        return $$(collection)[position];
    };

    public static async getCollectionElements(collection: any) {
        return $$(collection);
    };

    public async getCollectionValues(collection) {
        const values = [];
        for (const element of collection) {
            values.push(await element.getAttribute("value"));
        }
        return values;
    };
}
