var phoneNumberController = require('./../controllers/phone-number.controller');

module.exports = function (router) {
  router.route('/phone-numbers')
    .post(phoneNumberController.generateNumbers)
    .get(phoneNumberController.getAllNumbers);

  router.get('/phone-numbers/min', phoneNumberController.getMinNumber);

  router.get('/phone-numbers/max', phoneNumberController.getMaxNumber);

  router.get('/phone-numbers/total', phoneNumberController.getTotalNumber);

  router.get('/phone-numbers/search', phoneNumberController.findNumber);
};
