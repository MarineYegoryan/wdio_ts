import {ELEMENTS} from "../po/pageFactory";

export class Common {
    public static isDefined(param: string, error: string) {
        if (param) {
            return true;
        }
        throw new Error(error);
    }

    public static splitByChild(text: string) {
        const regExp = / >> /g;
        return text.replace(regExp, " > child > ");
    }

    public static getLocatorValue(text: string): object {
        text = this.splitByChild(text);
        const splitByPages: string[] = text.split(" > ");
        const page: any = splitByPages[0];
        let locator: any = ELEMENTS[page];
        let locatorBasePath: string = "";
        for (let i = 1; i < splitByPages.length; i++) {
            if (splitByPages[i] === "child") {
                locatorBasePath += locator["selector"] + " ";
            }
            locator = locator[splitByPages[i]];
        }
        const isCollection: boolean = locator.isCollection;
        locator = locator.isCollection ? locatorBasePath + locator.selector : locatorBasePath + locator;
        this.isDefined(locator, "Locator was not found");

        return  { locator, isCollection };
    }
}
