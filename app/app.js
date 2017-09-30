'use strict';
 
angular.module('myApp', [
    'ngRoute',
    'myApp.home'           // Newly added home module
]).
config(['$routeProvider', function($routeProvider) {
    // Set defualt view of our app to home
     
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);