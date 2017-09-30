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
.controller('HomeCtrl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
  console.log('Check');
  var firebaseObj = new Firebase("https://codeforgoodembarc-85ea7.firebaseio.com");
  var loginObj = $firebaseSimpleLogin(firebaseObj);
  
  $scope.user = {};
  $scope.SignIn = function(e){ 
     e.preventDefault();
     var username = $scope.user.email;
     var password = $scope.user.password;
     loginObj.$login('password', {
                email: username,
                password: password
            })
            .then(function(user) {
                //Success callback
                console.log('Authentication successful');
            }, function(error) {
                //Failure callback
                console.log('Authentication failure');
            });
  }
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

$scope.redirectToMemories = function () {
   $location.path('/memories');
};

<script src="home/home.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>

