(function() {
  'use strict';

  angular
    .module('txMain')

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'Main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
