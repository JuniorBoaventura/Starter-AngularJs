(function(window, angular) {
  'use strict';

  angular
    .module('App')
    .controller('BaseController', BaseController);

  BaseController.$inject = ['$scope'];

  function FirstController($scope) {
    var vm = this;
  }
})(window, window.angular);
