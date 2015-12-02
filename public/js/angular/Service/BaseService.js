(function(window, angular) {
  'use strict';

  angular
    .module('App')
    .service('BaseService', BaseService);

  function BaseService() {
    var vm = this;
  }
})(window, window.angular);
