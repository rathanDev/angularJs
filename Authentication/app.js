(function () {
    'use strict';

    var app = angular.module('myApp', []);

    app.run(function ($rootScope, $location) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            console.log('Changed state to: ' + toState);
        });

        // if(!LoginService.isAuthenticated()) {
        //     $state.transitionTo('login');
        // }
    });

    app.controller('HomeController', function ($rootScope) {
        $rootScope.title = "AngularJs Login Sample Page";
    });

    app.directive('loginDirective', function () {
        return {
            // template: "A login directive template"
            templateUrl: 'login.html'
        }
    });

})();