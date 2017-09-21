'use strict';

angular
.module('app')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['$location', '$rootScope', 'UserService', 'FlashService'];
function RegisterController($location, $rootScope, UserService, FlashService) {
    var vm = this;
    vm.register = register;
    function register() {
        vm.dataLoading = true;
        UserService.Create(vm.user).then(function (response) {
            if(response.success) {
                FlashService.Success('Registration Succesful', true);
                $location.path('/login');
            } else {
                FlashService.Error(response.message);
                vm.dataLoading = false;
            }
        })
    }
}