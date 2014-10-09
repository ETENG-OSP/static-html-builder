angular.module('app.services').service('welcome', [
  'config',
  '$http',
  '$q',
function (config, $http, $q) {

  this.getText = function () {
    var deferred = $q.defer();

    $http.put(config.host + '/api/text')
      .success(deferred.resolve)
      .error(deferred.reject);

    return deferred.promise;
  };

}]);
