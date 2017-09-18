app.controller('authenticationController', function ($scope) {

    $scope.username = "username";
    $scope.password = "password";

    $scope.authenticate = function () {
        var username = "admin";
        var password = "pass";
        if ($scope.username === username && $scope.password === password) {
            $scope.success = "Authenticated";
            return;
        } else {
            $scope.error = "Invalid username or password";
        }
    }

});
