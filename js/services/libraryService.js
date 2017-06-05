(function() {

  'use strict';

  /**
   * Dependencies:
   * - toastr: Toast messages
   * - authSrvc: Logout
   */
  angular
    .module('librarySrvc', [])
    .factory('libraryService', libraryService);

  libraryService.$inject = ['$http'];

  function libraryService($http) {
    var libraryService = {
      getLibrary: getLibrary,
      addToLibrary: addToLibrary,
      deleteFromLibrary: deleteFromLibrary
    }

    return libraryService;

    function getLibrary(userId) {
      return $http({
          method: 'GET',
          url: 'http://localhost:51954/api/library/' + userId,
        })
        .then(function(response) {
            return response.data;
          },
          function(error) {
            console.log(error);
          });
    }

    function addToLibrary(libraryData) {
      return $http({
          method: 'POST',
          url: 'http://localhost:51954/api/library',
          data: JSON.stringify(libraryData),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            return response.data;
          },
          function(error) {
            console.log(error);
          });
    }

    function deleteFromLibrary(libraryData) {
      return $http({
          method: 'POST',
          url: 'http://localhost:51954/api/Delete',
          data: JSON.stringify(libraryData),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            return response.data;
          },
          function(error) {
            console.log(error);
          });
    }

    function deleteSong(songID) {
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
