(function() {

  /**
   * Private module, a utility, required internally by 'http-auth-interceptor'.
   */
  angular.module('txAuth')
    .factory('txAuthService', authService);

  /* ngInject */
  function authService(bluebird, $http) {
    var authenticatedUser = {};
    var token = null;
    var AuthService = {
      getAuthenticatedUser: bluebird.promisify(getAuthenticatedUser),
      getToken: bluebird.promisify(getToken),
      isLoggedIn: bluebird.promisify(isLoggedIn),
      login: bluebird.promisify(login),
      logout: bluebird.promisify(logout),
      register: bluebird.promisify(register)
    };

    return bluebird.promisifyAll(AuthService, {suffix: ''});

    /**
     * Description of what this does.
     *
     * @param
     * @returns
     */
    function getAuthenticatedUser() {
      return authenticatedUser;
    }
    function getToken() {
      if(_.isNull(token)) {
        throw new Error('token is null');
      }
      return token;
    }
    function isLoggedIn() {
      return _.isEmpty(authenticatedUser);
    }
    function login(credentials) {
      //hit server

      token = response.data.token;
      authenticatedUser = response.data.user;

    }
    function logout() {
      //some logic

      authenticatedUser = {};
    }
    function register(user) {

    }
  }
  //
  //   /* @ngInject */
  //   function httpBuffer($injector) {
  //
  //     var HttpBuffer = {
  //       append: append,
  //       rejectAll: rejectAll,
  //       retryAll: retryAll
  //     }
  //     /** Holds all the requests, so they can be re-requested in future. */
  //     var buffer = [];
  //
  //     /** Service initialized later because of circular dependency problem. */
  //     var $http;
  //
  //     function retryHttpRequest(config, deferred) {
  //       function successCallback(response) {
  //         deferred.resolve(response);
  //       }
  //
  //       function errorCallback(response) {
  //         deferred.reject(response);
  //       }
  //       $http = $http || $injector.get('$http');
  //       $http(config).then(successCallback, errorCallback);
  //     }
  //     /**
  //      * Appends HTTP request configuration object with deferred response attached to buffer.
  //      */
  //     function append(config, deferred) {
  //       buffer.push({
  //         config: config,
  //         deferred: deferred
  //       });
  //     },
  //
  //     /**
  //      * Abandon or reject (if reason provided) all the buffered requests.
  //      */
  //     function rejectAll(reason) {
  //       if (reason) {
  //         for (var i = 0; i < buffer.length; ++i) {
  //           buffer[i].deferred.reject(reason);
  //         }
  //       }
  //       buffer = [];
  //     },
  //
  //     /**
  //      * Retries all the buffered requests clears the buffer.
  //      */
  //     function retryAll(updater) {
  //       for (var i = 0; i < buffer.length; ++i) {
  //         retryHttpRequest(updater(buffer[i].config), buffer[i].deferred);
  //       }
  //       buffer = [];
  //     }
  //
  //     return HttpBuffer;
  //   }
})()
