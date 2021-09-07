import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    public get inputUsername() : any { return $('#username') }
    public get inputPassword () : any { return $('#password') }
    public get btnSubmit () : any { return $('button[type="submit"]') }

    async login (username :string, password :string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }

}

export default new LoginPage();
