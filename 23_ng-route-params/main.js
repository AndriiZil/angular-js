const app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })

    $routeProvider
        .when('/posts', {
            templateUrl: 'posts.html',
            controller: 'postsCtrl'
        })
        .when('/post/:postId', {
            templateUrl: 'post.html',
            controller: 'postCtrl'
        })
        .otherwise({
            templateUrl: '404.html'
        })
});

app.run(function ($rootScope) {
    console.log('run');
    $rootScope.$on('$routeChangeStart', function (event, current, previous, reject) {
        console.log('routeChangeStart', arguments);
    })

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous, reject) {
        console.log('routeChangeSuccess', arguments);
        $rootScope.currentPath = current.$$route.originalPath;
    })
});

app.controller('homeCtrl', function ($scope) {
    $scope.model = {
        message: 'This is my homepage'
    }
});

app.controller('postCtrl', function ($scope, $routeParams, postsFactory) {
    let postId = Number($routeParams.postId);
    let post = postsFactory.find(post => post.id === postId);
    $scope.post = post;
});

app.controller('postsCtrl', function ($scope, postsFactory) {
    $scope.posts = postsFactory
});

app.controller('pathCtrl', function () {

});

app.factory('postsFactory', function () {
    return [
        { id: 1, name: 'Post1' },
        { id: 2, name: 'Post2' },
        { id: 3, name: 'Post3' }
    ]
})