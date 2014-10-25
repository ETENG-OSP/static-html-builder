(function () {
  'use strict';
  function RootController(signin) {
    var vm = this;
    vm.text = signin;
  }

  RootController.$inject = ['signin'];
  angular.module('app').controller('RootController', RootController);
})();
