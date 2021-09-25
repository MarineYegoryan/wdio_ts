import {BasePage, home, login, secure} from "./index"

export const PAGES= {
    "base": new BasePage()
};

export const ELEMENTS = {
    "secure": secure,
    "home": home,
    "login": login,
};
