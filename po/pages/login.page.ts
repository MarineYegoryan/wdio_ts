import {HomePage} from "./home.page";
import {login} from "../pageElements/login";

class LoginPage extends HomePage {
    open() {
        return super.open(login.url);
    }

    public async login(username: string, password: string) {
        await (await $(login.username)).setValue(username);
        await (await $(login.password)).setValue(password);
        await (await $(login.submitButton)).click();
        await browser.pause(this.delay * 2);
    }

}

export default new LoginPage();

