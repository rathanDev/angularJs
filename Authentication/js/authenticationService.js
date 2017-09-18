(function () {
    'use strict';

    angular
        .module('myApp', [])
        .service('AuthenticationService', service);

    function service($http) {

        this.authenticate = function (username, password, callback) {

            this.username = "admin";
            this.password = "pass";

            var authenticationUrl = "http://10.10.10.27:8080/cal-repo-api/repo" + "user/login";

            $http.post(authenticationUrl, {
                userName: username, password: password
            }).success(function (response) {
                callback(response);
            }).error(function (err, status) {
                callback({
                    success: false,
                    data: {message: 'Server Error'}
                })
            });

        }

    }

})();