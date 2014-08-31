angular.module('app.routes', ['ngRoute']).config([
  '$locationProvider',
  '$routeProvider',
function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
}]);
