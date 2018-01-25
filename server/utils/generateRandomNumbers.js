var math = require('mathjs');

module.exports = {
  generateNumbers: function (amount) {
    var size = 1;
    var lowerBound = '100000000';
    var upperBound = '1000000000';
    if (amount) {
      size = amount;
    }

    var numbers = math.randomInt([size], lowerBound, upperBound);

    return numbers.map(function (num) {
      return '08' + num.toString();
    });
  }
};
