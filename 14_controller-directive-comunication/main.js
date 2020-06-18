const app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    $scope.posts = [
        { name: 'First post' },
        { name: 'Second post' }
    ];
    $scope.hello = "Hello";

    $scope.getPosts = function () {
        return $scope.posts;
    }
});

app.directive('post', function () {
    return {
        scope: false,
        template: '<div ng-repeat="post in getPosts()">{{ post.name }}</div>',
        link: function (scope, element, attrs) {
            scope.hello = 'Hi';
        }
    }
});