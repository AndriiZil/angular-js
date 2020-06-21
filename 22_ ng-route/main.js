const app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })

    $routeProvider
        .when('/posts', {
            templateUrl: 'posts.html'
        })
});

app.controller('homeCtrl', function ($scope) {
    $scope.model = {
        message: 'Message from Controller'
    }
})