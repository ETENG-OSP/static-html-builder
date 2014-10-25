(function () {
  'use strict';
  function SignIn($q) {
    var deferred = $q.defer();
    deferred.resolve(1);
    // $timeout(function () {
    // }, 2000);
    return deferred.promise;
  }

  SignIn.$inject = ['$q', '$timeout'];

  function Config($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/root.html',
      controller: 'RootController',
      controllerAs: 'root',
      resolve: {
        signin: SignIn
      }
    });
  }

  Config.$inject = ['$routeProvider'];
  angular.module('app').config(Config);
})();
