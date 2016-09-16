function addition() {

  var result = 0;

  if (arguments.length === 1) {
    throw "supply more than one number for addition";
  }

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

module.exports = {
  addition: addition
}
