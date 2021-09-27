import {ELEMENTS} from "../po/pageFactory";

export class Common {
    public static isDefined(param: string, error: string) {
        if (param) {
            return true;
        }
        throw new Error(error);
    }

    public static splitByPosition(text: string) {
        if (text.includes(" element of ")) {
            return text.split(" element of ");
        }
        return;
    }

    public static splitByChild(text: string) {
        const regExp = / >> /g;
        return text.replace(regExp, " > selector > child > ");
    }

    public static getLocatorValue(text: string) {
        text = this.splitByChild(text);
        const splitByPages: string[] = text.split(" > ");
        const page: any = splitByPages[0];
        let locator: any = ELEMENTS[page];
        let locatorBasePath: string = "";
        for (let i = 1; i < splitByPages.length; i++) {
            if (i === splitByPages.length - 1) {
                locator = locator[splitByPages[i]];
            } else {
                if (splitByPages[i] === "selector" && splitByPages[i + 1] === "child") {
                    locatorBasePath += locator[splitByPages[i]] + " ";
                } else {
                    if (Object.keys(locator[splitByPages[i]]).includes(splitByPages[i + 1])) {
                        locator = locator[splitByPages[i]];
                    }
                }
            }
        }
        locator = locator.isCollection ? locatorBasePath + locator.selector : locatorBasePath + locator;
        const isCollection: Boolean = locator.isCollection;
        this.isDefined(locator, "Locator was not found");

        console.log("locator path     ==== ", locator);
        return  { locator, isCollection };
    }
}
