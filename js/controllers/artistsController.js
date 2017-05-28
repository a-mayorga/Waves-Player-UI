(function() {

    'use strict';

    angular
        .module('artistsCtrl', [
          'artistsSrvc'
        ])
        .controller('ArtistsCtrl', artistsController);

    artistsController.$inject = ['$anchorScroll', 'artistsService'];

    function artistsController($anchorScroll, artistsService) {
        var vm = this;
        vm.artists = {};
        vm.goToTop = $anchorScroll;
        
        getArtists();

        function getArtists() {
            artistsService.getArtists().then(function(data) {
                vm.artists = data;
            });
        }
    }

})();
