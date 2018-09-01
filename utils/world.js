const { setWorldConstructor } = require('cucumber');
const { getDriverInstance } = require('./driver_helper');

function SeleniumCucumberWorld({attach, parameters}) {
  this.attach = attach;
  this.parameters = parameters;
  getDriverInstance("nobody");
  process.exit();
}

setWorldConstructor(SeleniumCucumberWorld);
