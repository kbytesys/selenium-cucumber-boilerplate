const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('Example', async function() {
  console.error("aaaaaaaaaaaaa");
  console.log(this.parameters);
  console.log(this);
  this.setTo(5);
});
