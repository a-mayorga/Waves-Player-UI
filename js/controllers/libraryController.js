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
    vm.songs = {};
    vm.playSong = playSong;
    vm.goToTop = $anchorScroll;
    vm.deleteFromLibrary = deleteFromLibrary;

    getLibrary();

    function getLibrary() {
      libraryService.getLibrary(vm.userId).then(function(data) {
        vm.songs = data;
      });
    }

    function deleteFromLibrary($event, songId) {
      var libraryData = {
        songID: songId,
        userID: vm.userId
      }

      libraryService.deleteFromLibrary(libraryData).then(function(data) {
        alert(data);
        vm.songs = {};
        getLibrary();
      });
    }

    function playSong($event, $index, songs) {
      $rootScope.$emit('loadsongs', $index, songs);
    }
  }

})();
