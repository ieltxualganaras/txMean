(function() {
  'use strict';

  angular
    .module('txAlumnos')
    .config(routeConfig);

  /* @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('alumnosHome', {
        url: '/alumnos',
        templateUrl: 'app/alumnos/alumnos.html',
        controller: 'AlumnosController',
        controllerAs: 'Alumnos',
        resolve: [txRequireLogin]
      });
  }
})();
