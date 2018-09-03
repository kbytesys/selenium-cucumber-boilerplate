const { setWorldConstructor } = require('cucumber');
const { getDriverInstance } = require('./driver_helper');

class CustomWorld {
  constructor(args) {
    this.variable = 0;
    this.attach = args.attach;
    this.parameters = args.parameters;
    console.log("iugviugg")
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld)
