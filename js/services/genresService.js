(function() {

    'use strict';

    /**
     * Dependencies:
     * - toastr: Toast messages
     * - authSrvc: Logout
     */
    angular
        .module('genresSrvc', [])
        .factory('genresService', genresService);

    genresService.$inject = ['$http'];

    function genresService($http) {
        var genresService = {
            getGenres: getGenre,
            getGenreData: getGenreData,
            createGenre: createGenre,
            updateGenre: updateGenre,
            deleteGenre: deleteGenre
        }

        return genresService;

        function getGenre() {
          return $http({
                  method: 'GET',
                  url: 'http://localhost:51954/api/genre',
              })
              .then(function(response) {
                      return response.data
                  },
                  function(error) {
                      console.log(error);
                  });
        }

        function getGenreData(genreId) {
          return $http({
                  method: 'GET',
                  url: 'http://localhost:51954/api/genre/' + genreId,
              })
              .then(function(response) {
                      return response.data
                  },
                  function(error) {
                      console.log(error);
                  });
        }

        function createGenre(genreData) {
            // return $http({
            //         method: 'POST',
            //         url: 'http://localhost:51954/api/user',
            //         data: JSON.stringify(signUpData),
            //         headers: {
            //             'Content-type': 'application/json'
            //         }
            //     })
            //     .then(function(response) {
            //             console.log(response);
            //             alert(response.data);
            //         },
            //         function(error) {
            //             console.log(error);
            //         });
        }

        function updateGenre(genreData) {
            // return $http({
            //         method: 'POST',
            //         url: 'http://localhost:8000/api/users/update',
            //         data: JSON.stringify(userData),
            //         headers: {
            //             'Content-type': 'application/json'
            //         }
            //     })
            //     .then(function(response) {
            //             // NOTE: Return to the entries and reload them
            //             toastr.success('Usuario editado correctamente');
            //         },
            //         function(error) {
            //             console.log(error.data);
            //             /* NOTE: Filter errors by code */
            //             toastr.error('Hubo un error al editar el usuario');
            //             // toastr.error('Tu sesión expiró');
            //             // authService.logout();
            //         });
        }

        function deleteGenre(genreId) {
            // return $http({
            //         method: 'POST',
            //         url: 'http://localhost:8000/api/users/delete',
            //         data: {
            //             id: userId
            //         },
            //         headers: {
            //             'Content-type': 'application/json'
            //         }
            //     })
            //     .then(function(response) {
            //             // NOTE: Return to the entries and reload them
            //             toastr.success('Usuario eliminado correctamente');
            //         },
            //         function(error) {
            //             console.log(error.data);
            //             /* NOTE: Filter errors by code */
            //             // toastr.error('Hubo un error al crear la entrada');
            //             // toastr.error('Tu sesión expiró');
            //             // authService.logout();
            //         });
        }
    }

})();
