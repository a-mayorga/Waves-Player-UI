(function() {

    'use strict';

    angular
        .module('mainCtrl', [
          'authSrvc'
        ])
        .controller('MainCtrl', mainController);

    mainController.$inject = ['authService'];

    function mainController() {
        var vm = this;        
    }

})();
