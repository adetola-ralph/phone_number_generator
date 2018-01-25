angular.module('RandomPhoneNumberGenerator')
  .component('phoneListComponent',{
    templateUrl: '/static/components/phone-list.component/phone-list.component.html',
    controller: function ($http) {
      var _this = this;
      _this.phoneNumbers;
      
      $http.get('/api/v1/phone-numbers')
        .then(function (result) {
          _this.phoneNumbers = result.data.data;
        });
    },
  });

