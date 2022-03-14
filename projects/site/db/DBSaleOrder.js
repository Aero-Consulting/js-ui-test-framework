const codeceptjs = require('codeceptjs');

const allure = codeceptjs.container.plugins('allure');
const db = codeceptjs.container.helpers('CustomDbHelper');
const { I } = inject();

class DBSaleOrder {
  async orderExist(id) {
    await allure.createStep(`Заказ ${id} существует в таблице "b_sale_order"`, async () => {
      const result = await db.databaseQuery('SELECT * FROM b_sale_order WHERE ACCOUNT_NUMBER = ?', id);

      // await I.assertLengthAboveThan(result, 0);
      await I.assertLengthOf(result, 1);
    });
  }
}

module.exports = new DBSaleOrder();
module.exports.DBSaleOrder = DBSaleOrder;
