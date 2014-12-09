angular.module('app').config(function ($routeProvider) {
  'use strict';
  $routeProvider.when('/', {
    templateUrl: 'views/root.html'
  });
});
