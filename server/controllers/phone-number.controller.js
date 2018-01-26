var numberGenerator = require('./../utils/generateRandomNumbers');
var phoneModel = require('./../models/phone-number.model');

module.exports = {
  generateNumbers: function (req, res) {
    var amount = req.body.amount || 1;
    if (isNaN(amount)) {
      return res.status(400).send({
        success: false,
        message: 'Please enter a valid number',
      });
    }

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

  getAllNumbers: function (req, res) {
    var data = phoneModel.getAll();
    res.json({
      success: true,
      data: data,
    });
  },

  getMinNumber: function (req, res) {
    var data = phoneModel.getMin();
    res.json({
      success: true,
      data: data,
    });
  },

  getMaxNumber: function (req, res) {
    var data = phoneModel.getMax();
    res.json({
      success: true,
      data: data,
    });
  },

  getTotalNumber: function (req, res) {
    var data = phoneModel.getTotalNumber()
    res.json({
      success: true,
      data: data,
    });
  },

  findNumber: function (req, res) {
    var searchNumber = req.query['search-number'];
    var data = phoneModel.findNumber(searchNumber);
    var message = searchNumber + (data ? ' was found in the store' : ' wasn\'t found');
    res.json({
      success: true,
      message: message,
    });
  },
};
