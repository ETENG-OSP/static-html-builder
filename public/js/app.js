angular.module('app', [
  'ngRoute',
  'app.controllers',
  'app.directives'
]).config([
  '$routeProvider',
  '$locationProvider',
function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $routeProvider.when('/', {
    templateUrl: 'views/root.html'
  }).when('/test', {
    templateUrl: 'views/test.html'
  }).when('/test2', {
    templateUrl: 'views/dashboard.html'
  });
}]);
