(function() {

  'use strict';

  angular
    .module('signUpCtrl', [
      'userSrvc',
      'angular-md5',
    ])
    .controller('SignUpCtrl', signUpController);

  signUpController.$inject = ['userService','md5'];

  function signUpController(userService, md5) {
    var vm = this;
    vm.signUpData = {};
    vm.signUp = signUp;

    function signUp(){
      vm.signUpData.password = md5.createHash(vm.signUpData.password || '');
      vm.signUpData.status = 1;
      userService.createUser(vm.signUpData);
      vm.signUpData = {};
    }
  }

})();
