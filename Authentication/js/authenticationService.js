(function () {
    'use strict';

    app.service('AuthenticationService', function () {

        this.authenticate = function (username, password) {

            this.username = "admin";
            this.password = "pass";

            if (username === this.username && password === this.password) {
                console.log("Authenticated");
            } else {
                console.log("Invalid username or password");
            }
        }

    });

})();