var angular = require('angular');
var uiRouter = require('@uirouter/angularjs');

var app = angular.module('RandomPhoneNumberGenerator', ['ui.router']);

app.config(function ($stateProvider) {
  $stateProvider.state('stats', {
    url: '/',
    template: '<stats-component></stats-component>',
  })
  .state('phonelist', {
    url: '/phone-list',
    template: '<phone-list-component></phone-list-component>',
  });
});

require('./components/index');
