(function() {

  'use strict';

  angular
    .module('loginCtrl', [
      'authSrvc'
    ])
    .controller('LoginCtrl', loginController);

  loginController.$inject = ['authService'];

  function loginController(authService) {
    var vm = this;
    vm.loginData = {};
    vm.login = login;

    function login(){
      authService.login(vm.loginData);
    }
  }

})();
