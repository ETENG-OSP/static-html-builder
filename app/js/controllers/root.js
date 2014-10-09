angular.module('app.controllers').controller('root', [
  '$scope',
  'welcome',
function ($scope, welcome) {

  function load() {
    welcome.getText().then(function (result) {
      $scope.text = result;
    });
  }

  load();

}]);
