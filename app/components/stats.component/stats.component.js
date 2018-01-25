angular.module('RandomPhoneNumberGenerator')
  .component('statsComponent',{
    templateUrl: '/static/components/stats.component/stats.component.html',
    controller: function ($q, $http) {
      var _this = this;
      _this.maxNumber = '';
      _this.minNumber = '';
      _this.total = '';

      $q.all({
        maxNumber: $http.get('/api/v1/phone-numbers/max'),

        minNumber: $http.get('/api/v1/phone-numbers/min'),

        totalNumber: $http.get('/api/v1/phone-numbers/total'),
      }).then(function (result) {
        _this.maxNumber = result.maxNumber.data.data;
        _this.minNumber = result.minNumber.data.data;
        _this.total = result.totalNumber.data.data;
      });
    },
  });

