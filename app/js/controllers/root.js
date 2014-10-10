angular.module('app.controllers').controller('root', [
  '$scope',
  'FileUploader',
  '$http',
  'config',
  'welcome',
function ($scope, FileUploader, $http, config, welcome) {
  console.log('root loaded');

  $scope.uploader = new FileUploader({
    url: config.host + '/upload'
  });

}]);
