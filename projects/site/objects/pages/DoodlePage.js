const codeceptjs = require('codeceptjs');

const allure = codeceptjs.container.plugins('allure');
const { I } = inject();

class InternshipTab {
  constructor() {
    this.url = '/doodles/nigeria-independence-day-2021';

    this.card = locate('#title-card');
    this.title = this.card.find('h2');
  }

  async open() {
    await allure.createStep('Открыть doodle страницу', async () => {
      await I.amOnPage(this.url);
    });
  }

  async shouldBeOpen() {
    await allure.createStep('Страница doodle должна быть открыта', async () => {
      await I.waitInUrl(this.url);
      await I.seeElement(this.card);
    });
  }

  async titleShouldBeVisible(text) {
    await allure.createStep(`Заголовок дудла '${text}' отображается`, async () => {
      await I.waitForVisible(this.title);
      await I.seeTextEquals(text, this.title);
    });
  }
}

module.exports = new InternshipTab();
module.exports.InternshipTab = InternshipTab;