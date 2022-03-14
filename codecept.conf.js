const codeceptjs = require('codeceptjs');
const { setSharedCookies } = require('@codeceptjs/configure');

setSharedCookies();

console.log('****************************');
console.log(`BASE_URL ${process.env.BASE_URL}`);
console.log(`API_URL ${process.env.API_URL}`);
console.log('****************************');

const config = {
    helpers: {
      WebDriver: {
        url: (process.env.BASE_URL) ? process.env.BASE_URL : 'https://google.com',
        browser: 'chrome',
        host: 'selenoid',
        protocol: 'http',
        port: 4444,
        path: '/wd/hub',
        restart: true,
        windowSize: '1920x1680',
        smartWait: 10000,
        waitForTimeout: 30000,
        desiredCapabilities: {
          'selenoid:options': {
            enableVNC: true
          },
          chromeOptions: {
            args: ['--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-notifications', '--disable-dev-shm-usage']
          }
        }
      },
      TestPlan: {
        require: './helpers/testplan.js'
      },
      CustomDbHelper: {
        require: './helpers/CustomDbHelper.js',
        conn: {
          DriverName: 'mysql',
          Hostname: process.env.MYSQL_HOST,
          Port: process.env.MYSQL_EXTERNAL_PORT,
          Username: process.env.MYSQL_USER,
          Password: process.env.MYSQL_USER_PASSWORD,
          Database: process.env.MYSQL_DBNAME
        }
      },
      REST: {
        endpoint: (process.env.API_URL) ? process.env.API_URL : 'https://google.com'
      },
      ChaiWrapper: {
        require: 'codeceptjs-chai'
      }
    },
    output: './output',
    include: {
      I: './steps_file.js'
    },
    mocha: {},
    bootstrap: null,
    teardown: null,
    hooks: [],
    plugins: {
      allure: {
        enabled: true,
        outputDir: './allure-results'
      },
      screenshotOnFail: {
        enabled: true
      },
      retryFailedStep: {
        enabled: true
      },
      tryTo: {
        enabled: true
      }
    },
    tests: `./projects/site/tests/example.spec.js`,
    name: 'ui web'
  }
;

if (process.env.RETRY_COUNT) {
  config.helpers.RetryScenario = {
    require: './helpers/RetryScenario.js'
  };
}

exports.config = config;