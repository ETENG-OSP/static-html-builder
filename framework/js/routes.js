angular.module('app.routes', ['ngRoute']).config([
  '$locationProvider',
function ($locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
}]);
