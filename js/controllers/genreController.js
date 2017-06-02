(function() {

  'use strict';

  angular
    .module('genreCtrl', [
      'genresSrvc',
      'songsSrvc'
    ])
    .controller('GenreCtrl', genreController);

  genreController.$inject = ['$rootScope', '$anchorScroll', '$stateParams', 'genresService', 'songsService'];

  function genreController($rootScope, $anchorScroll, $stateParams, genresService, songsService) {
    var vm = this;
    vm.genreId = $stateParams.id;
    vm.genreData = {};
    vm.songs = {};
    vm.goToTop = $anchorScroll;
    vm.playSong = playSong;

    getGenreData();

    function getGenreData() {
      genresService.getGenreData(vm.genreId).then(function(data) {
        vm.genreData.name = data.name;
      });

      songsService.getSongsByGenre(vm.genreId).then(function(data) {
        vm.songs = data;
      });
    }

    function playSong($event, song){
      $rootScope.$emit('play.song', song);
    }
  }

})();
