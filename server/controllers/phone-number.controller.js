var numberGenerator = require('./../utils/generateRandomNumbers');
var phoneModel = require('./../models/phone-number.model');

module.exports = {
  generateNumbers: function (req, res) {
    var amount = req.body.amount || 1;
    var data = numberGenerator.generateNumbers(amount);
    // store the number(s) here
    phoneModel.addValue(data).then(function () {
    res.json({
      success: true,
      data: data,
    });
    }).catch(function (){
      res.status(500).json({
        success: false,
        message: 'there was an error please try again',
      });
    });
  },

  getTotalNumber: function (req, res) {
    var data = phoneModel.getTotalNumber()
    res.json({
      success: true,
      data: data,
    });
  },
};
