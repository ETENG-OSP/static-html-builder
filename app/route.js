// @ngInject
angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/root');
  $urlRouterProvider.when('/root', '/root/meals');

  $stateProvider.state('root', {
    url: '/root',
    templateUrl: 'root.html'
  });

  $stateProvider.state('root.meal', {
    url: '/meals',
    templateUrl: 'views/meal-master.html'
  });

  $stateProvider.state('root.meal-detail', {
    url: '/meals/:id',
    templateUrl: 'views/meal-detail.html'
  });

  $stateProvider.state('root.fellow', {
    url: '/fellow',
    templateUrl: 'views/test1.html'
  });

  $stateProvider.state('root.statistics', {
    url: '/statistics',
    templateUrl: 'views/test2.html'
  });

});
