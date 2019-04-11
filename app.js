/* register the modules the application depends upon here*/
/* register the application and inject all the necessary dependencies */
angular.module('eventLists', []);
var app = angular.module('eventsApp', ['eventLists', 'ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when ('/newhome', {
        templateUrl: 'newhome.html',
        controller: 'ListingsController'
    }).when('/signin', {
        templateUrl: '/signin.html',
        controller: 'myLoginCtrl'
    }).when('/confirmation', {
        templateUrl: 'confirmation.html'
    }).when('/profile', {
        templateUrl: 'profile.html'
    }).when('/eventsinfo', {
        templateUrl: 'eventsinfo.html'
    }).when('/post', {
        templateUrl: 'post.html'
    }).when('/home', {
        templateUrl: 'home.html'
    }).when('/CSAinfo', {
        templateUrl: 'CSAinfo.html'
    }).when('/profile', {
        templateUrl: 'profile.html'
    }).when('/SECinfo', {
        templateUrl: 'SECinfo.html'
    }).otherwise({
        redirectTo: '/newhome'
    });
}]);