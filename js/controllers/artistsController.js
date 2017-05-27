(function() {

    'use strict';

    angular
        .module('artistsCtrl', [
          'artistsSrvc'
        ])
        .controller('ArtistsCtrl', artistsController);

    artistsController.$inject = ['artistsService'];

    function artistsController(artistsService) {
        var vm = this;
        vm.artists = {};
        getArtists();

        function getArtists() {
            artistsService.getArtists().then(function(data) {
                vm.artists = data;
            });
        }
    }

})();
