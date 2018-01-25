var numberGenerator = require('./../utils/generateRandomNumbers');

module.exports = {
  generateNumbers: function (req, res) {
    var amount = req.body.amount || 1;
    var data = numberGenerator.generateNumbers(amount);
    // store the number(s) here
    res.json({
      success: true,
      data: data,
    });
  }
};
