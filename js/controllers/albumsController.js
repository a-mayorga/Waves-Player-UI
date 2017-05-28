(function() {

    'use strict';

    angular
        .module('albumsCtrl', [
          'albumsSrvc'
        ])
        .controller('AlbumsCtrl', albumsController);

    albumsController.$inject = ['$anchorScroll', 'albumsService'];

    function albumsController($anchorScroll, albumsService) {
        var vm = this;
        vm.albums = {};
        vm.goToTop = $anchorScroll;

        getAlbums();

        function getAlbums() {
            albumsService.getAlbums().then(function(data) {
                vm.albums = data;
            });
        }
    }

})();
