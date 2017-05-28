(function() {

    'use strict';

    angular
        .module('songsCtrl', [
          'songsSrvc'
        ])
        .controller('SongsCtrl', songsController);

    songsController.$inject = ['$anchorScroll', 'songsService'];

    function songsController($anchorScroll, songsService) {
        var vm = this;
        vm.songs = {};
        vm.goToTop = $anchorScroll;

        getSongs();

        function getSongs() {
            songsService.getSongs().then(function(data) {
                vm.songs = data;
            });
        }
    }

})();
