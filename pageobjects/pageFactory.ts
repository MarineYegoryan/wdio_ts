import {BasePage} from "./pages/base.page";
import LoginPage from "./pages/login.page";
import SecurePage from "./pages/secure.page";


export const PAGES = {
    "secure": SecurePage,
    "login": LoginPage,
    "base": new BasePage()
}
