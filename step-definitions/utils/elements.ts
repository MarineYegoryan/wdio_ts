/*
*findElement looking for a locator from entered page and returns element
*/

export class Elements{
    public static async findElement(locatorInfo: object, position: number): Promise<any> {
        if (locatorInfo["isCollection"]) {
            return await this.getCollectionElements(locatorInfo["locator"], position);
        }
        return await this.getElement(locatorInfo["locator"]);
    }

    public static async getElement(locator: any) {
        return $(locator);
    }

    public static async getCollectionElements(collection: any, position: number) {
        return position ? $$(collection)[position - 1] : $$(collection);
    }

    public async getCollectionValues(collection: any): Promise<string[]> {
        const values = [];
        for (const element of collection) {
            values.push(await element.getAttribute("value"));
        }
        return values;
    }
}
