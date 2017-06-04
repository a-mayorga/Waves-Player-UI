(function() {

  'use strict';

  angular
    .module('libraryCtrl', [
      'authSrvc',
      'librarySrvc',
      'songsSrvc',
    ])
    .controller('LibraryCtrl', libraryController);

  libraryController.$inject = ['$rootScope','$anchorScroll','libraryService','songsService'];

  function libraryController($rootScope,$anchorScroll,libraryService) {
    var vm = this;
    vm.library = {};
    vm.goToTop = $anchorScroll;

    getLibrary();

    function getLibrary() {
        libraryService.getLibrary().then(function(data) {
            vm.library = data;
            console.log(data);
        });
    }

    function playSong($event, song){
      $rootScope.$emit('play.song', song);
    }
  }

})();
