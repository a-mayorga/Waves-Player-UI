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

  authService.$inject = [];

  function sessionControl() {
    /* Factory to control sessions with local storage (get, set, unset) */
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

  function authService() {
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

    function cacheSession(username, name, group) {
      sessionControl.set('isLogged', true);
      sessionControl.set('username', username);
      sessionControl.set('name', name);
      sessionControl.set('group', group);
    }

    function uncacheSession() {
      sessionControl.unset('isLogged');
      sessionControl.unset('username');
      sessionControl.unset('name');
      sessionControl.unset('group');
    }

    /* Executes the $auth dependency login function (provided by Satellizer) with the login form data */
    function login() {

    }

    function logout() {

    }

    function isLoggedIn() {

    }
  }

})();
