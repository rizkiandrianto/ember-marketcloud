(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['marketcloud'] };
  }

  define('marketcloud', [], vendorModule);
})();
