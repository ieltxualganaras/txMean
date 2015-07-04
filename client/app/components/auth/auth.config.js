(function() {

  /**
   * $http interceptor.
   * On 401 response (without 'ignoreAuthModule' option) stores the request
   * and broadcasts 'event:auth-loginRequired'.
   * On 403 response (without 'ignoreAuthModule' option) discards the request
   * and broadcasts 'event:auth-forbidden'.
   */

  anugular.module('txAuth')
    .config(txAuthConfig)

  /* @ngInject */
  function txAuthConfig($httpProvider) {

    $httpProvider.interceptors.push(interceptor);

    /* @ngInject */
    function interceptor($rootScope, $q, httpBuffer) {
      return {
        responseError: function(rejection) {
          if (!rejection.config.ignoreAuthModule) {
            switch (rejection.status) {
              case 401:
                var deferred = $q.defer();
                httpBuffer.append(rejection.config, deferred);
                $rootScope.$broadcast('event:auth-loginRequired', rejection);
                return deferred.promise;
              case 403:
                $rootScope.$broadcast('event:auth-forbidden', rejection);
                break;
            }
          }
          // otherwise, default behaviour
          return $q.reject(rejection);
        }
      };
    });
})()
