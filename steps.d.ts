/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type TestPlan = import('./helpers/testplan.js');
type CustomDbHelper = import('./helpers/CustomDbHelper.js');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends WebDriver, TestPlan, CustomDbHelper, REST, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<TestPlan>, WithTranslation<CustomDbHelper>, WithTranslation<ChaiWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
