angular.module('app.constants', []).config([
  'config',
function (config) {
  if (window.xdomain) {
    var proxy = {};
    proxy[config.host] = '/proxy.html';
    xdomain.slaves(proxy);
  }
}]);
