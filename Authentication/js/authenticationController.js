(function () {
    'use strict';

    angular
        .module('myApp', [])
        .controller('AuthenticationController', controller);

    function controller($scope, AuthenticationService) {

        $scope.username = "username";
        $scope.password = "password";

        $scope.authenticate = function () {

            $scope.success = '';
            $scope.error = '';
            //
            // if ($scope.username === username && $scope.password === password) {
            //     $scope.success = "Authenticated";
            // } else {
            //     $scope.error = "Invalid username or password";
            // }

            AuthenticationService.authenticate($scope.username, $scope.password, function (response) {
                if (response.success === true) {

                }
            });

        }

    }

})();
