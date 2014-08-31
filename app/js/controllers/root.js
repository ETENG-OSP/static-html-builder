angular.module('app.controllers').controller('root', [
  '$scope',
  'welcome',
function ($scope, welcome) {

  $scope.text = welcome.getText();

}]);
