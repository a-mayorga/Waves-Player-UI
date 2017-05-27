(function() {

    'use strict';

    /**
     * Dependencies:
     * - toastr: Toast messages
     * - authSrvc: Logout
     */
    angular
        .module('albumsSrvc', [])
        .factory('albumsService', albumsService);

    albumsService.$inject = ['$http'];

    function albumsService($http) {
        var albumsService = {
            getAlbums: getAlbums,
            createAlbum: createAlbum,
            updateAlbum: updateAlbum,
            deleteAlbum: deleteAlbum
        }

        return albumsService;

        function getAlbums() {
          return $http({
                  method: 'GET',
                  url: 'http://localhost:51954/api/album',
              })
              .then(function(response) {
                      return response.data
                  },
                  function(error) {
                      console.log(error);
                  });
        }

        function createAlbum(albumData) {
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

        function updateAlbum(albumData) {
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

        function deleteAlbum(albumId) {
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
