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

  function getDataSong(songID){
    return $http({
        method: 'POST',
        url: 'http://localhost:51954/api/player/songs',
        data: JSON.stringify(songID),
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(function(response) {
          $state.go('player');
        },
        function(error) {
          console.log(error);
        });
  }

  function getDataPlayList(songID) {
    return $http({
        method: 'POST',
        url: 'http://localhost:51954/api/player/playList',
        data: JSON.stringify(songID),
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(function(response) {
          $state.go('player');
        },
        function(error) {
          console.log(error);
        });
  } 

})();
