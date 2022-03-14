const Helper = require('@codeceptjs/helper');

class RetryScenario extends Helper {
  _before(test) {
    const retryCount = process.env.RETRY_COUNT || 0;

    test.retries(retryCount);
  }
}

module.exports = RetryScenario;
