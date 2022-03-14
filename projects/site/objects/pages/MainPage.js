const codeceptjs = require('codeceptjs');

const allure = codeceptjs.container.plugins('allure');
const { I } = inject();

class InternshipTab {
  constructor() {
    this.url = '/';

    this.searchButton = locate('input[name="btnK"]');
    this.searchContent = locate('#search');
    this.queryField = locate('input[name="q"]');
    this.searchResults = this.searchContent.find('div.g');
  }

  async open() {
    await allure.createStep('Открыть главную страницу', async () => {
      await I.amOnPage(this.url);
    });
  }

  async shouldBeOpen() {
    await allure.createStep('Главная страница Google должна быть открыта', async () => {
      await I.waitInUrl(this.url);
      await I.seeElement(this.queryField);
    });
  }

  async fillQueryField(queryString) {
    await allure.createStep(`Вводим значение \'${queryString}\' в поле поиска`, async () => {
      await I.fillField(this.queryField, queryString);
    });
  }

  async clickSearchButton() {
    await allure.createStep('Нажимаем кнопку \'Поиск в Google\'', async () => {
      await I.click(this.searchButton);
    });
  }

  async searchResultsShouldBeVisible() {
    await allure.createStep('Результаты запроса отображаются', async () => {
      await I.waitForVisible(this.searchContent);
      await I.seeNumberOfVisibleElementsMoreThan(this.searchResults, 0);
    });
  }

  async sleep(milliseconds) {
    return allure.createStep(`Ожидание ${milliseconds} мс`,
      async () => {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      })
  }
}

module.exports = new InternshipTab();
module.exports.InternshipTab = InternshipTab;