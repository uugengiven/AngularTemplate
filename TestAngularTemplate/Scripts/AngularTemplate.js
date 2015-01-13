var AngularTemplate = angular.module('AngularTemplate', ['ngRoute', 'ui.bootstrap']);

AngularTemplate.controller('LandingPageController', LandingPageController);
AngularTemplate.controller('LoginController', LoginController);
AngularTemplate.controller('RegisterController', RegisterController);

AngularTemplate.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);

var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {
    $locationProvider.hashPrefix('!').html5Mode(true);

    $routeProvider.
        when('/routeTemplate', {
            templateUrl: 'Template/'
        })
        .when('/routeOne', {
            templateUrl: 'Template/one'
        })
        .when('/Login?returnUrl', {
            templateUrl: 'Account/Login',
            controller: LoginController
        })
        .when('/Register', {
            templateUrl: 'Account/Register',
            controller: RegisterController
        });
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

AngularTemplate.config(configFunction);