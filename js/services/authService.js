(function() {

  'use strict';

  /**
   * Dependencies:
   * - toastr: Toast messages
   */
  angular
    .module('authSrvc', [])
    .factory('sessionControl', sessionControl)
    .factory('authService', authService);

  authService.$inject = ['$http', '$state', 'sessionControl'];

  function sessionControl() {
    /* Factory to control sessions with session storage (get, set, unset) */
    var sessionService = {
      get: get,
      set: set,
      unset: unset
    }

    return sessionService;

    function get(key) {
      return sessionStorage.getItem(key);
    }

    function set(key, val) {
      return sessionStorage.setItem(key, val);
    }

    function unset(key) {
      return sessionStorage.removeItem(key);
    }
  }

  function authService($http, $state, sessionControl) {
    /*
      authService returns three functions:

      1) login(): Tries to login to the /api/auth route
      2) logout(): Logs the user out
      3) isLoggedIn(): Checks the local storage variable 'isLogged' and returns either true or false
    */
    var authService = {
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn
    }

    return authService;

    function cacheSession(id, name, email, username, status) {
      sessionControl.set('isLogged', true);
      sessionControl.set('id', id);
      sessionControl.set('name', name);
      sessionControl.set('email', email)
      sessionControl.set('username', username);
      sessionControl.set('status', status);
    }

    function uncacheSession() {
      sessionControl.unset('isLogged');
      sessionControl.unset('id');
      sessionControl.unset('name');
      sessionControl.unset('email');
      sessionControl.unset('username');
      sessionControl.unset('status');
    }

    /* Executes the $auth dependency login function (provided by Satellizer) with the login form data */
    function login(loginData) {
      return $http({
          method: 'POST',
          url: 'http://localhost:51954/api/auth/login',
          data: JSON.stringify(loginData),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            cacheSession(response.data.id, response.data.name, response.data.email,
              response.data.username, response.data.status);
            $state.go('navigation.albums');
          },
          function(error) {
            console.log(error);
          });
    }

    function logout() {
      uncacheSession();
      $state.go('login');
    }

    function isLoggedIn() {
      return sessionControl.get('isLogged') !== null;
    }
  }

})();
