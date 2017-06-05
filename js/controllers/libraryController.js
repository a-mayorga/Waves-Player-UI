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
    vm.userId = sessionControl.get('id');
    // sessionControl.get('id')
    vm.songs = {};
    vm.playSong = playSong;
    vm.goToTop = $anchorScroll;
    vm.deleteToLibrary = deleteToLibrary;

    getLibrary();

    function getLibrary() {
      libraryService.getLibrary(vm.userId).then(function(data) {
        vm.songs = data;
      });
    }

    function deleteToLibrary($event, songId) {
      var libraryData = {
        songID: songId,
        userID: sessionControl.get('id'),
        // sessionControl.get('id')
      }

      libraryService.deleteToLibrary(libraryData).then(function(data) {
        alert(data);
      });
    }

    function playSong($event, $index, songs) {
      $rootScope.$emit('loadsongs', $index, songs);
    }
  }

})();
