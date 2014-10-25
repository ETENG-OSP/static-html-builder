(function () {
  'use strict';

  function DemoController (data) {
    var vm = this;
    vm.data = data;
  }

  DemoController.$inject = ['data'];
  angular.module('demo').controller('DemoController', DemoController);
})();
