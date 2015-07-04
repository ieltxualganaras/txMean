(function() {
  'use strict';

  angular
    .module('sarasa')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
