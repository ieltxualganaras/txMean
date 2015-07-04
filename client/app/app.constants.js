/* global malarkey:false, toastr:false, moment:false, _:false, Promise:false */
(function() {
  'use strict';

  angular
    .module('sarasa')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('bluebird', Promise)
    .constant('_', _);

})();
