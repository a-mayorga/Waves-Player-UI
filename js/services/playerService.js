(function() {

    'use strict';

    angular
        .module('playerSrvc', [])
        .factory('playerService', playerService);

    playerService.$inject = ['$http'];

    function playerService($http) {
        var playerService = {
            getDataSongs: getDataSongs,
        }

        return playerService;

        function getDataSongs(){
          return $http({
              method: 'GET',
              url: 'http://localhost:51954/api/player/1',
            })
            .then(function(response) {
                return response.data;
              },
              function(error) {
                console.log(error);
              });
        }
    }

})();
