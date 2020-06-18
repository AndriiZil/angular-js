const app = angular.module('app', []);

app.directive('fooBar', function () {
    let bookmarks = [
        { id: 1, name: 'ReactJS' },
        { id: 2, name: 'VueJS' }
    ];

    return {
        restrict: 'E',
        templateUrl: 'bookmarks.html',
        link: function (scope, element, attrs) {
            console.log('directive');
            scope.bookmarks = bookmarks;
        }
    }
});