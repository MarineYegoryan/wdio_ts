import {BasePage} from "./base.page";
import {login} from "..";

class LoginPage extends BasePage {
    open() {
        return super.open("login");
    }

    public async login(username: string, password: string) {
        await (await $(login.username)).setValue(username);
        await (await $(login.password)).setValue(password);
        await (await $(login.submitButton)).click();
        await browser.pause(this.delay * 2);
    }

}

export default new LoginPage();

