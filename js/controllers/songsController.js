(function() {

    'use strict';

    angular
        .module('songsCtrl', [
          'songsSrvc'
        ])
        .controller('SongsCtrl', songsController);

    songsController.$inject = ['$rootScope', '$anchorScroll', 'songsService'];

    function songsController($rootScope, $anchorScroll, songsService) {
        var vm = this;
        vm.songs = {};
        vm.playSong = playSong;
        vm.goToTop = $anchorScroll;

        getSongs();

        function getSongs() {
            songsService.getSongs().then(function(data) {
                vm.songs = data;
            });
        }

        function playSong($event, song){
          $rootScope.$emit('play.song', song);
        }
    }

})();
