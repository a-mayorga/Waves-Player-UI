(function() {

  'use strict';

  angular
    .module('loginCtrl', [
      'authSrvc',
      'angular-md5',
    ])
    .controller('LoginCtrl', loginController);

  loginController.$inject = ['authService', 'md5'];

  function loginController(authService, md5) {
    var vm = this;
    vm.loginData = {};
    vm.login = login;

    function login(){
      vm.loginData.password = md5.createHash(vm.loginData.password || '');
      // console.log(vm.loginData.password);
      authService.login(vm.loginData);
    }
  }

})();
