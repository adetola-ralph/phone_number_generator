var angular = require('angular');
var uiRouter = require('@uirouter/angularjs');

var app = angular.module('RandomPhoneNumberGenerator', ['ui.router']);

app.config(function ($stateProvider) {
  $stateProvider.state('stats', {
    url: '/',
    template: '<stats-component></stats-component>'
  })
})

require('./components/index');
