var angular = require('angular');
var uiRouter = require('@uirouter/angularjs');

var app = angular.module('RandomPhoneNumberGenerator', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  function defaultStateHandler($state) {
    $state.go('stats');
  }
  $urlRouterProvider.when('', defaultStateHandler);

  $urlRouterProvider.when('/', defaultStateHandler);
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('stats', {
    url: '/',
    template: '<stats-component></stats-component>',
  })
  .state('phone-list', {
    url: '/phone-list',
    template: '<phone-list-component></phone-list-component>',
  })
  .state('generate-numbers', {
    url: '/generate-numbers',
    template: '<generate-numbers-component></generate-numbers-component>',
  })
});

require('./components/index');
