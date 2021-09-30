import {HomePage} from "./pages/home.page";
import {secure} from "./pageElements/secure";
import {home} from "./pageElements/home";
import {login} from "./pageElements/login";

export const PAGES = {
    "base": new HomePage()
};

export const ELEMENTS = {
    "secure": secure,
    "home": home,
    "login": login,
};
