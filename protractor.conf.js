/* eslint-disable max-len */

exports.config = {
  // 设置webdriver-manager启动的端口
  // seleniumAddress:env.seleniumAddress,
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'jasmine', // Type of Framework used
  directConnect: true,
  specs: ['./src/spec/home-spec.ts'], // Name of the Specfile


  // 要安装firefox相应的driver
  capabilities: {
    browserName: 'chrome',
    // browserName:'firefox'
  },

  /* //同时运行多个浏览器的配置
    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    }],*/

  // chromeDriver: './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.46',
  // geckoDriver:'./node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.24.0',
  // firefoxPath:'./proj/SMPC/ccenv/products/3rd/firefox/firefox',

  // getPageTimeout:20000,
  // allScriptsTimeout: 30000,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 600000,
  },

  // html报告的配置
  onPrepare: function() {
    // Override the timeout for webdriver.
    // browser.manage().timeouts().setScriptTimeout(30000);

    // html报告的配置
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: './reporter/html',
          takeScreenshots: true,
          takeScreenshotsOnlyOnFailures: true,
          filePrefix: 'index',
          fileNameDateSuffix: true,
          cleanDestination: false,
        }),
    );
    // 控制台报告的配置
    jasmine.getEnv().addReporter(
        new SpecReporter({
          spec: {
            displayStacktrace: true,
          },
        }));
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json'),
      // Relative path of tsconfig.json file
    });
  },
  onComplete() {
    // global test tear-down goes here
  },
};
