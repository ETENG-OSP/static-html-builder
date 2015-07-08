angular.module('app', ['ngRoute']).config(config);

/**
 * @ngInject
 */
function config($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html'
  });
}
