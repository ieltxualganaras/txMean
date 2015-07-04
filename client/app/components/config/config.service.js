(function() {
  'use strict';

  angular
    .module('txConfig')
    .provider('txConfig', hexProvider);

    /* @ngInject */
    function hexProvider(DEFAULT_HEX_CONFIG){
      var currentHexConfig = {};

      this.setConfig = _.partial(_.extend, currentHexConfig);
      this.$get = hexFactory;

      /* @ngInject */
      function hexFactory(){
        return _.defaults(currentHexConfig, DEFAULT_HEX_CONFIG);
      }
    }

})();
