var angular = require('angular');

var app = angular.module('RandomPhoneNumberGenerator', []);

app.controller('TestController', function () {
  this.name = 'Olutola';
})

require('./components/index');
