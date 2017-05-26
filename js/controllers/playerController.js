(function() {

  'use strict';

  angular
    .module('playerCtrl', [
      'authSrvc'
    ])
    .controller('PlayerCtrl', playerController);

  playerController.$inject = ['sessionControl'];

  function playerController(sessionControl) {
    var vm = this;
    vm.userData = {
      id: sessionControl.get('id'),
      name: sessionControl.get('name'),
      email: sessionControl.get('email'),
      username: sessionControl.get('username'),
      status: sessionControl.get('status')
    };

  }

})();
