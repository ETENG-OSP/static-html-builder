angular.module('appModule', [
  <% _.each(angularModules, function (moduleName) { %>
  '<%= moduleName %>',
  <% }) %>
  'ngRoute'
]);
