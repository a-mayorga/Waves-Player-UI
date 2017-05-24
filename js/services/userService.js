(function() {

    'use strict';

    /**
     * Dependencies:
     * - toastr: Toast messages
     * - authSrvc: Logout
     */
    angular
        .module('userSrvc', [
        ])
        .factory('userService', userService);

    userService.$inject = ['$http'];

    function userService($http) {
        var userService = {
            getUsers: getUsers,
            createUser: createUser,
            updateUser: updateUser,
            deleteUser: deleteUser
        }

        return userService;

        function getUsers() {
          return $http({
                  method: 'GET',
                  url: 'http://localhost:51954/api/user',
              })
              .then(function(response) {
                      return response.data
                  },
                  function(error) {
                      console.log(error);
                  });
        }

        function createUser(signUpData) {
            return $http({
                    method: 'POST',
                    url: 'http://localhost:51954/api/user',
                    data: JSON.stringify(signUpData),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then(function(response) {
                        console.log(response);
                    },
                    function(error) {
                        console.log(error);
                    });
        }

        function updateUser(userData) {
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

        function deleteUser(userId) {
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
