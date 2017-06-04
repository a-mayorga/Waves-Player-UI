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
      scope.holding = false;
      scope.info = {};
      scope.info.albumID = 'no-cover';
      scope.info.state = 'play-button';
      scope.player = angular.element('#player');
      scope.track = angular.element('#track');
      scope.progress = angular.element('#progress');
      scope.handler = angular.element('#handler');
      scope.seekTrack = seekTrack;
      scope.handlerSeek = handlerSeek;

      scope.next = function() {
        $rootScope.$broadcast('audio.next');
      };
      scope.prev = function() {
        $rootScope.$broadcast('audio.prev');
      };

      // Play / pause function for the button or the space bar
      scope.playpause = function() {
        if (scope.playing) {
          scope.audio.pause();
        } else {
          scope.audio.play();
        }
      };

      // Listen for audio-element events
      scope.audio.addEventListener('play', function() {
        scope.playing = true;
        scope.info.state = 'pause';
      });

      scope.audio.addEventListener('pause', function() {
        scope.playing = false;
        scope.info.state = 'play-button';
      });

      scope.audio.addEventListener('loadedmetadata', function() {
        scope.info.duration = this.duration;
      });

      scope.audio.addEventListener('timeupdate', function() {
        var curtime = scope.audio.currentTime;
        var percent = Math.round((curtime * 100) / scope.info.duration);
        scope.progress.css('width', percent + '%');
        scope.handler.css('left', percent + '%');
      });

      scope.audio.addEventListener('ended', function() {
        scope.next();
      });

      // Listen for events emitted by children controllers
      $rootScope.$on('play.song', function(event, data) {
        scope.audio.src = data.songRoute;
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

      function seekTrack(e) {
        scope.holding = true;
        var x = e.pageX - scope.player.prop('offsetLeft') - scope.track.prop('offsetLeft');
        var percent = Math.round((x * 100) / scope.track.prop('offsetWidth'));
        if (percent > 100) percent = 100;
        if (percent < 0) percent = 0;
        scope.progress.css('width', percent + '%');
        scope.handler.css('left', percent + '%');
        scope.audio.play();
        scope.audio.currentTime = (percent * scope.info.duration) / 100;
      }

      function handlerSeek(e){
        e.preventDefault();
        if(scope.holding) seekTrack(e);
      }
    }
  }

})();
