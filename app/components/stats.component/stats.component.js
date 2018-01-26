angular.module('RandomPhoneNumberGenerator')
  .component('statsComponent',{
    templateUrl: '/static/components/stats.component/stats.component.html',
    controller: function ($q, $http) {
      var _this = this;
      _this.maxNumber = '';
      _this.minNumber = '';
      _this.total = '';
      _this.generatedNumber = '';
      _this.searchNumber;
      _this.searchResultMessage = '';
      
      _this.getStats = function () {
        $q.all({
          maxNumber: $http.get('/api/v1/phone-numbers/max'),
  
          minNumber: $http.get('/api/v1/phone-numbers/min'),
  
          totalNumber: $http.get('/api/v1/phone-numbers/total'),
        }).then(function (result) {
          _this.maxNumber = result.maxNumber.data.data;
          _this.minNumber = result.minNumber.data.data;
          _this.total = result.totalNumber.data.data;
        });
      }

      _this.getStats();

      _this.quickGenerate = function () {
        $http.post('/api/v1/phone-numbers')
          .then(function (result) {
            _this.generatedNumber = result.data.data[0];
            _this.getStats();
          });
      };
      _this.search = function () {
        _this.searchResultMessage = '';
        $http.get('/api/v1/phone-numbers/search?search-number=' + _this.searchNumber)
          .then(function (result) {
            _this.searchResultMessage = result.data.message;
          });
      };
    },
  });

