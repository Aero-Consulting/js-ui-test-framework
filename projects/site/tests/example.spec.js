const { example } = require('./utils/tags');
const mainPage = require('../objects/pages/MainPage');
const doodlePage = require('../objects/pages/DoodlePage');

Feature('Google', { tags: [example] });

Scenario('Поиск на главной страницы Google', async () => {
  await mainPage.open();
  await mainPage.fillQueryField("Test text");
  await mainPage.clickSearchButton();
  await mainPage.searchResultsShouldBeVisible();
});

Scenario('Дудл Google', async () => {
  await doodlePage.open();
  await doodlePage.shouldBeOpen();
  await doodlePage.titleShouldBeVisible("Nigeria Independence Day 2021");
});