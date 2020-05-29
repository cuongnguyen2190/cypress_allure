import { LoginPage } from "../../support/page-objects/pages/LoginPage"
import { suite, test } from '@testdeck/mocha';
import { BaseTest } from "../../base/BaseTest";

@suite
class TestLogin extends BaseTest{
  @test
  loginPageTest() {
    let loginPage = new LoginPage();
    cy.visit('https://www.traveloka.com/en-vn/', { timeout: 10000 });
    loginPage.clickLogin().inputUsername("vohoangnhan291@gmail.com").inputPassword("Aa123456").clickLoginBtn();
  }
}