const { setWorldConstructor } = require('cucumber');
var {AfterAll, BeforeAll} = require('cucumber');
var { start, install } = require('selenium-standalone');

var webdriverio = require('webdriverio');

class CustomWorld {
  constructor(args) {
    this.attach = args.attach;
    this.parameters = args.parameters;

    this.driver = webdriverio.remote({
      desiredCapabilities: {browserName: 'chrome'}
    });
  }
}

setWorldConstructor(CustomWorld);

BeforeAll({timeout: 60 * 10000}, async function() {
  return new Promise((resolve) => install({logger: function(message) {
    console.log(message);
  }}, () => start({logger: function(message) {
    console.log(message);
  }}, (err, child) => {
    global.selenium_process = child;
    resolve();
  })));
});

AfterAll(() => {
  global.selenium_process.kill();
});
