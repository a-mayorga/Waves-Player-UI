(function() {

  'use strict';

  angular
    .module('artistCtrl', [
      'artistsSrvc',
      'songsSrvc',
      'librarySrvc',
      'authSrvc'
    ])
    .controller('ArtistCtrl', artistController);

  artistController.$inject = ['$rootScope', '$stateParams', 'artistsService', 'songsService','libraryService', 'sessionControl'];

  function artistController($rootScope, $stateParams, artistsService, songsService,libraryService, sessionControl) {
    var vm = this;
    vm.artistId = $stateParams.id;
    vm.userId = sessionControl.get('id');
    vm.artistData = {};
    vm.songs = {};
    vm.playSong = playSong;
    vm.addToLibrary = addToLibrary;

    getArtistData();

    function getArtistData() {
      artistsService.getArtistData(vm.artistId).then(function(data) {
        vm.artistData.name = data.name;
      });

      songsService.getSongsByArtist(vm.artistId).then(function(data) {
        vm.songs = data;
      });
    }

    function addToLibrary($event, songId) {
      var libraryData = {
        songID: songId,
        userID: vm.userId
      }

      libraryService.addToLibrary(libraryData).then(function(data) {
        alert(data);
      });
    }

    function playSong($event, $index, songs){
      $rootScope.$emit('loadsongs', $index, songs);
    }
  }

})();
