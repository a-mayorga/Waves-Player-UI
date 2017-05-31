(function() {

  'use strict';

  angular
    .module('keypressDir', [])
    .directive('keypressDir', keypressDir);

  keypressDir.$inject = ['$document', '$rootScope'];

  function keypressDir($document, $rootScope) {
    var keyPressDir = {
      link: link,
      restrict: 'A',
    };

    return keyPressDir;

    function link() {
      $document.bind('keyup', function(e) {
        if(e.keyCode == 32){
          $rootScope.$emit('playpause');
        }
      });
    }
  }

})();
