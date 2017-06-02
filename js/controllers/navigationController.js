(function() {

  'use strict';

  angular
    .module('navigationCtrl', [
      'authSrvc',
      'playerSrvc',
    ])
    .controller('NavigationCtrl', navigationController);

  navigationController.$inject = ['sessionControl','playerService'];

  function navigationController(sessionControl,playerService) {
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
