(function() {
  'use strict';

  angular
    .module('txLogin')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('authHome', {
        url: '/login',
        templateUrl: 'app/login/auth.html',
        controller: 'LoginController',
        controllerAs: 'Login'
      });
  }
})();
