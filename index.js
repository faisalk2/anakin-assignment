// var webdriver = require("selenium-webdriver");
// const { Builder, By, Key, until } = require('selenium-webdriver');

// const capabilities = {
//     'chromeOptions': {
//         'args': ['--disable-web-security', '--user-date-dir']
//     }
// }
// let driver = new Builder().withCapabilities(capabilities).forBrowser('chrome').build();
// var browser_name = new webdriver.Builder();

// withCapabilities(webdriver.Capabilities.firefox()).build();

// browser.get("http://www.google.com");

// var promise = browser_name.getTitle();

// promise.then(function(title) 

// {

// console.log(title);

// });

// browser.quit();


const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();