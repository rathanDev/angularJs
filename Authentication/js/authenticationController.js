app.controller('authenticationController', function ($scope) {

    $scope.username = "username";
    $scope.password = "password";

    $scope.authenticate = function () {

        var username = "admin";
        var password = "pass";

        $scope.success = '';
        $scope.error = '';

        if ($scope.username === username && $scope.password === password) {
            $scope.success = "Authenticated";
        } else {
            $scope.error = "Invalid username or password";
        }

    }

});
