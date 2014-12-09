angular.module('app').config([
  '$routeProvider',

function ($routeProvider) {
  'use strict';
  $routeProvider.when('/', {
    templateUrl: 'views/root.html'
  });
}]);
