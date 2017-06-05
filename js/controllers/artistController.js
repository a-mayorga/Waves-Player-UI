(function() {

  'use strict';

  angular
    .module('artistCtrl', [
      'artistsSrvc',
      'songsSrvc',
      'librarySrvc',
    ])
    .controller('ArtistCtrl', artistController);

  artistController.$inject = ['$rootScope', '$stateParams', 'artistsService', 'songsService','libraryService'];

  function artistController($rootScope, $stateParams, artistsService, songsService,libraryService) {
    var vm = this;
    vm.artistId = $stateParams.id;
    vm.artistData = {};
    vm.songs = {};
    vm.playSong = playSong;
    vm.saveSongLibrary = saveSongLibrary;

    getArtistData();

    function getArtistData() {
      artistsService.getArtistData(vm.artistId).then(function(data) {
        vm.artistData.name = data.name;
      });

      songsService.getSongsByArtist(vm.artistId).then(function(data) {
        vm.songs = data;
      });
    }

    function saveSongLibrary($event, song){
      alert('este tiene que guardar');
      // libraryService.saveInLibrary(song).then(function(data) {
      //   alert(data);
      // });
    }

    function playSong($event, song){
      $rootScope.$emit('play.song', song);
    }
  }

})();
