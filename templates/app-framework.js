angular.module('appFramework', [
  <% _.each(angularModules, function (moduleName) { %>
  '<%= moduleName %>',
  <% }) %>
  'ngRoute'
]);
