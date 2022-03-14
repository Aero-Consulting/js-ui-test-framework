const assert = require('assert');

module.exports = () => actor({
  /**
   * Verifies that the number of visible elements by locator is more than num.
   * Resumes test execution, so **should be used inside async function with `await`** operator.
   *
   * ```js
   * let numOfElements = await I.grabNumberOfVisibleElements('p');
   * ```
   * @param locator - located by CSS|XPath|strict locator.
   * @param num - number of visible elements
   */
  async seeNumberOfVisibleElementsMoreThan(locator, num) {
    const res = await this.grabNumberOfVisibleElements(locator);

    await assert.equal(res > num, true, `expected more number of visible elements (${locator}) is ${num}, but found ${res}`);
  }
});
