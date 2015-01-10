var AngularTemplate = angular.module('AngularTemplate', ['ngRoute', 'ui.bootstrap']);

AngularTemplate.controller('LandingPageController', LandingPageController);

var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {
    $locationProvider.hashPrefix('!').html5Mode(true);

    $routeProvider.
        when('/routeTemplate', {
            templateUrl: 'Template/'
        })
        .when('/routeOne', {
            templateUrl: 'Template/one'
        });
}
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

AngularTemplate.config(configFunction);