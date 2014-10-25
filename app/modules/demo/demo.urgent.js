(function () {
  'use strict';
  function LoadData($q) {
    var deferred = $q.defer();
    console.log('resolving');
    deferred.resolve({
      a: 1,
      b: 2
    });
    return deferred.promise;
  }

  LoadData.$inject = ['$q'];

  function Config($routeProvider) {
    $routeProvider.when('/demo', {
      templateUrl: 'modules/demo/demo.html',
      controller: 'DemoController',
      controllerAs: 'demo',
      resolve: {
        data: LoadData
      }
    });
  }

  Config.$inject = ['$routeProvider'];
  angular.module('demo', ['ngRoute']).config(Config);
})();
