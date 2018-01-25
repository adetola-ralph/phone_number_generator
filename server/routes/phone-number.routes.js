var phoneNumberController = require('./../controllers/phone-number.controller');

module.exports = function (router) {
  router.route('/phone-numbers')

  router.get('/phone-numbers/total', phoneNumberController.getTotalNumber);
};
