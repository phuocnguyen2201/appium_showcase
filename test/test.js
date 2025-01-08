const {remote} = require('webdriverio');
const { locators } = require('../src/locators/locators');
const { Utility } = require('../src/utils/common');
const androidCaps = require('../capabilities/androidCaps');

const wdOpts = {
  hostname: process.env.APPIUM_HOST || '127.0.0.1',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities: androidCaps,
};

describe('First test with mocha', () => {
  let driver = null;
  before(async () => {
      driver = await remote(wdOpts);
  });

  it('should have a title', async () => {
    const util = new Utility(driver);
    const allowButton = await driver.$(locators.allowButton);

    await allowButton.click();
    
    util.performSwipe('down');
    
    await driver.$(locators.rejectButton).click();

    const searchButton = await driver.$(locators.searchButton);
    searchButton.click();

    const searchInput = await driver.$(locators.searchInput);
    await searchInput.setValue('whiteout');
    await driver.keys(['Enter']);
  });
});