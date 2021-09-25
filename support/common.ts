import {ELEMENTS} from "../po/pageFactory";

export class Common {
    public static isDefined(param: string, error: string) {
        if (param) {
            return true;
        }
        throw new Error(error);
    }

    public static splitByPosition(text: string) {
        if (text.indexOf(" position of ") >= 0) {
            return text.split(" position of ");
        }
        return;
    }

    public static splitByPages(text: string) {
        const splitByPages = text.split(" > ");
        const page = splitByPages[0];
        let pagePath = ELEMENTS[page];
        for (let i = 1; i < splitByPages.length; i++) {
            pagePath = pagePath[splitByPages[i]]
        }
        return pagePath;
    }
}
