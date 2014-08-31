angular.module('app.routes').config([
  '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/root.html'
  });

}]);
