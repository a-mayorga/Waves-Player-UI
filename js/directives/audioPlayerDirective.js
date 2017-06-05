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
      scope.currentTrack = 0;
      scope.playing = false;
      scope.holding = false;
      scope.songs = {};
      scope.info = {};
      scope.info.albumID = 'no-cover';
      scope.info.state = 'play-button';
      scope.player = angular.element('#player');
      scope.track = angular.element('#track');
      scope.progress = angular.element('#progress');
      scope.handler = angular.element('#handler');
      scope.playPause = playPause;
      scope.next = next;
      scope.prev = prev;
      scope.seekTrack = seekTrack;
      scope.handlerSeek = handlerSeek;

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
      $rootScope.$on('loadsongs', function(event, index, songs) {
        scope.songs = {};
        scope.songs = songs;
        scope.currentTrack = index;
        playSong();
      });

      $rootScope.$on('playpause', function() {
        scope.playPause();
      });

      setInterval(function() {
        scope.$apply();
      }, 100);

      function playSong(){
        scope.audio.src = scope.songs[scope.currentTrack].songRoute;
        scope.audio.play();
        scope.playing = true;
        scope.info = scope.songs[scope.currentTrack];
        scope.info.state = 'pause';
      }

      // Play / pause function for the button or the space bar
      function playPause(){
        scope.playing ? scope.audio.pause() : scope.audio.play();
      }

      function next(){
        scope.currentTrack++;

        if(scope.currentTrack >= scope.songs.length){
          scope.currentTrack = scope.songs.length - 1;
        }

        playSong();
      }

      function prev(){
        scope.currentTrack--;

        if(scope.currentTrack < 0){
          scope.currentTrack = 0;
        }

        playSong();
      }

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
