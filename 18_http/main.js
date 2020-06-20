const app = angular.module('app', []);

app.directive('fooBar', function () {

    return {
        restrict: 'E',
        templateUrl: 'bookmarks.html',
        link: function (scope, element, attrs) {
            console.log('directive');
        }
    }
});