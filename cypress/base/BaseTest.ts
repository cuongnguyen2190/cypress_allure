import { allure, MochaAllure } from 'allure-mocha/runtime'
import {
    decorate
  } from 'ts-test-decorators'

export class BaseTest {
    public before() {
        decorate<MochaAllure>(allure)
      }
}
