(function() {

    'use strict';

    angular
        .module('genresCtrl', [
          'genresSrvc'
        ])
        .controller('GenresCtrl', genresController);

    genresController.$inject = ['genresService'];

    function genresController(genresService) {
        var vm = this;
        vm.genres = {};
        getGenres();

        function getGenres() {
            genresService.getGenres().then(function(data) {
                vm.genres = data;
            });
        }
    }

})();
