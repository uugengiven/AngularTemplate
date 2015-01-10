var AngularTemplate = angular.module('AngularTemplate', ['ngRoute']);

AngularTemplate.controller('LandingPageController', LandingPageController);

var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/routeTemplate', {
            templateUrl: 'Template/'
        })
        .when('/routeOne', {
            templateUrl: 'Template/one'
        });
}
configFunction.$inject = ['$routeProvider'];

AngularTemplate.config(configFunction);