(function() {

  'use strict';

  angular
    .module('libraryCtrl', [
      'authSrvc',
      'songsSrvc'
    ])
    .controller('LibraryCtrl', libraryController);

  libraryController.$inject = ['$rootScope', '$anchorScroll', 'sessionControl', 'libraryService'];

  function libraryController($rootScope, $anchorScroll, sessionControl, libraryService) {
    var vm = this;
    vm.userId = 3;
    // sessionControl.get('id')
    vm.songs = {};
    vm.goToTop = $anchorScroll;

    getLibrary();

    function getLibrary() {
      libraryService.getLibrary(vm.userId).then(function(data) {
        vm.songs = data;
      });
    }

    function playSong($event, song) {
      $rootScope.$emit('play.song', song);
    }
  }

})();
