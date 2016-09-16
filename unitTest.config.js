global.expect = require("chai").expect;

var controllers = require('require-all')({
  dirname     :  __dirname + '/src',
  filter      :  /spec.js$/,
  recursive   : true
});
