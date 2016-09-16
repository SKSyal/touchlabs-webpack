var calculator = require('./testModule');

it("should subtract second number from first", function() {

  expect(calculator.subtraction(7, 10)).to.equal(-3);
  
});
