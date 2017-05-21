(function() {

  'use strict';

  angular
    .module('signUpCtrl', [
      'userSrvc'
    ])
    .controller('SignUpCtrl', signUpController);

  signUpController.$inject = ['userService'];

  function signUpController(userService) {
    var vm = this;
    vm.signUpData = {};
    vm.signUp = signUp;

    function signUp(){
      vm.signUpData.status = 1;
      userService.createUser(vm.signUpData);
      vm.signUpData = {};
    }
  }

})();
