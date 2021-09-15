import {BasePage} from "./pages/base.page";
import LoginPage from "./pages/login.page"
import SecurePage from "./pages/secure.page"

class PageFactory {
    static getPage(pageName: string) {
        switch (pageName.toLowerCase()) {
            case "secure":
                return SecurePage;
            case "home":
                return LoginPage;
            case "base":
                return BasePage;
            default:
                break;
        }
    }
}

export {PageFactory};
