angular.module('app').controller('DebugController', function ($state) {
  var vm = this;

  vm.run = function () {
    console.log(arguments);
  };

  vm.sum = function () {
    return vm.list.reduce(function (prev, now) {
      return prev + now.amount;
    }, 0);
  };

  vm.remove = function (index) {
    vm.list.splice(index, 1);
  };

  vm.add = function () {
    vm.list.push(vm.current);
    vm.current = undefined;
  };

});

angular.module('app').directive('appDraggabilly', function () {
  return {
    restrict: 'A',
    scope: {
      dragend: '&'
    },
    link: function (scope, element, attrs) {
      var draggie = new Draggabilly(element[0]);
      function dragend(instance, ev, pointer) {
        scope.dragend({
          $instance: instance,
          $event: ev,
          $pointer: pointer
        });
      }
      draggie.on('dragEnd', dragend);
      scope.$on('$destroy', function () {
        draggie.off('dragEnd', dragend);
      });
    }
  };
});

angular.module('app').directive('appDropzone', function () {
  return {
    restrict: 'A',
    link: function () {

    }
  };
});
