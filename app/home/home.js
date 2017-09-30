'use strict';
 
angular.module('myApp.home', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
    $routeProvider.when('/memories', {
        templateUrl: 'memories/memories.html',
        controller: 'MemoriesCtrl'
    });
    $routeProvider.when('/reflections', {
        templateUrl: 'reflections/reflections.html',
        controller: 'ReflectionsCtrl'
    });
    $routeProvider.when('/feedback', {
        templateUrl: 'feedback/feedback.html',
        controller: 'FeedbackCtrl'
    });
}])
 
// Home controller
.controller('HomeCtrl', [function($scope) {
 
}]);

.controller('MemoriesCtrl', [function($scope) {
 
}]);

.controller('ReflectionsCtrl', [function($scope) {
 
}]);

.controller('FeedbackCtrl', [function($scope) {
 
}]);

$routeProvider.otherwise({
        redirectTo: '/home'
    });

<script src="home/home.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>

