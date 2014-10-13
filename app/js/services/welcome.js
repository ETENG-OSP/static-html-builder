angular.module('app.services').service('welcome', [
  'config',
  '$http',
  '$q',
function (config, $http, $q) {
  'use strict';
  this.getText = function () {
    var deferred = $q.defer();

    $http.put('/api/text')
      .success(deferred.resolve)
      .error(deferred.reject);

    return deferred.promise;
  };

}]);
