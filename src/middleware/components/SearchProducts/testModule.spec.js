var calculator = require('./testModule');

it("should throw if called with one number", function() {

  expect(function() {
    calculator.addition(7)
  }).to.throw("supply more than one number for addition");
});

it("should add a series of numbers together", function() {

  expect(calculator.addition(7, 10)).to.equal(17);
});
