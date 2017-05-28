(function() {

  'use strict';

  angular
    .module('playerCtrl', [
      'authSrvc',
      'playerSrvc',
    ])
    .controller('PlayerCtrl', playerController);

  playerController.$inject = ['sessionControl','playerService'];

  function playerController(sessionControl,playerService) {
    var vm = this;
    vm.userData = {
      id: sessionControl.get('id'),
      name: sessionControl.get('name'),
      email: sessionControl.get('email'),
      username: sessionControl.get('username'),
      status: sessionControl.get('status')
    };

    getDataSong();

    function getDataSong() {
        playerService.getDataSongs().then(function(data) {
            vm.songData = data;
        });
    }
  }
})();
