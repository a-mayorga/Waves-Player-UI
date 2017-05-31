(function() {

  'use strict';

  angular
    .module('albumCtrl', [
      'artistsSrvc',
      'songsSrvc'
    ])
    .controller('AlbumCtrl', albumController);

  albumController.$inject = ['$rootScope', '$stateParams', 'albumsService', 'songsService'];

  function albumController($rootScope, $stateParams, albumsService, songsService) {
    var vm = this;
    vm.albumId = $stateParams.id;
    vm.albumData = {};
    vm.songs = {};
    vm.playSong = playSong;

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

    function playSong($event, song){
      $rootScope.$emit('play.song', song);
    }
  }

})();
