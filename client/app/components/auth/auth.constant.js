(function(){
  'use strict';

  angular.module('txAuth')
    .constant('txRequireLogin', authStatus);

    /* @ngInject */
    function authStatus(txAuthService) {
      return txAuthService.isLoggedIn();
    }
})();
