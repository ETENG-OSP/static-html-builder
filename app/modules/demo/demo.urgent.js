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

  LoadData.$inject = ['$q'];
  Config.$inject = ['$routeProvider'];
  angular.module('demo', ['ngRoute']).config(Config);
})();
