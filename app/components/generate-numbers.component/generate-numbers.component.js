angular.module('RandomPhoneNumberGenerator')
  .component('generateNumbersComponent',{
    templateUrl: '/static/components/generate-numbers.component/generate-numbers.component.html',
    controller: function ($q, $http) {
      var _this = this;
      _this.numberAmount = 1;
      _this.generatedNumbers;
      _this.errorMessage;

      _this.generateNumbers = function () {
        if (isNaN(_this.numberAmount) || parseInt(_this.numberAmount, 10) <= 0) {
          _this.errorMessage = 'Please enter a number greater than 0';
          return;
        }

        _this.errorMessage = '';
        $http.post('/api/v1/phone-numbers', { amount: _this.numberAmount })
          .then(function (result) {
            _this.generatedNumbers = result.data.data;
          })
          .catch(function (err) {
            _this.errorMessage = 'An error occured, please try again';
          });
      };
    },
  });

