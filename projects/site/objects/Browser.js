const codeceptjs = require('codeceptjs');

const allure = codeceptjs.container.plugins('allure');
const { I } = inject();

class Browser {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor() {
  }

  async checkUrl(url) {
    await allure.createStep(`Url содержит: ${url} `, async () => {
      await I.waitInUrl(url);
    });
  }

  async switchToNextTab() {
    await allure.createStep('Переключиться на следующую вкладку', async () => {
      await I.switchToNextTab();
    });
  }

  async goBack() {
    await allure.createStep('Вернуться на предыдущую страницу', async () => {
      await I.executeScript('window.history.back();');
    });
  }
}

module.exports = new Browser();
module.exports.Browser = Browser;
