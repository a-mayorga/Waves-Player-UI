(function() {

  'use strict';

  angular
    .module('wavesApp', [
      'ui.router',
      'ngAnimate',
      'mainCtrl',
      'loginCtrl',
      'signUpCtrl',
      'navigationCtrl',
      'artistsCtrl',
      'artistCtrl',
      'albumsCtrl',
      'albumCtrl',
      'songsCtrl',
      'genresCtrl',
      'genreCtrl',
      'libraryCtrl',
      'authSrvc',
      'pageTitleDir',
      'audioPlayerDir',
      'keypressDir',
      'angularUtils.directives.dirPagination',
      'ui.filters',
      'angular-md5',
    ])
    .config(appConfig)
    .run(appRun);

  appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'paginationTemplateProvider'];
  appRun.$inject = ['$rootScope', '$state', 'authService'];

  function appConfig($stateProvider, $urlRouterProvider, $locationProvider, paginationTemplateProvider) {
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

    var navigationState = {
      name: 'navigation',
      url: '/player',
      controller: 'NavigationCtrl',
      controllerAs: 'navigation',
      templateUrl: 'js/templates/navigation.html',
      module: 'public',
      data: {
        pageTitle: 'Inicio'
      }
    }

    var artistsState = {
      name: 'navigation.artists',
      url: '/artists',
      controller: 'ArtistsCtrl',
      controllerAs: 'artists',
      templateUrl: 'js/templates/artists.html',
      module: 'public',
      data: {
        pageTitle: 'Artistas'
      }
    }

    var artistState = {
      name: 'navigation.artist',
      url: '/artists/{id}',
      controller: 'ArtistCtrl',
      controllerAs: 'artist',
      templateUrl: 'js/templates/artist.html',
      module: 'public',
      data: {
        pageTitle: 'Artista'
      }
    }

    var albumsState = {
      name: 'navigation.albums',
      url: '/albums',
      controller: 'AlbumsCtrl',
      controllerAs: 'albums',
      templateUrl: 'js/templates/albums.html',
      module: 'public',
      data: {
        pageTitle: 'Álbums'
      }
    }

    var albumState = {
      name: 'navigation.album',
      url: '/albums/{id}',
      controller: 'AlbumCtrl',
      controllerAs: 'album',
      templateUrl: 'js/templates/album.html',
      module: 'public',
      data: {
        pageTitle: 'Álbum'
      }
    }

    var songsState = {
      name: 'navigation.songs',
      url: '/songs',
      controller: 'SongsCtrl',
      controllerAs: 'songs',
      templateUrl: 'js/templates/songs.html',
      module: 'public',
      data: {
        pageTitle: 'Canciones'
      }
    }

    var genresState = {
      name: 'navigation.genres',
      url: '/genres',
      controller: 'GenresCtrl',
      controllerAs: 'genres',
      templateUrl: 'js/templates/genres.html',
      module: 'public',
      data: {
        pageTitle: 'Géneros'
      }
    }

    var genreState = {
      name: 'navigation.genre',
      url: '/genres/{id}',
      controller: 'GenreCtrl',
      controllerAs: 'genre',
      templateUrl: 'js/templates/genre.html',
      module: 'public',
      data: {
        pageTitle: 'Género'
      }
    }

    var libraryState = {
      name: 'navigation.library',
      url: '/library',
      controller: 'LibraryCtrl',
      controllerAs: 'library',
      templateUrl: 'js/templates/library.html',
      module: 'public',
      data: {
        pageTitle: 'Biblioteca'
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
    $stateProvider.state(navigationState);
    $stateProvider.state(artistsState);
    $stateProvider.state(artistState);
    $stateProvider.state(albumsState);
    $stateProvider.state(albumState);
    $stateProvider.state(songsState);
    $stateProvider.state(genresState);
    $stateProvider.state(genreState);
    $stateProvider.state(libraryState);
    $stateProvider.state(notFoundState);

    /* Defining redirection state when the route on the address bar doesn't match any state */
    $urlRouterProvider.otherwise('404');

    /* Disabling # notation on the address bar */
    $locationProvider.html5Mode(true);

    paginationTemplateProvider.setPath('libs/angular-utils-pagination/dirPagination.tpl.html');
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
        $state.go('navigation.albums');
      }
    });
  }


})();
