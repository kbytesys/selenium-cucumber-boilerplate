const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('Example', async function() {
  console.log(this.driver.inspect());
  return this.driver.init().url('https://duckduckgo.com/').getTitle().then(function(title) {
    console.log('Title is: ' + title);
    // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
  }).end();
});
