(function() {

  'use strict';

  angular
    .module('wavesApp', [
      'ui.router',
      'ngAnimate',
      'mainCtrl',
      'loginCtrl',
      'signUpCtrl',
      'navCtrl',
      'homeCtrl',
      'authSrvc',
      'pageTitleDir',
      'playerCtrl',
    ])
    .config(appConfig)
    .run(appRun);

  appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  appRun.$inject = ['$rootScope', '$state', 'authService'];

  function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    /* Creating states */
    var loginState = {
      name: 'login',
      url: '/',
      controller: 'LoginCtrl',
      controllerAs: 'login',
      templateUrl: 'js/templates/login.html',
      module: 'public',
      data: {
        pageTitle: 'Iniciar Sesión'
      }
    }

    var signUpState = {
      name: 'signup',
      url: '/signup',
      controller: 'SignUpCtrl',
      controllerAs: 'signup',
      templateUrl: 'js/templates/signup.html',
      module: 'public',
      data: {
        pageTitle: 'Registro'
      }
    }

    // var appState = {
    //   name: 'app',
    //   url: '/app',
    //   controller: 'NavigationCtrl',
    //   controllerAs: 'navigation',
    //   templateUrl: 'js/templates/navigation.html',
    //   module: 'private'
    // }
    //
    // var homeState = {
    //   name: 'app.home',
    //   url: '/home',
    //   controller: 'HomeCtrl',
    //   controllerAs: 'home',
    //   templateUrl: 'js/templates/home.html',
    //   module: 'private',
    //   data: {
    //     pageTitle: 'Inicio'
    //   }
    // }

    var playerState = {
      name: 'player',
      url: '/player',
      controller: 'PlayerCtrl',
      controllerAs: 'player',
      templateUrl: 'js/templates/player.html',
      module: 'private',
      data: {
        pageTitle: 'Player'
      }
    }

    var notFoundState = {
      name: '404',
      url: '/404',
      templateUrl: 'js/templates/404.html',
      module: 'public',
      data: {
        'pageTitle': 'Página no encontrada'
      }
    }

    /* Adding states to the StateProvider */
    $stateProvider.state(loginState);
    $stateProvider.state(signUpState);
    // $stateProvider.state(appState);
    // $stateProvider.state(homeState);
    $stateProvider.state(playerState);
    $stateProvider.state(notFoundState);

    /* Defining redirection state when the route on the address bar doesn't match any state */
    $urlRouterProvider.otherwise('404');

    /* Disabling # notation on the address bar */
    $locationProvider.html5Mode(true);

  }

  function appRun($rootScope, $state, authService) {
    /* Listening to state changes to decide if the user is authorized to see its template */
    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
      /* If the current state has a private module and the user is not logged in, return to the login */
      if (toState.module === 'private' && !authService.isLoggedIn()) {
        evt.preventDefault();
        //toastr.error('Debes iniciar sesión primero', 'Error');
        $state.go('login');
        alert('Debes iniciar sesión primero');
      }

      /* Avoiding a logged user from returning to the login form */
      if (toState.name === 'login' && authService.isLoggedIn()) {
        evt.preventDefault();
        $state.go('player');
      }
    });
  }


})();
