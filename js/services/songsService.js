(function() {

  'use strict';

  /**
   * Dependencies:
   * - toastr: Toast messages
   * - authSrvc: Logout
   */
  angular
    .module('songsSrvc', [])
    .factory('songsService', songsService);

  songsService.$inject = ['$http'];

  function songsService($http) {
    var songsService = {
      getSongs: getSongs,
      getSongsByArtist: getSongsByArtist,
      createSong: createSong,
      updateSong: updateSong,
      deleteSong: deleteSong
    }

    return songsService;

    function getSongs() {
      return $http({
          method: 'GET',
          url: 'http://localhost:51954/api/song',
        })
        .then(function(response) {
            return response.data
          },
          function(error) {
            console.log(error);
          });
    }

    function getSongsByArtist(artistId) {
      return $http({
          method: 'GET',
          url: 'http://localhost:51954/api/song/artist/' + artistId,
        })
        .then(function(response) {
            return response.data
          },
          function(error) {
            console.log(error);
          });
    }

    function createSong(songData) {
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

    function updateSong(songData) {
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

    function deleteSong(songId) {
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
