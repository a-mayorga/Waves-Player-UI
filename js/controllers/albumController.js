(function() {

  'use strict';

  angular
    .module('albumCtrl', [
      'artistsSrvc',
      'songsSrvc',
      'librarySrvc',
      'authSrvc'
    ])
    .controller('AlbumCtrl', albumController);

  albumController.$inject = ['$rootScope', '$stateParams', 'albumsService', 'songsService','libraryService', 'sessionControl'];

  function albumController($rootScope, $stateParams, albumsService, songsService,libraryService, sessionControl) {
    var vm = this;
    vm.albumId = $stateParams.id;
    vm.userId = sessionControl.get('id');
    vm.albumData = {};
    vm.songs = {};
    vm.playSong = playSong;
    vm.addToLibrary = addToLibrary;

    getAlbumData();

    function getAlbumData() {
      albumsService.getAlbumData(vm.albumId).then(function(data) {
        vm.albumData.title = data.title;
        vm.albumData.year = data.year;
      });

      songsService.getSongsByAlbum(vm.albumId).then(function(data) {
        vm.songs = data;
      });
    }

    function addToLibrary($event, songId) {
      var libraryData = {
        songID: songId,
        userID: vm.userId,
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
