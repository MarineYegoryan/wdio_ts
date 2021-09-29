/*
*findElement looking for a locator from entered page and returns element
*/

export class Elements{
    public static async findElement(locatorInfo: object, position: number): Promise<any> {
        if (locatorInfo["isCollection"]) {
            if (position) {
                return this.getElementByPosition(locatorInfo["locator"], position);
            }
            return await this.getCollectionElements(locatorInfo["locator"]);
        }
        return await this.getElement(locatorInfo["locator"]);
    }

    public static async getElement(locator: any) {
        return $(locator);
    }

    public static async getElementByPosition(collection: any, position: number): Promise<any> {
        return $(`${collection}:nth-of-type(${position})`);
    }

    public static async getCollectionElements(collection: any) {
        return $$(collection);
    }

    public async getCollectionValues(collection: any): Promise<string[]> {
        const values = [];
        for (const element of collection) {
            values.push(await element.getAttribute("value"));
        }
        return values;
    }
}
