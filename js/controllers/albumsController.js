(function() {

    'use strict';

    angular
        .module('albumsCtrl', [
          'albumsSrvc'
        ])
        .controller('AlbumsCtrl', albumsController);

    albumsController.$inject = ['albumsService'];

    function albumsController(albumsService) {
        var vm = this;
        vm.albums = {};

        getAlbums();

        function getAlbums() {
            albumsService.getAlbums().then(function(data) {
                vm.albums = data;
            });
        }
    }

})();
