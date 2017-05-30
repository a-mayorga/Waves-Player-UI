(function() {

    'use strict';

    angular
        .module('artistCtrl', [
          'artistsSrvc'
        ])
        .controller('ArtistCtrl', artistController);

    artistController.$inject = ['$stateParams', 'artistsService'];

    function artistController($stateParams, artistsService) {
        var vm = this;
        vm.artistId = $stateParams.id;

        getArtistData();

        function getArtistData(){
          artistsService.getArtist(vm.artistId).then(function(data) {
              console.log(data);
          });
        }
    }

})();
