(function(window, angular) {
  'use strict';

  angular
    .module('App')
    .factory('BaseFactory', BaseFactory);

  BaseFactory.$inject = [];

  function BaseFactory() {
    var factory = {
      example: example,
    };

    return factory;

    function example() {
      // Your Function
    }
  }
})(window, window.angular);
