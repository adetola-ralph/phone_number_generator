var math = require('mathjs');

module.exports = {
  generateNumbers: function (amount) {
    var size = 1;
    var lowerBound = '10000000';
    var upperBound = '100000000';
    if (amount) {
      size = amount;
    }

    var numbers = math.randomInt([size], lowerBound, upperBound);

    return numbers.map(function (num) {
      return '08' + num.toString();
    });
  }
};
