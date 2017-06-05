(function() {

  'use strict';

  angular
    .module('songsCtrl', [
      'authSrvc',
      'songsSrvc',
      'librarySrvc'
    ])
    .controller('SongsCtrl', songsController);

  songsController.$inject = ['$rootScope', '$anchorScroll', 'sessionControl', 'songsService', 'libraryService'];

  function songsController($rootScope, $anchorScroll, sessionControl, songsService, libraryService) {
    var vm = this;
    vm.songs = {};
    vm.playSong = playSong;
    vm.addToLibrary = addToLibrary;
    vm.goToTop = $anchorScroll;

    getSongs();

    function getSongs() {
      songsService.getSongs().then(function(data) {
        vm.songs = data;
      });
    }

    function addToLibrary($event, songId) {
      var libraryData = {
        songID: songId,
        userID: sessionStorage.getItem("id"),
        // sessionControl.get('id')
      }

      libraryService.addToLibrary(libraryData).then(function(data) {
        alert(data);
      });
    }

    function playSong($event, $index, songs) {
      $rootScope.$emit('loadsongs', $index, songs);
    }
  }

})();
