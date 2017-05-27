(function() {

    'use strict';

    angular
        .module('songsCtrl', [
          'songsSrvc'
        ])
        .controller('SongsCtrl', songsController);

    songsController.$inject = ['songsService'];

    function songsController(songsService) {
        var vm = this;
        vm.songs = {};

        getSongs();

        function getSongs() {
            songsService.getSongs().then(function(data) {
                vm.songs = data;
            });
        }
    }

})();
