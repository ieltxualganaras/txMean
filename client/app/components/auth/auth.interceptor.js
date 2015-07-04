(function() {
  'use strict';
  /**
   * Private module, a utility, required internally by 'http-auth-interceptor'.
   */
  angular.module('txAuth')
    .factory('authInterceptor', authInterceptor);

  /* ngInject */
  function authInterceptor(bluebird, authService) {

    var AuthInterceptor = {
      request: request
    }

    return AuthInterceptor;

    function request(config) {
      authService.getToken()
        .then(function(token) {
          config.headers.authorization = token;
        })
        return config;
    };

})();
