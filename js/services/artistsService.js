(function() {

    'use strict';

    /**
     * Dependencies:
     * - toastr: Toast messages
     * - authSrvc: Logout
     */
    angular
        .module('artistsSrvc', [])
        .factory('artistsService', artistsService);

    artistsService.$inject = ['$http'];

    function artistsService($http) {
        var artistsService = {
            getArtists: getArtists,
            getArtist: getArtist,
            createArtist: createArtist,
            updateArtist: updateArtist,
            deleteArtist: deleteArtist
        }

        return artistsService;

        function getArtists() {
          return $http({
                  method: 'GET',
                  url: 'http://localhost:51954/api/artist',
              })
              .then(function(response) {
                      return response.data
                      // console.log(response.data);
                  },
                  function(error) {
                      console.log(error);
                  });
        }

        function getArtist(artistId) {
          return $http({
                  method: 'GET',
                  url: 'http://localhost:51954/api/artist/' + artistId,
              })
              .then(function(response) {
                      return response.data
                  },
                  function(error) {
                      console.log(error);
                  });
        }

        function createArtist(artistData) {
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

        function updateArtist(artistData) {
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

        function deleteArtist(artistId) {
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
