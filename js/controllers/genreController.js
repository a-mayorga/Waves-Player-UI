(function() {

  'use strict';

  angular
    .module('genreCtrl', [
      'genresSrvc',
      'songsSrvc',
      'librarySrvc'
    ])
    .controller('GenreCtrl', genreController);

  genreController.$inject = ['$rootScope', '$anchorScroll', '$stateParams', 'genresService', 'songsService','libraryService'];

  function genreController($rootScope, $anchorScroll, $stateParams, genresService, songsService,libraryService) {
    var vm = this;
    vm.genreId = $stateParams.id;
    vm.userId = sessionControl.get('id');
    vm.genreData = {};
    vm.songs = {};
    vm.goToTop = $anchorScroll;
    vm.playSong = playSong;
    vm.addToLibrary = addToLibrary;

    getGenreData();

    function getGenreData() {
      genresService.getGenreData(vm.genreId).then(function(data) {
        vm.genreData.name = data.name;
      });

      songsService.getSongsByGenre(vm.genreId).then(function(data) {
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
