const DbHelper = require('codeceptjs-dbhelper');
const codeceptjs = require('codeceptjs');

class CustomDbHelper extends DbHelper {
  connect(key, conn, driver) {
    const connection = this.options.conn || conn;

    this.connectionMap[key] = this.createConnection(connection, driver);
    return this.connectionMap[key];
  }

  async databaseQuery(command, ...params) {
    const allurePlugin = codeceptjs.container.plugins('allure');
    let result;

    await allurePlugin.createStep('Подключение к db', async () => {
      await this.connect('testdb');
    });

    if (params.length > 0) {
      await allurePlugin.createStep(`Выполнение запроса: ${command}, с параметрами: ${params}`, async () => {
        result = await this.query('testdb', command, ...params);
      });
    } else {
      await allurePlugin.createStep(`Выполнение запроса: ${command}`, async () => {
        result = await this.query('testdb', command);
      });
    }

    await allurePlugin.createStep('Отключение от db', async () => {
      await this.removeConnection('testdb');
    });

    return result;
  }
}

module.exports = CustomDbHelper;
module.exports.db = new CustomDbHelper();
