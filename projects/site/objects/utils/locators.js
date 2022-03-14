const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
const lower = 'abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const byTextCaseInsensitive = (text) => locate(`./*[contains(translate(text(),'${upper}','${lower}'),'${text.toLowerCase()}')]`);

module.exports = {
  byTextCaseInsensitive
};
