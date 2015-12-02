(function(window, angular) {
  'use strict';

  angular
    .module('App')
    .directive('BaseDirective', BaseDirective);

  function BaseDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: '/path/to/template',
      scope: {
        example: '=',
      },
      controller: controller,
      controllerAs: 'vm',
      bindToController: true,
      link: link,
    };

    return directive;

    function link(scope, element, attr, ctrl) {
      // To Do
    }
  }

  controller.$inject = ['$scope'];

  function controller($scope) {
    var vm = this;
  }
})(window, window.angular);
