(function() {

  'use strict';

  angular
    .module('audioPlayerDir', [])
    .directive('audioPlayer', audioPlayerDir);

  audioPlayerDir.$inject = ['$rootScope'];

  function audioPlayerDir($rootScope) {
    var playerDir = {
      link: link,
      templateUrl: 'js/templates/player.html',
      restrict: 'E',
    };

    return playerDir;

    function link(scope, element) {
      var vm = this;
      scope.audio = new Audio();
      scope.currentNum = 0;
      scope.playing = false;
      scope.info = {};
      scope.info.albumID = 'no-cover';
      scope.info.state = 'play-button';


      // tell others to give me my prev/next track (with audio.set message)
      scope.next = function() {
        $rootScope.$broadcast('audio.next');
      };
      scope.prev = function() {
        $rootScope.$broadcast('audio.prev');
      };

      // tell audio element to play/pause, you can also use scope.audio.play() or scope.audio.pause();
      scope.playpause = function() {
        if (scope.playing) {
          scope.playing = false;
          scope.audio.pause();
          scope.info.state = 'play-button';
        } else {
          scope.playing = true;
          scope.audio.play();
          scope.info.state = 'pause';
        }
      };

      // listen for audio-element events, and broadcast stuff
      scope.audio.addEventListener('play', function() {
        $rootScope.$broadcast('audio.play', this);
      });
      scope.audio.addEventListener('pause', function() {
        $rootScope.$broadcast('audio.pause', this);
      });
      scope.audio.addEventListener('timeupdate', function() {
        $rootScope.$broadcast('audio.time', this);
      });
      scope.audio.addEventListener('ended', function() {
        $rootScope.$broadcast('audio.ended', this);
        scope.next();
      });

      $rootScope.$on('play.song', function(event, data) {
        scope.audio.src = 'http://localhost/waves/media/songs/0000222.mp3';
        scope.audio.play();
        scope.playing = true;
        scope.info = data;
        scope.info.state = 'pause';
        //   scope.currentNum = currentNum;
        //   scope.totalNum = totalNum;
      });

      $rootScope.$on('playpause', function() {
        scope.playpause();
      });

      setInterval(function() {
        scope.$apply();
      }, 100);
    }
  }

})();
