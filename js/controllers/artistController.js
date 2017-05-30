(function() {

  'use strict';

  angular
    .module('artistCtrl', [
      'artistsSrvc',
      'songsSrvc'
    ])
    .controller('ArtistCtrl', artistController);

  artistController.$inject = ['$stateParams', 'artistsService', 'songsService'];

  function artistController($stateParams, artistsService, songsService) {
    var vm = this;
    vm.artistId = $stateParams.id;
    vm.artistData = {};
    vm.songs = {};

    getArtistData();

    function getArtistData() {
      artistsService.getArtistData(vm.artistId).then(function(data) {
        vm.artistData.name = data.name;
      });

      songsService.getSongsByArtist(vm.artistId).then(function(data) {
        vm.songs = data;
      })
    }
  }

})();
