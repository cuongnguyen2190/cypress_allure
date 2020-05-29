import Page = require("../Page");
import { step } from "ts-test-decorators";


export class LoginPage extends Page {

    LOGIN_FIELD = 'span[._155LD]'
    USERNAME_FIELD = 'input[data-id=usernameField]'
    PASSWORD_FIELD = 'input[data-id=passwordField]'
    LOGIN_BTN = 'button[data-id=submitBtn]'

    // @step("1")
    public clickLogin() {
        this.getElement(this.LOGIN_FIELD).click();
        return this;
    }

    // @step("2")
    public inputUsername(username:string) {
        this.getElement(this.USERNAME_FIELD).type(username);
        return this;
    }

    // @step("3")
    public inputPassword(password:string) {
        this.getElement(this.PASSWORD_FIELD).type(password);
        return this;
    }

    // @step("4")
    public clickLoginBtn() {
        this.getElement(this.LOGIN_BTN).click();
        return this;
    }
}
